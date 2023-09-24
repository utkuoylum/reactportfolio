import "./topbar.scss";
import clsx from "clsx";
import {NavLink} from "react-router-dom"

export default function Topbar(props) {
  const {menuActive,handleMenu} = props

  const classes = clsx({
    topbar: true,
    active: menuActive === true
  })
  return (
    <div className={classes} id="topbar">
      <a href="#intro" className="logo">oylum.</a>
      <div className="wrapper">
          <div className="navItems">
            <NavLink to="/" className={({isActive})=>isActive ? "selected": ""}>home</NavLink>
            <NavLink to="/portfolio" className={({isActive})=>isActive ? "selected": ""}>portfolio</NavLink>
            <NavLink to="/works" className={({isActive})=>isActive ? "selected": ""}>works</NavLink>
            <NavLink to="/contact" className={({isActive})=>isActive ? "selected": ""}>contact</NavLink>
          </div>
       
          <div className="hamburger" onClick={handleMenu}>
          <span className="menubar"></span>
          <span className="menubar"></span>
          <span className="menubar"></span>
          </div>
      </div>
    </div>
  );
}
