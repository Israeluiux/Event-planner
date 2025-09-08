import LoginForm from "../Components/LoginForm";

export default function Login(){
    return (
        <div className="login-container">
            <div className="login-form">
                <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem'}}>Welcome back</div>
                <p style={{color: '#4A4D55', marginBottom: '1.8rem'}}>Please login to continue</p>
                <LoginForm />
            </div>
        </div>
    )
}