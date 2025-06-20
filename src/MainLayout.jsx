import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
      <ToastContainer transition={Slide} />
    </>
  );
};

export default MainLayout;
