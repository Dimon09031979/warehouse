import {ReactElement} from 'react';
import {observer} from 'mobx-react-lite';
import products from '../models/State';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';



const Product: React.FunctionComponent<{index: number}> = observer((props) => {
	const i = props.index;
	
	const buttonDel: ReactElement = <Button 
										size='small'
										variant='outlined'
										color='secondary'
										startIcon={<DeleteIcon />}
										onClick={() => products.list.splice(i, 1)} 
									>
										Удалить
								 	</Button>;

	const checkbox: ReactElement = <Checkbox				
										checked={products.list[i].data.check}
										onChange={() => products.list[i].changeCheck() }
   									/>;

	return <TableRow>
		<TableCell>{products.list[i].data.name}</TableCell>
		<TableCell align="center">{products.list[i].data.number}</TableCell>
		<TableCell align="center">{products.list[i].data.price}</TableCell>
		<TableCell align="center">{products.list[i].data.sum}</TableCell>
		<TableCell>{checkbox}</TableCell>
		<TableCell>{buttonDel}</TableCell>
	</TableRow>
});

export default Product;