
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import ManageCustOrder from './Pages/ManageCustOrder';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/manage-cust-order' element={<ManageCustOrder/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;