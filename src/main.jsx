import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Search from './page/Search.jsx';
import Movie from './page/Movie.jsx';
import Home from './page/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
