import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Mainlayout = () => {
  return (
    <>
      <Navbar />
      {/* <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
        <Navbar /> */}
      {/* <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Mainlayout;
