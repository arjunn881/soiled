import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";



export const AllRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
   
  );
};