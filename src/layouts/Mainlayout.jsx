 import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
const Mainlayout = () => {
  
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Mainlayout;
