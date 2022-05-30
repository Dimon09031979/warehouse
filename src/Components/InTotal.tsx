import {observer} from 'mobx-react-lite';
import products from '../model/State';

const InTotal: React.FunctionComponent = observer(() => {
	let sum: number = 0;
	products.list.forEach(
		(product) => {
			if (product.data.check) {
				sum += Number(product.data.sum);
			}
		}
	);
	return <p>
		Итого cтоимость: {sum}руб
	</p>
});

export default InTotal;