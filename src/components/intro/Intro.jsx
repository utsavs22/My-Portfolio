import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

  const textRef= useRef();
  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      strings: ['Web Developer and Learner' ] 
  })
  }, [])
  
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imageContainer">
            <img src="assets/utsav_cut.jpg" alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Utsav Sinha</h1>
            {/* <span>Web Developer </span> */}
            <h3><span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
