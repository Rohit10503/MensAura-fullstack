import React, { useEffect, useState } from "react";
// import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./register.css";
import { Base_URL } from "../../Services/Helper";
const Register = () => {

    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/");
        }
    }, [])


    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: "",
        mobile: ""
    })

    // function sendEmail() {
    //     emailjs.send("smtp.gmail.com", "manishmaurya113@gmail.com", {
    //         to_email: user.email,
    //         from_email: "manishmaurya113@gmail.com", // Replace with your email
    //         subject: "Men's Aura",
    //         body: "You have registered successfully",
    //     }, user.name)
    //     .then((response) => {
    //         console.log('Email sent successfully:', response);
    //     })
    //     .catch((error) => {
    //         console.error('Error sending email:', error);
    //     });

    // }

    const handleData = async () => {
        
        const { name, email, password, cPassword, mobile } = user;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Mobile number format validation
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(mobile)) {
            alert("Please enter a 10-digit mobile number");
            return;
        }

        if (password !== cPassword) {
            alert("Password isn't Matched ! Try again");
        }
        else {
            let result = await fetch(`${Base_URL}/signup`, {
                method: "POST",
                body: JSON.stringify({ name, email, password, cPassword, mobile }),
                headers: {
                    'Content-Type': 'application/json'
                },

            });

            result = await result.json();
            if (result.result === "present") {
                alert("User Allready exist try another email id");
            }
            else {
                localStorage.setItem("user", JSON.stringify(result));
                setUser({
                    name: "",
                    email: "",
                    password: "",
                    cPassword: "",
                    mobile: ""
                })
                alert(user.name + `  You have registered successfully`)

                navigate("/")

            }


        }



    }

    return <>
        <div className="container">
            <h1>Welcome User</h1>
            <form>
                <Form method="POST">
                    <Form.Group className="mb-3 mt-3" >
                        <Form.Label mb-3 mt-3 >Enter Nickname </Form.Label>
                        <Form.Control type="text" name="name" placeholder="eg. Murli sharma" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />

                        <Form.Label mb-3 mt-3>Enter Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="eg m@m.com" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />

                        <Form.Label mb-3 mt-3>Enter password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />

                        <Form.Label mb-3 mt-3>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cPassword" placeholder="" value={user.cPassword} onChange={(e) => setUser({ ...user, cPassword: e.target.value })} required />

                        <Form.Label mb-3>Mobile no.</Form.Label>
                        <Form.Control type="number" name="mobile" placeholder="" value={user.mobile} onChange={(e) => setUser({ ...user, mobile: e.target.value })} maxLength="10" required />

                    </Form.Group>
                    <Button variant="primary" onClick={handleData}>Submit</Button>

                </Form>



            </form>
            <p><span>Already have Account  </span><Link id="login" to="/login">Log in</Link></p>
        </div>


    </>
}
export default Register;