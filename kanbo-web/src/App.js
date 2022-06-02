import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';

import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* <Route path="/kategori">
          <Route element={<Kategori />} index />
          <Route path=":category">
            <Route element={<Wisata />} index />
            <Route path="detail-wisata/:id" element={<DetailWisata />} />
          </Route>
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className="text-3xl font-bold underline">
    //       Edit <code>src/App.js</code> and save to reload..
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
