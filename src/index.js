import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// eslint-disable-next-line react/jsx-filename-extension
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
