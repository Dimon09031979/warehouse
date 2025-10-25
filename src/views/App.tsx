import { styled } from '@mui/material/styles';
import ProductList from './ProductList';
import NewProduct from './NewProduct';
import InTotal from './InTotal';
import Paper from '@mui/material/Paper';
import { ToastContainer } from 'react-toastify';

const AppContainer = styled('div')({
  backgroundColor: 'rgb(240, 240, 240)',
  backgroundImage: 'url("wood.jpg")',
  height: '100vh',
  overflow: 'auto'
});

const Title = styled('h1')({
  margin: 10,
  paddingTop: 10,
  textAlign: 'center',
  fontFamily: 'cursive',
  fontSize: '40px'
});

const ProductContent = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column'
  }
}));

const ProductSection = styled(Paper)({
  padding: '20px',
  margin: '20px',
  flex: 1,
  height: '75vh',
  overflow: 'auto',
});

const Sidebar = styled('div')({
  minWidth: '300px'
});

const WingImage = styled('img')(({ theme }) => ({
  height: '250px',
  display: 'block',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

const App = () => (
  <AppContainer>
    <Title>Warehouse</Title>
    <ProductContent>
      <ProductSection>
        <ProductList />
        <InTotal />
      </ProductSection>
      <Sidebar>
        <NewProduct />
        <WingImage src='wing.png' />
      </Sidebar>
    </ProductContent>
    <ToastContainer />
  </AppContainer>
);

export default App;
