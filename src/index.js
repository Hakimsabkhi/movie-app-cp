import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MoviePage from './components/moviePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path="/" element= {<App/>} />`
<Route path="/moviepage/:id" element= {<MoviePage/>} />`
</Routes>
</BrowserRouter>
);

