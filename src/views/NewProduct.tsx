import {useState} from 'react';
import {observer} from 'mobx-react-lite';
import productList from '../models/classProductList';
import EnterValue from './EnterValue';
import Product from '../models/classProduct';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const NewProduct: React.FunctionComponent = observer(() => {
	const [reset, setReset] = useState<boolean>(true);

	let name: string = 'None';
	let number: number = 0;
	let price: number = 0;
	
	const handleEnterName = (value: string | number) => name = String(value);
	const handleEnterNumber = (value: string | number) => number = Number(value);
	const handleEnterPrice = (value: string | number) => price = Number(value);

	const addProduct  = () => {
		const newproduct = new Product({
			name: name, 
			number: number, 
			price: price, 
			sum: number * price,
			check: true
		});
		productList.addProduct(newproduct);
		setReset(!reset);
	}

	return <Box
				component={Paper}
				sx={{
					padding: '20px',
					margin: '20px',
					background: 'white'
				}}
			>

		<h3 style={{margin: '0px'}}>Добавить новый продукт:</h3>

		<EnterValue  
					name='Наименование'
					uploadValue={handleEnterName} 
					reset={reset}
		/>

		<EnterValue  
					name='Количество'
					uploadValue={handleEnterNumber} 
					reset={reset}
		/>

		<EnterValue  
					name='Цена'
					uploadValue={handleEnterPrice} 
					reset={reset}
		/>

		{/* c 3-мя EnterValue гугл хром выдаёт подсказку пароля */}
		<input style={{display: 'none'}}/> 
	
		<Button 
				variant='contained'
				onClick={addProduct}
		>
			Добавить
		</Button>

	</Box>
});

export default NewProduct;