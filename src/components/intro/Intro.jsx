import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imageContainer">
            <img src="assets/man.png" alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Utsav Sinha</h1>
            <h3><span>Web Developer</span> and<span> Learner</span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
