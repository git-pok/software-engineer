import { 
  BrowserRouter
} from 'react-router-dom';
import ColorRoutes from './ColorRoutes.js';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <ColorRoutes />
    </BrowserRouter>
  );
}

export default App;
