import { observer } from 'mobx-react-lite';
import productList from '../models/classProductList';
import Product from './Product';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

const ProductList: React.FunctionComponent = observer(() => {
  const rows: JSX.Element[] = [];
  for (let i = 0; i < productList.list.length; i++) {
    rows.push(<Product index={i} key={i} />);
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align='center'>Name</TableCell>
          <TableCell align='center'>Weight, kg</TableCell>
          <TableCell align='center'>Price, $</TableCell>
          <TableCell align='center'>Cost, $</TableCell>
          <TableCell align='center'>Add to calculation</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
  );
});

export default ProductList;
