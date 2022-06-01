import {useState} from 'react';
import {observer} from 'mobx-react-lite';
import products from '../models/State';
import EnterValue from './EnterValue';
import Product from '../models/classProduct';
import Button from '@mui/material/Button';

const NewProduct: React.FunctionComponent = observer(() => {
	const [reset, setReset] = useState(true);

	let name: string = 'None';
	let number: number = 0;
	let price: number = 0;
	
	const addProduct  = () => {
		const newproduct = new Product({
			name: name, 
			price: price, 
			number: number, 
			sum: price * number,
			check: true
		});
		products.list.push(newproduct);
	}

	return <div>
			<h4>Добавить новый продукт:</h4>
			<EnterValue  
						name={'Наименование:'}
						changeValue={(value) => name = String(value)} 
						reset={reset}
			/>
			<EnterValue  
						name={'Количество:'}
						changeValue={(value) => number = Number(value)} 
						reset={reset}
			/>
			<EnterValue  
						name={'Цена:'}
						changeValue={(value) =>price = Number(value)} 
						reset={reset}
			/>
			<Button 
					variant='contained'
					onClick={() => {							
									addProduct();
									setReset(!reset);
									}
							}
			>
				Добавить
			</Button>
		</div>
});

export default NewProduct;