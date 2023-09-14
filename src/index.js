import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const root = document.getElementById('root');
// const paragraph = React.createElement('p', {
//   id: 'js-text',
//   className: 'text',
//   children: 'hello Artem',
// });
// const p = (
//   <p className="text" id="js-text">
//     hello
//   </p>
// );

// const div = (
//   <div className="nav" id="first">
//     {p}
//   </div>
// );
// const div = React.createElement('div', {
//   id: 'first',
//   className: 'nav',
//   children: p,
// });
// console.log(div);
