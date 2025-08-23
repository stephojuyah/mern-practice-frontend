import '../styles/header.css'
// import  from '../assets/logo.png'

function Header() {
    return (
        <>
          <div className='header-container'>
            <div className='logo-box'>
                <div><span className='scrib'>Scrabble</span></div>
            </div>
            <nav className='navbar'>
                <a href="" className='link started'>Get Started</a>
                <a href="" className='link'>Login</a>
            </nav>
          </div>
        </>
    )
}

export default Header