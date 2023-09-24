import "./topbar.scss";
import {NavLink} from "react-router-dom"

export default function Topbar() {

  return (
    <div className="topbar" id="topbar">
      <a href="/" className="logo">oylum.</a>
     
          <div className="navItems">
            <NavLink to="/" className={({isActive})=>isActive ? "selected": ""}>home</NavLink>
            <NavLink to="/works" className={({isActive})=>isActive ? "selected": ""}>works</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive ? "selected": ""}>contact</NavLink>
     
        
      </div>
      <div className="socials">
            <a href="https://github.com/utkuoylum" rel="noreferrer" target="_blank"><i className='bx bxl-github' ></i></a>
            <a href="https://www.linkedin.com/in/utkuoylum/" rel="noreferrer" target="_blank" ><i className='bx bxl-linkedin-square' ></i></a>
          </div>
    </div>
  );
}
