import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NetflixRegisterComponent from './components/NetflixRegisterComponent';
import NetflixIndex from './components/NetflixIndexComponent';
import LoginComponent from './components/LoginComponent';
import DataBindingComponent from './components/DataBindingComponent';
import Fakestore from './components/fakestore/fakestore';
import MouseEventComponent from './components/Events/MouseEventComponent'
import Formdemo from './components/forms/Formdemo';
import FormicDemo from './components/Formik/FormicDemo';
import YupValidation from './components/yup/YupValidation';
import FormikComponent from './components/FormikComponent/FormikComponent';
import RoutingComponent from './components/Routing/RoutingComponent';
import ShoppingIndex from './components/ShoppingWithRouting/ShoppingIndex';
import MUIDemo from './components/MUI/MUIDemo';
import Timer from './components/Timer/Timer';
import ParentContext from './components/ContextApi/ParentContext';
import ReducerDemo from './components/Reducer/ReducerDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReducerDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
