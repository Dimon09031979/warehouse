import { observer } from 'mobx-react-lite';
import productList from '../models/classProductList';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { ProductType } from '../models/classProduct';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';

const Product: React.FunctionComponent<{ index: number }> = observer((props) => {
  const index: number = props.index;
  const product: ProductType = productList.list[index].data;

  const invertCheck = (i: number) => productList.invertCheck(i);
  const delProduct = (i: number) => productList.delProduct(i);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <TableRow>
      <TableCell>{product.name}</TableCell>
      <TableCell align='center'>{product.weight}</TableCell>
      <TableCell align='center'>{product.price}</TableCell>
      <TableCell align='center'>{product.sum}</TableCell>
      <TableCell align='center'>
        <Checkbox checked={product.check} onChange={() => invertCheck(index)} />
      </TableCell>
      <TableCell>
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
              border: '1px solid',
              borderColor: 'secondary.main',
              borderRadius: '4px',
              padding: '4px',
            }}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
});

export default Product;
