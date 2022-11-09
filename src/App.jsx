import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className='container border border-danger p-2'>
      <h1>App Component</h1>
      <Counter initialCount={500}></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
