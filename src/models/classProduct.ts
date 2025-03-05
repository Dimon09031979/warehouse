import type { ProductType } from './types';
import { observable, makeObservable } from 'mobx';

class Product {
  @observable
  private _product: ProductType;

  constructor(product: ProductType) {
    makeObservable(this);
    this._product = product;
  }

  get data() {
    return this._product;
  }

  invertCheck() {
    this._product.check = !this._product.check;
  }
}

export default Product;