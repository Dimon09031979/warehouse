import {ReactNode} from 'react';
import {observer} from 'mobx-react-lite';
import Products from '../State';

const Product: React.FunctionComponent<{index: number}> = observer((props) => {
	const i = props.index;
	
	const buttonDel: ReactNode = <button onClick={() => Products.splice(i, 1)} >
						Удалить
					 </button>;
	const checkbox: ReactNode = <input 
						type='checkbox'
						checked={Products[i].check}
						onChange={() => Products[i].check = !Products[i].check}
   	/>;

	return <tr>
		<td>{Products[i].name}</td>
		<td style={{textAlign: 'center'}}>{Products[i].number}</td>
		<td style={{textAlign: 'center'}}>{Products[i].price}</td>
		<td style={{textAlign: 'center'}}>{Products[i].sum}</td>
		<td>{buttonDel}</td>
		<td>{checkbox}</td>
	</tr>
});

export default Product;