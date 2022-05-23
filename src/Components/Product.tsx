import {ReactNode} from 'react';
import {observer} from 'mobx-react-lite';
import products from '../State';


const Product: React.FunctionComponent<{index: number}> = observer((props) => {
	const i = props.index;
	
	const buttonDel: ReactNode = <button onClick={() => products.list.splice(i, 1)} >
						Удалить
					 </button>;
	const checkbox: ReactNode = <input 
						type='checkbox'
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