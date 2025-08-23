import "../../styles/home.css"

const HomeCom1 = () => {

    return(
        <>
        <div className="contain">
            <div className='header-container'>
                <div className='logo-box'>
                <div><span className='scrib'>Scrabble</span></div>
            </div>
            <nav className='navbar'>
                <a href="" className='link started'>Get Started</a>
                <a href="" className='link'>Login</a>
            </nav>
          </div>
          <div className="home-container">
              <div className="main">
                  <p className="up">Welcome to <span>Scrabble</span></p>
                  <p className="tagline">Your starting point for something better</p>
              </div>
              <div className="main2">
                  <a href="" className="link started">Get Started</a>
                  <a href="" className="link">Login</a>
              </div>
          </div>

        </div>

        </>
    )
}

export default HomeCom1