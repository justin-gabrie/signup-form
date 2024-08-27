import { useState } from "react"
import { initialFormState } from "../data"
import InputBox from "./InputBox"
import arrow from "../assets/arrow.png"
import CheckBox from "./CheckBox"
import Modal from "./modal"

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^\S{6,}$/;

export default function Form() {

    const [formState, setFormState] = useState(initialFormState);
    const [formSubmitted, setFormSubmitted] = useState(false);

    function handleChange(event) {
        const {id, value, type, checked} = event.target;
        setFormState(prevState => (
        {
            ...prevState,
            formData: {
                ...prevState.formData,
                [id]: type === 'checkbox' ? checked : value
            }
        }
        ))
    }

    function validate() {
        const newErrors = {}
        let isValid = true

        if(!formState.formData.firstName) {
            newErrors.firstName = 'First name is required.'
            isValid = false
        }

        if(!formState.formData.lastName) {
            newErrors.lastName = 'Last name is required.'
            isValid = false
        }

        if(!formState.formData.email) {
            newErrors.email = 'Email is required.'
            isValid = false
        } else if(!emailPattern.test(formState.formData.email)) {
            newErrors.email = 'Email address is invalid.'
            isValid = false
        }

        if (!formState.formData.password) {
            newErrors.password = 'Password is required.'
            isValid = false
        }else if (!passwordPattern.test(formState.formData.password)) {
            newErrors.password = 'At least 6 characters required.'
            isValid = false
        }

        if (!formState.formData.termsAccepted) {
            newErrors.termsAccepted = 'You must accept the terms and conditions.'
            isValid = false
        }

        setFormState( prevState =>({...prevState,errors: newErrors}))

        return isValid
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(validate()){
            setFormSubmitted(true);
        }
    }
    return (
        <>
            <div className="form-container">
                <div className="sub-container">
                    <p>Lets&#39;s get started</p>
                    <form onSubmit={handleSubmit}>
                        <div className="names">
                            <InputBox 
                                label='First name' 
                                id='firstName' 
                                type='text'
                                value={formState.formData.firstName}
                                onChange={handleChange}
                                placeholder="Daniel"
                                error={formState.errors.firstName}
                            />
                            <InputBox 
                                label='Last name' 
                                id='lastName' 
                                type='text'
                                value={formState.formData.lastName}
                                onChange={handleChange}
                                placeholder="John"
                                error={formState.errors.lastName}
                            />
                        </div>
                        <InputBox 
                            label='Email' 
                            id='email' 
                            type='email'
                            value={formState.formData.email}
                            onChange={handleChange}
                            placeholder="daniel@gmail.com"
                            error={formState.errors.email}
                        />
                        <InputBox 
                            label='Password' 
                            id='password' 
                            type='password'
                            value={formState.formData.password}
                            onChange={handleChange}
                            placeholder="********"
                            error={formState.errors.password}
                        />
                        <CheckBox
                            id='termsAccepted'
                            label={<>
                                    I agree to the platform&apos;s <a href="" >terms</a> and <a href="">conditions</a>
                                </>}
                            checked={formState.formData.termsAccepted}
                            onChange={handleChange}     
                            error={formState.errors.termsAccepted}    
                        />
                        <button>GET STARTED <img src={arrow} width="12px" height="12px"/></button>
                    </form>
                </div>
            </div>
            {
                formSubmitted && <Modal setFormSubmitted={setFormSubmitted} formData={formState.formData} setFormState={setFormState}/>
            }
        </>    
    )
}