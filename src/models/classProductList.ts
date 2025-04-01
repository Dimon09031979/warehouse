import { observable, makeObservable, computed, action, runInAction } from 'mobx';
import Product, { ProductType } from './classProduct';
import { deleteProductById, downloadData, uploadNewProduct } from '../api';
import { toast } from 'react-toastify';

class ProductList {
  @observable
  list: Product[] = [];

  @computed
  get sum() {
    let sum = 0;
    this.list.forEach(product => {
      if (product.data.check) {
        sum += Number(product.data.sum);
      }
    });
    return sum;
  }

  constructor() {
    makeObservable(this);
    this.initializeList();
  }

  async initializeList() {
    try {
      const productList: ProductType[] = await downloadData();
      this.updateList(productList);
    } catch (error) {
      toast.error("Failed to load data:" + error);
    }
  }

  @action
  updateList(productList: ProductType[]) {
    productList.forEach((product) => {
      product.sum = product.price * product.weight;
      product.check = true;
    });
    this.list = productList.map(prod => new Product(prod));
  }

  @action
  invertCheck(i: number) {
    this.list[i].invertCheck();
  }

  @action
  async delProduct(i: number) {
    const id = this.list[i].data.id;
    if (!id) return;
    try {
      await deleteProductById(id);
      runInAction(() => {
        this.list.splice(i, 1);
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Network Error");
      }
    }
  }

  @action
  async addProduct(newProduct: Product): Promise<void> {
    runInAction(() => {
      this.list.push(newProduct);
    });

    try {
      const response = await uploadNewProduct(newProduct.data);

      if (!response.success) {
        toast.error(response.message || "Unknown Error");
        runInAction(() => {
          this.list.pop();
        });
        return;
      }

      runInAction(() => {
        newProduct.data.id = response.id;
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Network Error");
      runInAction(() => {
        this.list.pop();
      });
    }
  }
}

const productList = new ProductList();

export default productList;
