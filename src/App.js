//importing components

import logo from "./assets/engineering.jpg";

import { useState } from "react";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Btn from "./components/Btn";
import Modetoggler from "./components/Modetoggler";
import Randomnumber from "./components/Randomnumber";
import Tarehe from "./components/Tarehe";
import InputComponent from "./components/InputComponent";
import InputRegistrationForm from "./components/InputRegistrationForm";
import PropDrilling from "./components/PropDrilling";
import Fruits from "./components/Fruits";
import FruitsCounter from "./components/FruitsContainer";
import { Routes, Route, Link } from "react-router-dom";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";

export default function App() {
  const [fruits] = useState([
    { fruitName: "apple", id: 1 },
    { fruitName: "mango", id: 2 },
    { fruitName: "plum", id: 3 },
  ]);

  const date = new Date();
  const weather = "Snowing";

  //start conditional rendering
  function Workdays() {
    return <h1>Get it done!!</h1>;
  }

  function Weekends() {
    return <h1>Get some rest</h1>;
  }

  function CurrentMessage() {
    const day = new Date().getDay();
    if (day >= 1 && day <= 5) {
      return <Workdays />;
    }
    return <Weekends />;
  }
  //end conditional rendering

  return (
    <div>
      <div className="fruit">
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits} />
      </div>

      <img height={200} src={logo} alt="Logo" />

      <PropDrilling msg="I passed through the Header and the Wrapper and I reached the Button component" />
      <InputRegistrationForm />
      <InputComponent />
      <Tarehe message={date.toLocaleTimeString()} climate={weather} />
      <Randomnumber />
      <Modetoggler />
      <Btn />
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <div>
        <CurrentMessage />
      </div>

      <Heading firstname="Geoffrey" lastname="Wanjala" />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Footer
        firstname="Geoffrey"
        lastname="Wanjala"
        occupation="Senior Developer"
      />
      <Card h2="First card is h2" h3="First card is h3" />
      <Card h2="Second card is h2" h3="Second card is h3" />
      <Card h2="Third card is h2" h3="Third card is h3" />
    </div>
  );
}
