import mail from "../assets/mail.png"
import password from "../assets/password.png"

export default function InputBox ({label, id, type, value, onChange, placeholder, error}) {
    return (
        <div className='input-box'>
            <label>{label}</label>
            <input 
                type={type} 
                id={id}
                value={value} 
                onChange={onChange} 
                className={`${error ? 'input-error' : ''}`}
                placeholder={placeholder}
            />
            <span>{error}</span>
            {type === "email" && <img src={mail} className="email-icon" width="17px" height="17px"/>}
            {type === "password" && <img src={password} className="password-icon" width="16px" height="16px"/>}
        </div>
    )
}