import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 40,
      strings: ["Javascript","React", "Css","Wordpress", "... LOVE ❤️"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./src/assets/nobgpp.png" alt="utku avatar" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Frontend Developer</h2>
          <h1>Etem Utku Oylum</h1>
          <h3>
            I create with <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      <a href="https://drive.google.com/file/d/1Tz5KrFpk1RpWKrpWbhkHDd7MciUVWevl/view?usp=drive_link" target="_blank" className="cv"><i className='bx bxs-download'></i>Download My Cv</a>
    </div>
  );
}
