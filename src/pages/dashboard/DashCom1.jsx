import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "../../styles/dash.css"
import "../../styles/logoutpopup.css"
import { Navigate } from "react-router-dom";

const DashCom1 = () => {
    const [note, setNote] = useState('');
    const [username, setUsername] = useState("Jane Doe")
    const [message, setMessage] = useState('')
    const [showLogoutPopup, setShowLogoutPopup] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem("userinfo")
        const person = JSON.parse(user)

        // console.log(person.name)
  
        setUsername(person.name)
    }, [])

    // const handleLogout = () => {
    // localStorage.clear();
    // navigate("/login");
    // };

    const handleLogout = async () => {
       const user = JSON.parse(localStorage.getItem("userinfo"));
       const token = user.token;

       try {
          await fetch("http://localhost:5000/logout", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify({ token }),
        });

        localStorage.clear();
        navigate("/login");
    } catch (error) {
        console.error("Logout failed", error);
       }
    };





    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Note submitted successfully');
        setNote('');
    }

    const handleChange = (e) => {
        setNote(e.target.value);
        if (message) setMessage('');
    };

    const user = localStorage.getItem("userinfo")


    if (!user){
        return(<Navigate to = "/login" replace />);
    } else {
    return (
        <>
        <div className="current-page">
            {showLogoutPopup && (
              <> <div className="overlay"></div>
              <div className="logout-popup">
                <div className="popup-box">
                    <h2 className="head-log">Logout</h2>
                    <p className="sure">Are you sure you want to logout?</p>
                    <div className="button-click">
                      <button className="yes-link pop-link" onClick={() => handleLogout()}>Yes</button>
                      <button className="no-link pop-link" onClick={() => setShowLogoutPopup(false)}>Cancel</button>
                    </div>
                </div>
              </div>
              </>
            )}
            <div className="home-page">
                <div className="section">
                    <div><span className='scrib-home'>Scrabble</span></div>
                    <div className="main">
                        <h2 className="home-welcome">Welcome back, <br />{username}</h2>
                        <form onSubmit={handleSubmit} className="note-form">
                            <textarea className='note' placeholder="Leave a note" onChange={handleChange} value={note} required></textarea><br />
                            <input className='submit-note' type="submit" value='Submit Note' />
                            <p style={{textAlign: 'center'}}>{message}</p>
                        </form>
                    </div>
                </div>
                <aside className="side-bar">
                    <nav className="homee-nav">
                        <a href="" className="nav-link first">Home</a>
                        <a href="" className="nav-link">View Profile</a>
                        <a href="" className="nav-link">View Notes</a>
                        <a href="" className="nav-link">Settings</a>
                        <div className="down-buttons">
                          <button onClick={() => setShowLogoutPopup(true)} className="bbo logout-button">Log Out</button>
                          <button className="bbo delete-link">Delete account</button>
                        </div>
                    </nav>
                </aside>
            </div>
        </div>
        </>

    )
    }

    



}
export default DashCom1



