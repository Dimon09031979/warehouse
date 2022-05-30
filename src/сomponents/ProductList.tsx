import {observer} from 'mobx-react-lite';
import products from '../model/State';
import Product from './Product';

const ProductList = observer(() => {
    const rows = products.list.map(
        (product, i) => <Product index ={i} />
    );

    return <div>
        <h3>Список продуктов:</h3>
			<table>
				<tr>
					<th>&#160; Наименование &#160;</th>
					<th>&#160; Количество кг &#160;</th>
					<th>&#160; Цена руб &#160;</th>
					<th>&#160; Стоимость руб &#160;</th>
				</tr>
				{rows}
			</table>
    </div>
});

export default ProductList;