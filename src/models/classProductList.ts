import { observable, makeObservable, computed } from 'mobx';
import type { ProductType } from './types';
import Product from './classProduct';

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
    const productList: ProductType[] = [
      { name: 'Яблоки', price: 23, number: 25 },
      { name: 'Картошка', price: 12, number: 230 },
      { name: 'Мясо', price: 120, number: 15 },
      { name: 'Помидоры', price: 55, number: 12 },
    ];
    productList.forEach((product) => {
      product.sum = product.price * product.number;
      product.check = true;
    });

    this.list = productList.map(prod => new Product(prod));
  }

  invertCheck(i: number) {
    this.list[i].invertCheck();
  }

  delProduct(i: number) {
    this.list.splice(i, 1);
  }

  addProduct(newproduct: Product) {
    this.list.push(newproduct);
  }
}

const productList = new ProductList();

export default productList;
