import { Routes, Route } from "react-router-dom";
// import { useState } from 'react'
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";

import "./App.css";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/"  element={<HomePage/>} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
