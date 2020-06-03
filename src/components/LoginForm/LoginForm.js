import React from "react";
import "./LoginForm.css";
function LoginForm() {
  return (
    <div className="loginFormContainer">
      <h3 className="title">Sign in</h3>
      <div className="formWrapper">
        <div className="formContainer">
          <label>UserName</label>
          <input className="inputText" placeholder="Ong but sieu quay" />
        </div>
        <div className="formContainer">
          <label>Password</label>
          <input
            type={"password"}
            className="inputText"
            placeholder="Ong but sieu quay"
          />
        </div>
        <div>
          <button className="button">Sign in to Coders-x</button>
        </div>
        <div>
          <div className="checkboxContainer">
            <input type="checkbox" />
            <span className="checkboxLabel">Keep me signed in</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
