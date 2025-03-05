import { observer } from 'mobx-react-lite';
import productList from '../models/classProductList';
import Product from './Product';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material';

const TableCellStyled = styled(TableCell)({
  fontWeight: 'bold',
  fontSize: '1em',
});

const ProductList: React.FunctionComponent = observer(() => {
  const rows: JSX.Element[] = [];
  for (let i = 0; i < productList.list.length; i++) {
    rows.push(<Product index={i} key={i} />);
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCellStyled align='center'>Name</TableCellStyled>
          <TableCellStyled align='center'>Weight, kg</TableCellStyled>
          <TableCellStyled align='center'>Price, $</TableCellStyled>
          <TableCellStyled align='center'>Cost, $</TableCellStyled>
          <TableCellStyled align='center'>Add to calculation</TableCellStyled>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
  );
});

export default ProductList;
