import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if('serviceWorker' in navigator){
    window.addEventListener('load',(e)=>{
        navigator.serviceWorker.register('serviceWorker.js')
        .then((ev)=>{
            console.log('service worker registred',ev);
        })
    });
}
ReactDOM.render(<App/>,document.getElementById('root'));
