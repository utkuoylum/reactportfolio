import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Works from "./Components/works/Works";
import Contact from "./Components/contact/Contact";
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (<BrowserRouter>
    <div className="app">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div></BrowserRouter>
  );
}

export default App;
