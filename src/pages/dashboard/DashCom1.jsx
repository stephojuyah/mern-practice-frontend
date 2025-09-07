import { useState } from "react"
import "../../styles/dash.css"

const DashCom1 = () => {
    const [note, setNote] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Note submitted successfuly');
        setNote('');
    }

    const handleChange = (e) => {
        setNote(e.target.value);
        if (message) setMessage('');
    };



    


    return (
        <>
        <div className="current-page">
            <div className="home-page">
                <div className="section">
                    <div><span className='scrib-home'>Scrabble</span></div>
                    <div className="main">
                        <h2 className="home-welcome">Welcome back, <br />Jane Doe</h2>
                        <form onSubmit={handleSubmit} className="note-form">
                            <textarea className='note' placeholder="Leave a note" onChange={handleChange} value={note} required></textarea><br />
                            <input className='submit-note' type="submit" value='Submit Note' />
                            <p style={{textAlign: 'center'}}>{message}</p>
                        </form>
                    </div>
                </div>
                <aside className="side-bar">
                    <nav>
                        <a href="" className="nav-link first">Home</a>
                        <a href="" className="nav-link">View Profile</a>
                        <a href="" className="nav-link">View Notes</a>
                        <a href="" className="nav-link">Settings</a>
                        <a href="" className="nav-link">Log Out</a>
                    </nav>
                </aside>
            </div>
        </div>
        </>

    )
}
export default DashCom1



