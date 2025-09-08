import { useState, useEffect } from "react"
import { FaExclamationTriangle } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom"


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(username === 'israeluiux' && password === 'balogun123'){
            navigate('/admin')
        } else {
            setError('Incorrect username or password')
            setTimeout(() => {
                setError('')
            }, 5000);
            // setUsername('')
            setPassword('')
        }
    }

    const backtouser = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <>
            {error && 
            <p className="error"> <FaExclamationTriangle size={15}/> {error}</p>  
            }
            <form className="forms" onSubmit={handleSubmit}>
                <div className="form-groups">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                           id="username"
                           placeholder="Enter your username"
                           value={username}
                           onChange={(e) => setUsername(e.target.value)} />
                </div>
                
                <div className="form-groups">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id="password"
                           placeholder="Enter your password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn">Login</button>
                <button onClick={backtouser} className="user">Back to user</button>
            </form>
        </>
    )
}

export default LoginForm