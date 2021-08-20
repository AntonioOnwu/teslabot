import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BackgroundVid from './BackgroundVid';
import ReserveButton from './ReserveButton';
import {StyledText,Button} from './Styles'
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BackgroundVid/>


    


   
  <StyledText> <h1>Email theteslabots@gmail.com for serious inquiries only.</h1></StyledText>
  <ReserveButton/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
