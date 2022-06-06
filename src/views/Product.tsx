import {ReactElement} from 'react';
import {observer} from 'mobx-react-lite';
import productList from '../models/classProductList';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ProductType } from '../models/types';

const Product: React.FunctionComponent<{index: number}> = observer((props) => {
	const index: number = props.index;
	const product: ProductType = productList.list[index].data;

	const invertCheck = (i: number) => productList.invertCheck(i);
	const delProduct = (i: number) => productList.delProduct(i);
	
	const buttonDel: ReactElement = <Button 
										size='small'
										variant='outlined'
										color='secondary'
										startIcon={<DeleteIcon />}
										onClick={() => delProduct(index)} 
									>
										Удалить
								 	</Button>;

	const checkbox: ReactElement = <Checkbox				
										checked={product.check}
										onChange={() => invertCheck(index)}
   									/>;

	return <TableRow>

		<TableCell>{product.name}</TableCell>
		<TableCell align="center">{product.number}</TableCell>
		<TableCell align="center">{product.price}</TableCell>
		<TableCell align="center">{product.sum}</TableCell>
		<TableCell>{checkbox}</TableCell>
		<TableCell>{buttonDel}</TableCell>
		
	</TableRow>
});

export default Product;