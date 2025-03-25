import { observable, makeObservable, computed, action } from 'mobx';
import Product, { ProductType } from './classProduct';
import { fetchData, uploadNewProduct } from '../api';

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
      const productList: ProductType[] = await fetchData();
      this.updateList(productList);
    } catch (error) {
      alert("Не удалось загрузить данные:" + error);
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
  delProduct(i: number) {
    this.list.splice(i, 1);
  }

  @action
  async addProduct(newProduct: Product): Promise<boolean> {
    // Временное добавление в список
    this.list.push(newProduct);

    try {
      const response = await uploadNewProduct(newProduct.data);
      if (response.success) {
        return true;
      } else {
        console.error("Ошибка загрузки продукта:", response.message);
        // Отмена добавления продукта
        this.list.pop();
        return false;
      }
    } catch (error) {
      console.error("Ошибка сети или сервера:", error);
      // Отмена добавления продукта
      this.list.pop();
      return false;
    }
  }
}

const productList = new ProductList();

export default productList;
