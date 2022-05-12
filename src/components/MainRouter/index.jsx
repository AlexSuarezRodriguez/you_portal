import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/Routes';
import Navbar from '../NavBar';
import HomePage from '../../page/HomePage';

function Mainrouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
