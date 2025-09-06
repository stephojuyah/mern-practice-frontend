import "../../styles/dash.css"

const DashCom1 = () => {
    return (
        <>
        <div className="current-page">
            <div className="home-page">
                <div className="section">
                    <div><span className='scrib-home'>Scrabble</span></div>
                    <div className="main">
                        <h2 className="home-welcome">Welcome back, <br /> Jane Doe</h2>
                        <form action="" className="note-form">
                            <textarea placeholder="Leave a note" required></textarea><br />
                            <input className='submit-note' type="submit" value='Submit Note' />
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