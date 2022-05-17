import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HOME_ROUTE,
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  FORM_TEMPLATE,
  YOU_PORTAL,
} from '../../constants/Routes';
import Navbar from '../NavBar';
import HomePage from '../../page/HomePage';
import Login from '../../page/Login';
import Register from '../../page/Register';
import ForgotPassword from '../../page/ForgotPassword';
import FormTemplate from '../../page/FormTemplate';
import TemplateUser from '../../page/TemplateUser';

function Mainrouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={FORM_TEMPLATE} element={<FormTemplate />} />
        <Route path={YOU_PORTAL} element={<TemplateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Mainrouter;
