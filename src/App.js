
import './App.css';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftBanner from './components/LeftBanner/LeftBanner';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path='/select-category' element={''}/>
        </Routes>
      </BrowserRouter>

    </>


  );
}

export default App;
