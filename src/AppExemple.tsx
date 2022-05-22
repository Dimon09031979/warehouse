import {observable} from 'mobx';
import {observer} from 'mobx-react-lite';

const State = observable({
  value: ''
});

const App = observer(() => {
  return (
    <div className="App">
      <input onChange={ e => State.value = e.target.value}/>
      <h1>{State.value}</h1>
    </div>
  );
});

export default App;
