import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Contact from "./Components/contact/Contact";
import Menu from "./Components/menu/menu";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = (e) => {
    setMenuActive(!menuActive);
  };

  return (<BrowserRouter>
    <div className="app">
      <Topbar menuActive={menuActive} handleMenu={handleMenuActive} />
      {/* <Menu menuActive={menuActive} handleMenu={handleMenuActive} /> */}
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div></BrowserRouter>
  );
}

export default App;
