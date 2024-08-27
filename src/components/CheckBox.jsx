export default function CheckBox ({id, label, checked, onChange, error}) {
    return (
        <div className='check-box-container'>
            <div className="check-box">
                <input 
                    type='checkbox' 
                    id={id}
                    checked={checked}
                    onChange={onChange}
                />
                <label htmlFor={id}>{label}</label>
            </div>
            <span>{error}</span>
        </div>
    )
}
