import "./works.scss"

export default function Works() {

  // const data=[

  // ]
  return (
    <div className="works" id="works">
        <div className="slider">
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="assets/mobile.png" alt="" />
                  </div>
                  <h2>Title</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugiat tempore atque animi?</p>
                  <span>Projects</span>
                  </div>
              </div>
              <div className="right">
                <img src="https://i.redd.it/4rz9wpyvpbb31.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <img src="assets/arrow.png" className="arrow left" alt="" />
        <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  )
}
