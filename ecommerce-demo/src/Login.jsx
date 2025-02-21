import { useState } from "react"
import "./Login.css"
export const Login = ({ setUser }) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, password)
        if (name === "" || password === "") {
            setError(true)
            return
        }
        setUser([name, password])
        setError(false)
    }

    return (
        <>
            <form className="form" action="" onSubmit={ handleSubmit }>
                <h2>LOGIN</h2>
                <input type="text" value={ name } onChange={ e => setName(e.target.value) } />
                <input type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
                <button>Log in</button>
            </form>
            { error && <p className="error">Please fill out all fields</p> }
        </>
    )


}