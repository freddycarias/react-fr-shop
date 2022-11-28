import React from "react";

const login  = () => {
    return (
        <div className="login">
        <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for you account</p>
            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" placeholder="********" className="input input-password" id="password" />
                <label for="check-password" className="label">Re-Enter Password</label>
                <input type="password" placeholder="********" className="input input-password" id="check-password" />

                <input type="submit" value="confirm" className="primary-button login-button"/>
            </form>
        </div>
    </div>
    );
}

export default login;