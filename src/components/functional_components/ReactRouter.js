import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "../pages/Page1";


export default function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1/>}/>
      </Routes>
    </Router>
  )
}
