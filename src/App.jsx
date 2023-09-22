import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro"
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Menu from "./Components/menu/menu";
import { useState } from "react";


function App() {
  const [menuActive, setMenuActive] = useState(false)

  const handleMenuActive = (e) => {
    setMenuActive(!menuActive)
  }

  return (
      <div className="app">
        <Topbar menuActive={menuActive} handleMenu={handleMenuActive}/>
        <Menu menuActive={menuActive} handleMenu={handleMenuActive}/>
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>

  );
}

export default App;
 