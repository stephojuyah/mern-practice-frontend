import '../../styles/reset_password.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPasswordCom1 = () => {

    const navigate = useNavigate()

    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMessage] = useState('')


    const handleSubmit = async(e) => {
        e.preventDefault()

    try {
         const res = await fetch("http://localhost:5000/auth/reset_password", {
            method: "POST" ,
            headers : {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
                otp,
            }),
        });

        const data = await res.json();
        setMessage(data.msg || `Password reset successful`);
        if (data.status === 'success') {
            navigate('/login')
        } else {
            navigate('/reset_password')
        }

        } catch (error) {
        setMessage(error.res?.data?.msg || "Something went wrong");
       }
    }

    return (
        <>
            <div className='reset-container'>
                <div className='reset-form'>
                    <form onSubmit={handleSubmit} className='form-g'>
                        <h2 className='reset'>Reset Password</h2>
                        <input type="text" className='otp-input' placeholder='Enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} required/><br />
                        <input type="password" className='otp-input' placeholder='New password' value={password} onChange={(e) => setPassword(e.target.value)} required/><br />
                        <p style={{textAlign: 'center', fontSize: '10px', marginTop: '0px'}}>{msg}</p>
                        <input type="submit" value='Reset Password' className='reset-button'/>
                   </form>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordCom1