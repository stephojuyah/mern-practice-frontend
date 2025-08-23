import '../../styles/register.css'

const RegisterCom1 = () => {
    return (
        <>
        <div className='register-container'>
            <div className='form'>
                <form action="">
                    <h2>Getting Started</h2>
                    <p>Already have an account? <a href="">Login</a></p>
                    <input type="text" name='name' placeholder='Name' required/><br />
                    <input type="email" name='email' placeholder='Email' required/><br />
                    <input type="tel" name='tel' placeholder='Phone number' required/><br />
                    <input type="password" name='password' placeholder='Password' required/><br />
                    <input type="password" name='password' placeholder='Confirm password' required/>
                    <div className='check'>
                        <input type="checkbox" required/>
                        <span>I accept the Terms of Use and acknowledge the <a href=''>Privacy Policy</a></span>
                    </div>
                    <div className='buttons'>
                        <a href="" className='create'>Create account</a>
                    </div>
                </form>
            </div>

        </div>
        </>
    )
}

export default RegisterCom1