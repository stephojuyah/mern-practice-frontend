import '../../styles/reset_password.css'

const ResetPasswordCom1 = () => {
    return (
        <>
            <div className='reset-container'>
                <div className='reset-form'>
                    <form action="" className='form-g'>
                        <h2 className='reset'>Reset Password</h2>
                        <input type="text" className='otp-input' placeholder='Enter OTP'  required/><br />
                        <input type="password" className='otp-input' placeholder='New password'  required/><br />
                        <input type="submit" value='Reset Password' className='reset-button'/>
                   </form>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordCom1