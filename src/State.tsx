import {observable} from 'mobx';
import type {ProductType} from './types';

const Products: ProductType[] = observable([
	{name: 'Яблоки', price: 23, number: 25,},
	{name: 'Картошка', price: 12, number: 230,},
	{name: 'Мясо', price: 120, number: 15,},
	{name: 'Помидоры', price: 55, number: 12,},
]);

Products.forEach(
	(product) => {
		product.sum = product.price * product.number;
		product.check = true
})

export default Products;