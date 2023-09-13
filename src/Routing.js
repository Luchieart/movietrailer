import React from 'react';
import { useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import ReactDOM from 'react-dom/client';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MovieApp from './pages/index';

const Routing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    
    return (
       <AnimatePresence>
         <Router>
         <Routes>
             <Route path="/" element={<MovieApp />} />
             {/* <Route path="/products" element={<Products />} />
             <Route path="/about" element={<About />} /> */}
          </Routes>
         </Router>
       </AnimatePresence>
    );
   };
   
   export default Routing;