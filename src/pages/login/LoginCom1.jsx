import "../../styles/login.css"
import { Link } from "react-router-dom";

const LoginCom1 = () => {

    return(
        <>
        <div className="login-container">
            <div className="form-contain">
                <form className='action' action="">
                    <h2 className="welcome">Welcome back!</h2>
                    <p className="dont">Don't have an account? <Link to="/register">Register</Link></p>
                    <input className='input-boxxx' type="email" placeholder="Email" required/><br />
                    <input className='input-boxxx' type="password" placeholder="Password" required/>
                    <div className="checkkk">
                       <input className="checkkk-button" type="checkbox" required/>
                       <span className="me">Remember me</span>
                    </div>
                    <input type="submit" value="Login" className="login-button"/><br />
                    <Link to="/request_otp" className="forgot">Forgot Password?</Link>
                </form>
            </div>

        </div>

        </>
    )
}

export default LoginCom1