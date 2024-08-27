import close from '../assets/close.png';
import { initialFormState } from '../data';
export default function Modal({setFormSubmitted, formData, setFormState}) {

    function handleClose() {
        setFormState(initialFormState);
        setFormSubmitted(false)
    }

    return (
        <div className="modal">
            <div className="section">
                <h2>Welcome <span>{formData.firstName}</span>,</h2>
                <p>Your account has been created with the email <span>{formData.email}</span></p>
            </div>
            <img src={close} alt='close' height="18px" width="18px" onClick={handleClose}/>
        </div>
    )
}