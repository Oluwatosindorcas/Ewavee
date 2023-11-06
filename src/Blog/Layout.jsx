// import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
// import Testnav from "./components/navbar/testnav";

function BlogLayout({ children }) {
  // const [showNavbar, setShowNavbar] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   // You can adjust the scroll position value as needed
  //   const scrollPosition = window.scrollY;

  //   // If the user has scrolled down a certain amount, hide Navbar and show Testnav
  //   if (scrollPosition > 100) {
  //     setShowNavbar(false);
  //   } else {
  //     setShowNavbar(true);
  //   }
  // };
  return (
    <div>
      {<Navbar />}
      {children}
      <Footer />
    </div>
  );
}

export default BlogLayout;
