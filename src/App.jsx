import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Body from "./components/Body";
import Timeline from "./components/Timeline";
import Themes from "./components/Themes";
import Guidelines from "./components/Guidelines";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
    // bg-gradient-to-br from-gray-900 via-black to-gray-800
    return (
        <div className="App bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <Header />
            <Navbar />
            <HeroSection />
            <About />
            <WhyUs />
            <Timeline />
            <Themes />
            <Guidelines />
            <ContactUs />
            <Footer />
            {/* <Body /> */}
        </div>
    );
}

export default App;
