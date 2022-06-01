import {observer} from 'mobx-react-lite';
import products from '../models/State';
import Product from './Product';
import Table from '@mui/material/Table';

const ProductList: React.FunctionComponent = observer(() => {
    const rows: JSX.Element[] = [];
	for (let i=0; i < products.list.length; i++){
		rows.push(<Product index ={i} />);
	};

    return <div>
        <h3>Список продуктов:</h3>
			<Table>
				<tr>
					<th>&#160; Наименование &#160;</th>
					<th>&#160; Количество кг &#160;</th>
					<th>&#160; Цена руб &#160;</th>
					<th>&#160; Стоимость руб &#160;</th>
				</tr>
				{rows}
			</Table>
    </div>
});

export default ProductList;