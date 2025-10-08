import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        className="toast-container-center" // কাস্টম ক্লাস
        toastClassName="toast-center" // প্রতিটা টোস্টের ক্লাস
        position="top-right" // এখানে কোনটা দিলেও আমরা CSS দিয়ে স্থাপন করব
        closeOnClick
        draggable={false}
      />
    </div>
  );
};

export default Root;
