import '../../styles/request_reset.css'
import { useState } from 'react';




const RequestReset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // You can validate or send to backend here
        setMessage(`If this email is registered, a reset link will be sent to ${email}`);
    };


    return (
        <>
        <div className='forgot-contain'>
            <div className='forgot-form'>
                <form onSubmit={handleSubmit} className='form-f' >
                    <h2 className='forgot-text'>Forgot your password?</h2>
                    <input className='forgot-input' type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required/><br />
                {message && <p className="feedback-message">{message}</p>}
                    <input className='resend-button' type="submit" value='Send Reset Link'/>
                </form>


            </div>
        </div>

        </>
    )
}

export default RequestReset