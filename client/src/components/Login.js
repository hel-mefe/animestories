import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import Input from "./form/input";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setJwtToken, setAlertClassName, setAlertMessage} = useOutletContext()

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault() ;
        console.log("email/pass", email, password)
        if (email == "admin@example.com") {
            setJwtToken("abc")
            setAlertClassName("d-none")
            setAlertMessage("")
            navigate("/")
        } else {
            setAlertClassName("alert-danger")
            setAlertMessage("Invalid credentials")
        }
    }

    

    return(
        <div className="col-md-6 offset-md-3">
            <h2>Login</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <Input
                label="Email Address"
                placeholder="Email Address"
                type="email"
                className="form-control"
                name="email"
                autoComplete="email-new"
                onChange={(e) => setEmail(e.target.value)} />

                <Input
                label="Password"
                placeholder="Password"
                type="password"
                className="form-control"
                name="password"
                autoComplete="password-new"
                onChange={(e) => setPassword(e.target.value)} />

                <hr />

                <input 
                type="submit" 
                value="Login" 
                className="btn btn-primary" />
            </form>
        </div>
    )
}

export default Login;