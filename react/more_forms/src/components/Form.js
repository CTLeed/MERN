import React, { useState } from "react";

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const createUser = (event) => {
        event.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };
        console.log(newUser);
    };

    const firstNameValidator = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First name must be at least 2 characters")
        } else {
            setFirstNameError("");
        }
    }
    const lastNameValidator = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }
    const emailValidator = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setEmailError("Email must be at least 2 characters");
        } else {
            setEmailError("");
        }
    }
    const passwordValidator = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const confirmPasswordValidator = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password && e.target.value.length > 0) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div>
            <form onSubmit={(e) => { createUser(e); }}>
                <div className="card">
                    <label>First Name: </label>
                    <input type="text" onChange={firstNameValidator} />
                </div>
                {
                    firstNameError ?
                        <h6 style={{ color: "red" }}>{firstNameError}</h6> : ""
                }
                <div className="card">
                    <label>Last Name: </label>
                    <input type="text" onChange={lastNameValidator} />
                </div>
                {
                    lastNameError ?
                        <h6 style={{ color: "red" }}>{lastNameError}</h6> : ""
                }
                <div className="card">
                    <label>Email: </label>
                    <input type="email" onChange={emailValidator} />
                </div>
                {
                    emailError ?
                        <h6 style={{ color: "red" }}>{emailError}</h6> : ""
                }
                <div className="card">
                    <label>Password: </label>
                    <input type="password" onChange={passwordValidator} />
                </div>
                {
                    passwordError ?
                        <h6 style={{ color: "red" }}>{passwordError}</h6> : ""
                }
                <div className="card">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={confirmPasswordValidator} />
                </div>
                {
                    confirmPasswordError ?
                        <h6 style={{ color: "red" }}>{confirmPasswordError}</h6> : ""
                }
                <button>Submit</button>
            </form>
            <hr />
            <div className="output">
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default Form;