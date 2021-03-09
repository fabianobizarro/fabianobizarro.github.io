// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux'
// import store, { saveState } from '../new/src/store';
// import { changeLanguage } from "../new/src/actions";

// import './style/style.css';
// import './style/style.sass';
// import 'animate.css';

// import Menu from './Components/Menu';
// import BaseInfo from './Components/BaseInfo';
// import Tabs from './Components/Tabs';
// import Footer from './Components/Footer';

// const App = () => (
//     <div>
//         <Menu />
//         <section >
//             <BaseInfo />
//             <Tabs />
//         </section>
//         <Footer/>
//     </div>
// );

// let containerElement = document.getElementById("container");
// let lang = containerElement.getAttribute('lang');

// store.subscribe(()=>{
//     saveState(store.getState())
// });

// store.dispatch(changeLanguage(lang));

// ReactDOM.render(<Provider store={store}>
//     <App />
// </Provider>, containerElement);
