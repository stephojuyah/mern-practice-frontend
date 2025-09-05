import '../../styles/reset_password.css'

const ResetPassword = () => {
    return (
        <>
        <div className='reset-container'>
            <div className='reset-form'>
                <form action="" className='form-g'>
                    <h2 className='reset'>Reset Password</h2>
                    <input type="number" className='otp-input' placeholder='Enter OTP' value={otp} required/>
                    <input type="password" className='password-input' placeholder='New password' value={password} required/>
                </form>
            </div>
        </div>
        </>
    )
}

export default ResetPassword