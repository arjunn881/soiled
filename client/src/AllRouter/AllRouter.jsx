import React from "react";
import { Routes, Route } from "react-router-dom";



export const AllRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
   
  );
};