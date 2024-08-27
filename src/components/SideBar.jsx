import logo from '../assets/logo.png';

export default function SideBar(){
    return (
        <div className="side-bar">
            <div className='logo-section'>
                <img src={logo} alt="logo" width="20px" height="20px"/>
                <p>STARTGLOBAL</p>
            </div>
            <h2>Lets&#39;s setup your operating agreement</h2>
            <p>All-in-one solution to for your business in the state. Form a new company from scratch or onboard your existing company</p>
        </div>
    )
} 