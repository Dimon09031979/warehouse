import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import productList from '../models/classProductList';
import EnterValue from './EnterValue';
import Product from '../models/classProduct';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { fetchData } from '../api';

const Container = styled(Paper)({
  padding: '20px',
  margin: '20px',
  background: 'white',
  maxWidth: 300,
});

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
  let number: number = 0;
  let price: number = 0;

  const handleEnterName = (value: string | number) => (name = String(value));
  const handleEnterNumber = (value: string | number) => (number = Number(value));
  const handleEnterPrice = (value: string | number) => (price = Number(value));

  const addProduct = () => {
    const newproduct = new Product({
      name: name,
      weight: number,
      price: price,
      sum: number * price,
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
