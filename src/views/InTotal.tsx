import { observer } from 'mobx-react-lite';
import productList from '../models/classProductList';

const InTotal: React.FunctionComponent = observer(() => (
  <h3 style={{ background: 'white' }}>
    Total cost: ${productList.sum}
  </h3>
));

export default InTotal;