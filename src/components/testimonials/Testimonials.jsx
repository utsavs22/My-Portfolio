import "./testimonials.scss"

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
        <h1>Testmonials</h1>
        <div className="container">
          <div className="card">
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src="https://i.redd.it/4rz9wpyvpbb31.jpg"  className="user" alt="" />
              <img src="assets/youtube.png" className="right" alt="" />
            </div>
            <div className="center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum maxime suscipit esse? Sapiente modi quis.</div>
            <div className="bottom">
              <h3>Alex</h3>
              <h4>CEO of NMIT</h4>
            </div>
          </div>
        </div>
    </div>
  )
}
