import '../../styles/register.css'
import { useState } from "react"
import { Link } from "react-router-dom";
// import axios from "axios";

const RegisterCom1 = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        
        const res = await fetch("http://localhost:5000/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone_no,
            password,
          }),
        });

        const data = await res.json();
        setMessage(data.msg || "Registration successful");

      // Clear fields on success
      setName("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      setAgree(false);
    } catch (error) {
      setMessage(err.res?.data?.msg || "Something went wrong");
    }
  };



    return (
        <>
        <div className='register-container'>
            <div className='form'>
                <form className='form2' onSubmit={handleSubmit}>
                    <h2 className='get'>Getting Started</h2>
                    <p className='have'>Already have an account? <Link to="/login">Login</Link></p>
                    <input value={name} onChange={(e) => {setName(e.target.value); setMessage("")}} className='input-box' type="text" name='name' placeholder='Name' required/><br />
                    <input value={email} onChange={(e) => {setEmail(e.target.value); setMessage("")}} className='input-box' type="email" name='email' placeholder='Email' required/><br />
                    <input value={phone_no} onChange={(e) => {setPhoneNo(e.target.value); setMessage("")}} className='input-box' type="tel" name='tel' placeholder='Phone number' required/><br />
                    <input value={password} onChange={(e) => {setPassword(e.target.value); setMessage("")}} className='input-box' type="password" name='password' placeholder='Password' required/><br />
                    <input value={password} onChange={(e) => {setPassword(e.target.value); setMessage("")}} className='input-box' type="password" name='password' placeholder='Confirm password' required/>
                    <p style={{textAlign: 'center', fontSize: '10px', marginTop: '0px'}}>{msg}</p>
                    <input checked={agree} onChange={(e) => setAgree(e.target.checked)} className='create-link' type="submit" value='Create account'/>
                    {/* <a href="" className='create-link'>Create account</a> */}
                    <div className='check1'>
                        <input onChange={(e) => setCheck(e.target.value)} className='check-button' type="checkbox" required/>
                        <span className='policy'>I accept the Terms of Use and acknowledge the <a href=''>Privacy Policy</a></span>
                    </div>
                </form>
            </div>

        </div>
        </>
    )
}

export default RegisterCom1