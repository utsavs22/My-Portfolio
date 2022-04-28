import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Features</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Designing</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://i.redd.it/4rz9wpyvpbb31.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.redd.it/4rz9wpyvpbb31.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.redd.it/4rz9wpyvpbb31.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.redd.it/4rz9wpyvpbb31.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.redd.it/4rz9wpyvpbb31.jpg" width="100px" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://i.redd.it/4rz9wpyvpbb31.jpg" width="100px" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
