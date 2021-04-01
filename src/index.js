import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),

);
*/
ReactDOM.render(<Header/>,document.getElementById('header'));
ReactDOM.render(<Footer/>,document.getElementById('footer'));
//ReactDOM.render(<Login/>,document.getElementById('login'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
