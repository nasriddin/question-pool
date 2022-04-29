import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import menuElements from "./utils/menuElements";


const container = document.getElementById('app');
// @ts-ignore
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar menus={menuElements} />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

