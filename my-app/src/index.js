import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello, world!</h1>)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );
// const element2 = (
//   <div>
//     <h1>Hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

// // const element3 = (
// //   <h1 className='geeting'>
// //     Hello, world!
// //   </h1>
// // )

// // const element3 = React.createElement(
// //   'h1',
// //   {className: 'greeting'},
// //   'Hello, world'
// // )

// const element3 = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Helo, mundo!'
//   }
// }
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }


// root.render(<Welcome name='Claudio' />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();