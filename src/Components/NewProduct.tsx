import {useState} from 'react';
import {observer} from 'mobx-react-lite';
import Products from '../State';
import EnterValue from './EnterValue';

const NewProduct: React.FunctionComponent = observer(() => {
	const [reset, setReset] = useState(true);

	let name: string = 'None';
	let number: number = 0;
	let price: number = 0;
	
	const addProduct  = () => {
		Products.push({
			name: name, 
			price: price, 
			number: number, 
			sum: price * number,
			check: true
		});
	};

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
			<button onClick={() => {							
									addProduct();
									setReset(!reset);
									}
							}
			>
				Добавить
			</button>
		</div>
});

export default NewProduct;