import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME_ROUTE, LOGIN, REGISTER, FORGOT_PASSWORD } from '../../constants/Routes';
import Navbar from '../NavBar';
import HomePage from '../../page/HomePage';
import Login from '../../page/Login';
import Register from '../../page/Register';
import ForgotPassword from '../../page/ForgotPassword';

function Mainrouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
