import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate} from "react-router-dom";
import { Base_URL } from "../../Services/Helper";
const Login = () => {
    const navigate=useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async () => {
        const { email, password } = user;
        let result = await fetch(`${Base_URL}/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"

            }
        });
        result=await result.json();
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/")
            alert((result.name)+" Welcome")
        }else{
            alert("Invalid Credentials!");
        }

    }

    return <>

        <div className="container">
            <form>
                <Form action="https://formspree.io/f/xdoqegoq" method="POST">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                        <Form.Label>Enter password</Form.Label>
                        <Form.Control type="password" placeholder="" value={user.password} name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} required />

                    </Form.Group>
                    <Button variant="primary" onClick={handleLogin}>Login</Button>


                </Form>

            </form>
            <p><span>Don't Have Account? </span><Link id="login" to="/signin">Register here</Link></p>
        </div>

    </>


}
export default Login;