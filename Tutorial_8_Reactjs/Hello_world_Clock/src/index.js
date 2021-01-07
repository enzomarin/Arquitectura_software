import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name = 'Enzo Marin';
const element = <h1> Hello, {name}</h1>;

// funcion javascript
function formatName(user){
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'Enzo',
  lastName: 'Marin'
};
 
const elemetn2 =(
  <h2>Hello, {formatName(user)}! </h2>
);

function tick() {
  const element = (
    <div>
      <h1>Hello, {formatName(user)}!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
