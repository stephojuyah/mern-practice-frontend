import '../../styles/register.css'
import { Link } from "react-router-dom";

const RegisterCom1 = () => {
    return (
        <>
        <div className='register-container'>
            <div className='form'>
                <form className='form2' action="">
                    <h2 className='get'>Getting Started</h2>
                    <p className='have'>Already have an account? <Link to="/login">Login</Link></p>
                    <input className='input-box' type="text" name='name' placeholder='Name' required/><br />
                    <input  className='input-box' type="email" name='email' placeholder='Email' required/><br />
                    <input className='input-box' type="tel" name='tel' placeholder='Phone number' required/><br />
                    <input className='input-box' type="password" name='password' placeholder='Password' required/><br />
                    <input className='input-box' type="password" name='password' placeholder='Confirm password' required/>
                    <input className='create-link' type="submit" value='Create account'/>
                    {/* <a href="" className='create-link'>Create account</a> */}
                    <div className='check1'>
                        <input className='check-button' type="checkbox" required/>
                        <span className='policy'>I accept the Terms of Use and acknowledge the <a href=''>Privacy Policy</a></span>
                    </div>
                </form>
            </div>

        </div>
        </>
    )
}

export default RegisterCom1