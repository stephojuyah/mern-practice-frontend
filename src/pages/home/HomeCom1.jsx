import "../../styles/home.css"
import { Link } from "react-router-dom";

const HomeCom1 = () => {

    return(
        <>
        <div className="contain">
            <div className='header-container'>
                <div className='logo-box'>
                <div><span className='scrib'>Scrabble</span></div>
            </div>
            <nav className='navbar'>
                <Link to="/register" className="linke started">Get Started</Link>
                <Link to="/login" className="linke">Login</Link>
            </nav>
          </div>
          <div className="home-container">
              <div className="main">
                  <p className="up">Welcome to <span className="aside">Scrabble</span></p>
                  <p className="tagline">Your starting point for something better</p>
              </div>
              <div className="main2">
                  <Link to="/register" className="linke started">Get Started</Link>
                  <Link to="/login" className="linke">Login</Link>
              </div>
          </div>

        </div>

        </>
    )
}

export default HomeCom1