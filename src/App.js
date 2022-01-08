import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import { Work } from './components/Work/Work';

function App() {
  return (
    <Router>
      <div className="App">
        <button onClick={()=>{console.log('hello')}}>clickme</button>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Work" element={<Work/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
