import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () =>{
    const [isLogIn, setLogIn] = useState("login");
    return(
      <div className="header">
        <div >
          <Link to="/"> 
          <img className="logo" src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA"></img>
          </Link>
        </div>
        
        <div className="navbar">
              <Link to="/" className="bold"><div>Home</div></Link>
              <Link to="/contact" className="bold"><div>Contact Us</div></Link>
              <Link to="/about" className="bold"><div>About Us</div></Link>
              <div className="bold">Cart</div>
              <button onClick={()=>((isLogIn == "login") ? setLogIn("logout") : setLogIn("login") )}>{isLogIn}</button> 
        </div>
      </div>
    )
};

export default Header;