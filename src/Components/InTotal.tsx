import {observer} from 'mobx-react-lite';
import Products from '../State';

const InTotal: React.FunctionComponent = observer(() => {
	let sum: number = 0;
	Products.forEach(
		(product) => {
			if (product.check) {
				sum += Number(product.sum);
			}
		}
	);
	return <p>
		Итого cтоимость: {sum}руб
	</p>
});

export default InTotal;