
import './App.css';
import Register from './pages/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftBanner from './components/LeftBanner/LeftBanner';
import Onboarding from './pages/Onboarding/Onboarding';
import MainApp from './pages/MainApp/MainApp';
import NotesCard from './components/NotesCard/NotesCard';
import TimerCard from './components/TimerCard/TimerCard';
import Movies from './pages/Movies/Movies';
import Content from './components/Content/Content';
import axios from 'axios';

// axios baseURl 
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '7577a83213d744074ddb368b0aa750d7'
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path='/select-category' element={''} />
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<MainApp />} />
          <Route path='/notes' element={<NotesCard />} />
          <Route path='/timer' element={<TimerCard />} />
          {/* <Route path='/movies' element={<Movies />} /> */}
          <Route path='/content' element={<Content />} />
        </Routes>
      </BrowserRouter>

    </>


  );
}

export default App;
