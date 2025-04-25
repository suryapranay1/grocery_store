import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <>
      {isSellerPath ? null : <Navbar></Navbar>}
      <div
        className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
