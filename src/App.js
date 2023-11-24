import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./pages/Home";
import AdminSignUp from "./pages/auth/AdminSignUp";
import AddBooks from "./pages/books/AddBooks";
import Books from "./pages/books/Books";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin-signup" element={<AdminSignUp />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/add-books" element={<AddBooks />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
