import ProductList from './ProductList';
import NewProduct from './NewProduct';
import InTotal from './InTotal';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const App: React.FunctionComponent = () => {
	return <Box sx={{
					 backgroundColor: 'rgb(240, 240, 240)',
					 height: '97vh',
					 display: 'flex',
					 //overflow: 'auto'
					}}>

		<Box sx={{
					padding: '20px',
					margin: '20px',
					flex: '1',
					overflow: 'auto'
				}}
			component={Paper}
		>
            <ProductList />
			<InTotal />
		</Box>
		<NewProduct />

    </Box>;
};

export default App;