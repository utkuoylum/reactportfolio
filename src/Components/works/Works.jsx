import { useState } from "react";
import "./works.scss"

export default function Works() {
  const [currentSlide,setCurrentSlide] = useState(0)

  const data = [
    {
      id: "1",
      icon: "/assets/mobile.png",
      title: "Grocery App",
      desc:
        "Grocery App built with React and API. Storefront and cart features. Stripe checkout authentication coming soon. ",
        url: "https://grocery-app-utku.netlify.app/",
      img:
        "/assets/grocery.png",
    },
    {
      id: "2",
      icon: "/assets/globe.png",
      title: "My Bank App",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://mybankappp.netlify.app/",
      img:
        "/assets/mybank.png",
    },
    {
      id: "3",
      icon: "/assets/writing.png",
      title: "Personal Website",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        url: "https://utkuoylum.netlify.app/",
      img:
        "/assets/personal.png",
    },
  ];

  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
  }

  return (
    <div className="works" id="works">
      <h1>Portfolio</h1>
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
      
       {data.map(item => (<div className="container" key={item.id}>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={item.icon} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <a href={item.url} target="_blank" rel="noreferrer">See Online</a> 
              </div>
            </div>
            <div className="right">
              <img src={item.img} alt="" />
            </div>
          </div>
          <p className="number">{`${item.id} of ${data.length} projects`}</p>
        </div>))}
        
      </div>
      <i className='bx bxs-chevron-left-square arrow left' onClick={()=>handleClick("left")}></i>
      <i className='bx bxs-chevron-right-square arrow right' onClick={()=>handleClick("")}></i>
      
   

    </div>
  )
}
