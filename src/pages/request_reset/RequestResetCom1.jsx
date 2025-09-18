import '../../styles/request_reset.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const RequestReset = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [msg, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

        const res = await fetch("http://localhost:5000/auth/request_reset", {
            method: "POST" ,
            headers : {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
            }),
        });

        const data = await res.json();

        if (data.token) {
            localStorage.setItem('reset_token', data.token);
        }
        localStorage.setItem('reset_email', email);

        setMessage(data.msg || `If this email is registered, an OTP will be sent to ${email}`);
        if (data.status === 'ok') {
            // localStorage.setItem("token", res.data.token);
            setTimeout(() => navigate('/reset_password'), 2000);
        } else {
            navigate('/request_otp')
        }
        

       } catch (error) {
        setMessage(error.res.data.msg || "Something went wrong");
       }

    };


    return (
        <>
        <div className='forgot-contain'>
            <div className='forgot-form'>
                <form onSubmit={handleSubmit} className='form-f' >
                    <h2 className='forgot-text'>Forgot your password?</h2>
                    <input className='forgot-input' type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required/><br />
                    <p style={{textAlign: 'center', fontSize: '10px', marginTop: '0px'}} className="feedback-message">{msg}</p>
                    <input className='resend-button' type="submit" value='Send OTP'/>
                </form>


            </div>
        </div>

        </>
    )
}

export default RequestReset