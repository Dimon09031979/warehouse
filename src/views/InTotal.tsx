import {observer} from 'mobx-react-lite';
import products from '../models/State';

const InTotal: React.FunctionComponent = observer(() => {
	return <h3 style={{background: 'white'}}>
		Итого cтоимость: {products.sum}руб
	</h3>
});

export default InTotal;