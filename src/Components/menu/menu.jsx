import clsx from "clsx"
import "./menu.scss"

export default function Menu(props) {
    const classes = clsx({
        menu: true,
        active: props.menuActive === true
    })
  return (
    <div className={classes}>
        <ul>
            <li onClick={props.handleMenu}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={props.handleMenu}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={props.handleMenu}>
                <a href="#works">Works</a>
            </li>
            <li onClick={props.handleMenu}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={props.handleMenu}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
