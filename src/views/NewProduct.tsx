import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import productList from '../models/classProductList';
import EnterValue from './EnterValue';
import Product from '../models/classProduct';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Container = styled(Paper)(({ theme }) => ({
  padding: '20px',
  margin: '20px',
  background: 'white',
  maxWidth: 300,
    [theme.breakpoints.down('sm')]: {
    padding: '4px',
    margin: '4px',
  },
}));

const Title = styled('h3')({
  margin: '0px'
});

const HiddenInput = styled('input')({
  display: 'none'
});

const ButtonContainer = styled('div')({
  textAlign: 'right'
});

const NewProduct: React.FunctionComponent = observer(() => {
  const [reset, setReset] = useState<boolean>(true);

  let name: string = 'None';
  let weight: number = 0;
  let price: number = 0;

  const handleEnterName = (value: string) => (name = value);
  const handleEnterNumber = (value: string) => (weight = Number(value.replace(',', '.')));
  const handleEnterPrice = (value: string) => (price = Number(value.replace(',', '.')));

  const addProduct = () => {
    const newproduct = new Product({
      name: name,
      weight: weight,
      price: price,
      sum: parseFloat((price * weight).toFixed(2)),
      check: true
    });
    productList.addProduct(newproduct);
    setReset(!reset);
  };

  return (
    <Container>
      <Title>Add a new product:</Title>
      <EnterValue name='Name' uploadValue={handleEnterName} reset={reset} />
      <EnterValue name='Weight' uploadValue={handleEnterNumber} reset={reset} />
      <EnterValue name='Price' uploadValue={handleEnterPrice} reset={reset} />
      <HiddenInput />
      <ButtonContainer>
        <Button variant='contained' onClick={addProduct}>
          Add
        </Button>
      </ButtonContainer>
    </Container>
  );
});

export default NewProduct;
