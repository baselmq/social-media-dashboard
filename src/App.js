<<<<<<< HEAD

import React from "react";
import Cover from "./components/Cover";
export default function App() {
  return(
<div >
    <Cover />
    
</div>
  ); 
=======
import CardAbout from "./components/CardAbout";
import NavBar from "./components/NavBar";
import "./css/index.css";
import CardActive from "./components/CardActive";
import CardMightKnow from "./components/CardMightKnow";
// import { BrowserRouter } from 'react-router-dom';
import Sidebar from "./components/SideBar";
import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bodyApp">
      <NavBar />
      <Sidebar />
      <AddPost/>
      <Posts/>



      <BrowserRouter>
      <Routes>
        {/* the index of the web */}
      <Route path="/" element={<Signin />} /> 
      <Route path="/signup" element={<Signup />} />
        {/* <Route path="/home" element={<Home />} /> */}

      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </div>
  );
>>>>>>> b015dc292ac23790bc110c80ee81edc82d3ee380
}

