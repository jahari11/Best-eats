import React from "react";
import HeadlineCard from "./Componets/HeadlineCard";
import Hero from "./Componets/Hero";
import Navbar from "./Componets/Navbar";
import Food from "./Componets/Food";
import Category from "./Componets/Category";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlineCard/>
      <Food />
      <Category/>
    </div>
  );
}

export default App;
