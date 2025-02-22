//importin components
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

export default function App() {
  return (
    <div>
      <Randomnumber />
      <Modetoggler />
      <Btn />
      <Nav />
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
