import {observer} from 'mobx-react-lite';
import ProductList from './сomponents/ProductList';
import NewProduct from './сomponents/NewProduct';
import InTotal from './сomponents/InTotal';

const App = observer(() => {
	return <div>
            <ProductList />
			<NewProduct />
			<InTotal />
        </div>;
});

export default App;