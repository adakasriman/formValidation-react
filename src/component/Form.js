import React, { useState } from 'react';

function Form(props) {
    const [userName, setUserName] = useState("");
    const [gmail, setGmail] = useState("");
    const [password, setpassWord] = useState("");
    const [check, setCheck] = useState(false);

    const submitEvent = (e) => {
        e.preventDefault();
        console.log({
            "username": userName,
            "gmail": gmail,
            "password": password
        })
        setUserName("");
        setGmail("");
        setpassWord("");
        setCheck(true);
    }
    return (
        <div>
            <h1>Form Validation</h1>
            <form className='ui-form' onSubmit={submitEvent}>
                <h2>Login Form</h2>
                <div className='form'>
                    <div className='field'>
                        <label>username</label>
                        {check}
                        <input type="text" value={userName} name='username' placeholder='username' onChange={(e) => setUserName(e.target.value)} />
                        {check && (userName === "") ? <div style={{ color: "red" }}>useName is required</div> : ""}
                    </div>
                    <div className='field'>
                        <label>Gmail</label>
                        <input type="gmail" value={gmail} name='gmail' placeholder='username' onChange={(e) => setGmail(e.target.value)} />
                        {check && (gmail === "") ? <div style={{ color: "red" }}>gmail is required</div> : " "}
                    </div>
                    <div className='field'>
                        <label>password</label>
                        <input type="password" value={password} name='password' placeholder='username' onChange={(e) => setpassWord(e.target.value)} />
                        {check && (password === "") ? <div style={{ color: "red" }}>useName is required</div> : ""}
                    </div>
                    <button className='submit-btn'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;