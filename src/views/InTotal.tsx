import {observer} from 'mobx-react-lite';
import products from '../models/State';

const InTotal: React.FunctionComponent = observer(() => {
	return <p>
		Итого cтоимость: {products.sum}руб
	</p>
});

export default InTotal;