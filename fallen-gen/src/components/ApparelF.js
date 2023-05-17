import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [ApparelName, setApparelName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");  
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState(""); 

    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1) {
            setUsernameError("Username is required!");
        } else if(e.target.value.length < 2) {
            setUsernameError("Username must be 2 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setUsernameError("");
        };
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("");
        };
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else if (e.target.value !== confirmPassword) {
            setPasswordError("Passwords do not match");
        } else {
            setPasswordError("")
        };
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError("Password must be at least 8 characters!");
        } else if (e.target.value !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("")
        };
    }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { username, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        return (
            <div className='newUser'>
                <p>{username}</p>
                <p>{email}</p>
                <p>{confirmPassword}</p>
                <p>{password}</p>
            </div>
        );
    };

    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" value={username} onChange={ handleUsername } />
                    {
                        usernameError ?
                        <p>{ usernameError }</p> :
                        ''
                    } 
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ handleEmail } />
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value={password} onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
            </div>
            <div>
                <label>confirmPassword: </label>
                <input type="text" value={confirmPassword} onChange={ handleConfirmPassword } />
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            {
                usernameError || emailError || passwordError || confirmPasswordError ?
                <input type="submit" value="Create User" disabled /> : 
                <input type="submit" value="Create User" />
            }
        </form>
        <div className='newUser'>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Password: {confirmPassword}</p>
        </div>
    </div>
    );
};
    
export default UserForm;
