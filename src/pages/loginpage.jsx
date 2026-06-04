import react from 'react'
import './loginpage.css'
import email from '../assets/email.png'
import imgicon from '../assets/imgicon.png'

import passic from '../assets/passic.png'


const LoginPage = () => {
    return (<>
        <div className="container" >
            <div className="header">
            <div className='text'>signup</div>
            <div className='underline'></div>
            </div>

    
        <div className='inputs'>
        
        <div className="input">
        <img src={imgicon} alt=''></img>
        <input type='text'placeholder='name' />
        </div>
        
        <div className="input">
        <img src={email} alt=''></img>
        <input type="email" placeholder='email' />
        </div>
        
        <div className="input">
        <img src={passic} alt=''></img>
        <input type='password' placeholder='password'/>
        </div>
        <div className="forgot-password">lost password <span>click here</span></div>
        <div className="submit-container" >
            <div className="submit" > sign up</div>
            <div className="submit" > Login</div>
        </div>    
    </div>
</div>


    </>
    )
}
export default LoginPage