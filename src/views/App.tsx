import ProductList from './ProductList';
import NewProduct from './NewProduct';
import InTotal from './InTotal';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const App: React.FunctionComponent = () => {
	return <Box sx={{
					 backgroundColor: 'rgb(240, 240, 240)',
					 backgroundImage: 'url("wood.jpg")',
					 height: '100vh',
					 overflow: 'auto'
					}}>

		<h1 style={{
					margin: 10,
					paddingTop: 10,
					textAlign: 'center',
					fontFamily: 'cursive',
					fontSize: '40px'
		}}>
			Гроссбух
		</h1>
		<Box sx={{
			display: 'flex', 
			alignItems: 'flex-start'
		}}>
			<Box sx={{
						padding: '20px',
						margin: '20px',
						flex: '1',
						height: '75vh',
						overflow: 'auto',
					}}
				component={Paper}
			>
            	<ProductList />
				<InTotal />
			</Box>
			<Box>
				<NewProduct />
				<img src='wing.png' height='250px' style={{display: 'block', margin: '0 auto'}} />
			</Box>
		</Box>
    </Box>;
};

export default App;