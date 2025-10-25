import { observer } from 'mobx-react-lite';
import productList from '../models/classProductList';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ProductType } from '../models/classProduct';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';

const TableCellStyled = styled(TableCell)(({ theme }) => ({
  fontSize: '1em',
  padding: '16px 8px',

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8em',
    padding: '6px 4px',
  },
}));

const Product: React.FunctionComponent<{ index: number }> = observer((props) => {
  const index: number = props.index;
  const product: ProductType = productList.list[index].data;

  const invertCheck = (i: number) => productList.invertCheck(i);
  const delProduct = (i: number) => productList.delProduct(i);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <TableRow>
      <TableCellStyled>{product.name}</TableCellStyled>
      <TableCellStyled align='center'>{product.weight}</TableCellStyled>
      <TableCellStyled align='center'>{product.price}</TableCellStyled>
      <TableCellStyled align='center'>{product.sum}</TableCellStyled>
      <TableCellStyled align='center'>
        <Checkbox checked={product.check} onChange={() => invertCheck(index)} />
      </TableCellStyled>
      <TableCellStyled>
        {isMdUp ? (
          <Button
            size='small'
            variant='outlined'
            color='secondary'
            startIcon={<DeleteIcon />}
            onClick={() => delProduct(index)}
          >
            Delete
          </Button>
        ) : (
          <IconButton
            color='secondary'
            onClick={() => delProduct(index)}
            size='small'
            sx={{
              padding: '4px',
            }}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </TableCellStyled>
    </TableRow>
  );
});

export default Product;
