import EightBall from './EightBall.js';
import data from './helpers.js';
import './App.css';

function App() {
  return (
    <>
      <EightBall answers={ data } />
    </>
  );
}

export default App;
