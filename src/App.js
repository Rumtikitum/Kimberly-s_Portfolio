import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
//import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Work } from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Home/>
      <Work/>
      <Services/>
    </div>
  );
}

export default App;
