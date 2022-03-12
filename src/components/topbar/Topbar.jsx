import "./topbar.scss"
import {Person,Mail} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">giga.chad</a>
            <div className="itemContainer">
              <Person className="icon"/>
              <span>6205910459</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon"/>
              <span>utsavsinha22.official@gmail.com</span>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
    </div>
  )
}
