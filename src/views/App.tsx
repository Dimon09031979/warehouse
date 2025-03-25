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

const ContentWrapper = styled('div')({
  display: 'flex',
  alignItems: 'flex-start'
});

const ProductSection = styled(Paper)({
  padding: '20px',
  margin: '20px',
  flex: 1,
  height: '75vh',
  overflow: 'auto',
  minWidth: '638px'
});

const Sidebar = styled('div')({
  minWidth: '301px'
});

const WingImage = styled('img')({
  height: '250px',
  display: 'block',
  margin: '0 auto'
});

const App = () => (
  <AppContainer>
    <Title>Warehouse</Title>
    <ContentWrapper>
      <ProductSection>
        <ProductList />
        <InTotal />
      </ProductSection>
      <Sidebar>
        <NewProduct />
        <WingImage src='wing.png' />
      </Sidebar>
    </ContentWrapper>
    <ToastContainer />
  </AppContainer>
);

export default App;
