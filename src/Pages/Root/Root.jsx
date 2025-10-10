import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import useApp from "../../Hooks/useCard";
import LoadingSpinner from "../../Component/LoadingSpiner/LoadingSpiner";

const Root = () => {
  const { loading, error } = useApp();
  if (loading) {
    return (
      <div className="full-page-center">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (error) {
    return <div>This iteam will not Fount</div>;
  }
  return (
    <div className="max-w-[1280px] mx-auto bg-[#62738221]">
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
