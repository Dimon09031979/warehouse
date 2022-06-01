import ProductList from './ProductList';
import NewProduct from './NewProduct';
import InTotal from './InTotal';

const App: React.FunctionComponent = () => {
	return <div>
            <ProductList />
			<InTotal />
			<NewProduct />
        </div>;
};

export default App;