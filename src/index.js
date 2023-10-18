import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignUpUser from './SignUpUser';
import AddProduct from './AddProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUpUser />
    <br></br>
    <AddProduct />
  </React.StrictMode>
);

reportWebVitals();
