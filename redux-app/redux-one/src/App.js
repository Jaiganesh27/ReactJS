import './App.css';
import store, { PUSH,POP } from './store';
import {COUNTER_INCREMENT , COUNTER_DECREMENT} from './store';
import Hello from './Hello';
function App() {
  return (
    <div className="App">
      <h1>Redux</h1>
      <button onClick={incCounter}>IncrementCounter</button>
      <button onClick={decCounter}>DecrementCounter</button>
      <button onClick={Push}>Push</button>
      <button onClick={Pop}>Pop</button>

      <Hello />
    </div>
  );
}


function incCounter(){
  store.dispatch({ type: COUNTER_INCREMENT })
  console.log(store.getState().count);
}
function decCounter() {
  store.dispatch({ type: COUNTER_DECREMENT })
  console.log(store.getState().count);
}
function Push() {
  store.dispatch({ type: PUSH,value : Math.random() })
  console.log(store.getState());
}
function Pop() {
  store.dispatch({ type: POP })
  console.log(store.getState());
}

export default App;
