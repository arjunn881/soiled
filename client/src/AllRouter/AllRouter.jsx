import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Blog } from "../Pages/Blog/Blog";



export const AllRouter = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
   
  );
};