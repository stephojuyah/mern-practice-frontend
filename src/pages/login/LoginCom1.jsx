import "../../styles/login.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Link } from "react-router-dom";

const LoginCom1 = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [msg, setMessage] = useState("");

   const navigate = useNavigate();

   const handleSubmit = async (e) => {
       e.preventDefault()

       try {

        const res = await fetch("http://localhost:5000/auth/login", {
            method: "POST" ,
            headers : {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await res.json();
        setMessage(data.msg || "Login successful");

        console.log(data.token)

        const name = data.user.name

        console.log(name)

        const userinfo = {
            token : data.token,
            name: name
        }

        localStorage.setItem("userinfo", JSON.stringify(userinfo))

        const token = localStorage.getItem("token")
        console.log(token)

        if (data.status === 'Success') {
            setTimeout(() => navigate('/home'), 2000);
        } else {
            navigate('/login')
        }


       } catch (error) {
        setMessage(error.res?.data?.msg || "Something went wrong");
       }
   }


    return(
        <>
        <div className="login-container">
            <div className="form-contain">
                <form className='action' onSubmit={handleSubmit}>
                    <h2 className="welcome">Welcome back!</h2>
                    <p className="dont">Don't have an account? <Link to="/register">Register</Link></p>
                    <input value={email} onChange={(e) => {setEmail(e.target.value); setMessage("")}} className='input-boxxx' type="email" placeholder="Email" required/><br />
                    <input value={password} onChange={(e) => {setPassword(e.target.value); setMessage("")}} className='input-boxxx' type="password" placeholder="Password" required/>
                    <div className="checkkk">
                       <input className="checkkk-button" type="checkbox" />
                       <span className="me">Remember me</span>
                    </div>
                    <input type="submit" value="Login" className="login-button"/><br />
                    {/* <p style={{textAlign: 'center', fontSize: '10px', marginTop: '0px'}}>{msg}</p> */}
                    <Link to="/request_otp" className="forgot">Forgot Password?</Link>
                </form>
            </div>

        </div>

        </>
    )
}

export default LoginCom1