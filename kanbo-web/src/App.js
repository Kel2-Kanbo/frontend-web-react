import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Register from './Pages/Register';
import Verification from './Pages/Verification';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/verify' element={<Verification/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
