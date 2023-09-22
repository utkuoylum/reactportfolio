import "./topbar.scss";
import clsx from "clsx"

export default function Topbar(props) {
  const {menuActive,handleMenu} = props

  const classes = clsx({
    topbar: true,
    active: menuActive === true
  })
  return (
    <div className={classes} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">oylum.</a>
          <div className="itemContainer">
          <i className='bx bx-user icon'></i>
          <i className='bx bx-envelope icon' ></i>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleMenu}>
          <span className="menubar"></span>
          <span className="menubar"></span>
          <span className="menubar"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
