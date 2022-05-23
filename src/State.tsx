import {observable, makeObservable} from 'mobx';
import type {ProductType} from './types';
import Product from './classProduct';

class ProductsClass {
	list: Product[] = [];

	constructor() {
		makeObservable(this, {
			list: observable
		});
		let productList: ProductType[] = [
			{name: 'Яблоки', price: 23, number: 25, sum: 45,},
			{name: 'Картошка', price: 12, number: 230,},
			{name: 'Мясо', price: 120, number: 15,},
			{name: 'Помидоры', price: 55, number: 12,},
		];
		productList.forEach(
			(product) => {
				product.sum = product.price * product.number;
				product.check = true
		});

		this.list = productList.map( prod => new Product(prod));
	}
}

const products = new ProductsClass;

export default products;