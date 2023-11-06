import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Side from "../Components/Sidebar/Side";
import Header from "../Components/Header/Header";
import Doings from "../Components/Doings/Doings";
import Banner from "../Components/Banner/Banner";
import Tab from "../Components/Tab/Tab";
import Trust from "../Components/Trust/Trust";
import Reminder from "../Components/Reminder/Reminder";
import Text from "../Components/Text/Text";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Side />
      <Header />
      <Doings />
      <Banner />
      <Tab />
      <Trust />
      <Reminder />
      <Text />
      <Footer />
    </div>
  );
}

export default Home;
