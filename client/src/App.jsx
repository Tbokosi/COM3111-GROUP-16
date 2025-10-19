<<<<<<< HEAD
import { useState } from 'react'

import CartPage from './pages/Cart'
import ProductsPage from './pages/ProductsPage'
<<<<<<< HEAD
import { HomePage } from './pages/HomePage'

=======
import {Footer} from './components/Footer'
>>>>>>> origin/makawa-lesheck

function App() {
   return (
    <>
<<<<<<< HEAD
<HomePage></HomePage>
=======
<ProductsPage></ProductsPage>

>>>>>>> origin/makawa-lesheck
    </>
   
 
   )
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
>>>>>>> origin/joyce-joseph
}

export default App;