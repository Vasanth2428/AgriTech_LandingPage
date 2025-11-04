import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/InfoSection/InfoSection";
import "./base.css";

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Hero />
      <InfoSection />
    </div>
  );
}


export default App;
