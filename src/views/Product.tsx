import {ReactElement} from 'react';
import {observer} from 'mobx-react-lite';
import products from '../models/State';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';


const Product: React.FunctionComponent<{index: number}> = observer((props) => {
	const i = props.index;
	
	const buttonDel: ReactElement = <Button 
										size='small'
										variant='contained'
										onClick={() => products.list.splice(i, 1)} 
									>
										Удалить
								 	</Button>;

	const checkbox: ReactElement = <Checkbox				
										checked={products.list[i].data.check}
										onChange={() => products.list[i].changeCheck() }
   									/>;

	return <tr>
		<td>{products.list[i].data.name}</td>
		<td style={{textAlign: 'center'}}>{products.list[i].data.number}</td>
		<td style={{textAlign: 'center'}}>{products.list[i].data.price}</td>
		<td style={{textAlign: 'center'}}>{products.list[i].data.sum}</td>
		<td>{buttonDel}</td>
		<td>{checkbox}</td>
	</tr>
});

export default Product;