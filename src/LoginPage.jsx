import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    // Validation logic
    if (username === "" || password === "" || answer === "") {
      setError("All fields are required.");
      return;
    }
    // Add your sign-in logic here
    navigate("/");
  };

  return (
    <div className="login_page">
      <div className="login_page_wrapper">
        <div className="md-card" id="login_card">
          <div className="md-card-content large-padding" id="login_form">
            <div className="login_heading">
              <img src="../img/user-login2.png" alt="User Login" />
              <center>
                <h4>Super Agent Login</h4>
              </center>
            </div>
            <form onSubmit={handleSignIn}>
              <div className="uk-form-row">
                {/* Uncomment the line below if you need to display the message */}
                {/* <h3 style={{ color: 'red' }}>आपका पासवर्ड चेंज हो गया है। कृपया <b>8299514941</b> पर कॉल करके प्राप्त करे।</h3> */}
              </div>
              <div className="uk-form-row">
                <label htmlFor="login_username">Username</label>
                <input
                  className="md-input"
                  type="text"
                  id="login_username"
                  name="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="uk-form-row">
                <label htmlFor="login_password">Password</label>
                <input
                  className="md-input"
                  type="password"
                  id="login_password"
                  name="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="uk-form-row">
                <br />
                <label htmlFor="answer">Your Answer</label>
                <input
                  className="md-input"
                  type="text"
                  id="answer"
                  name="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                />
              </div>
              {error && <div style={{ color: "red" }}>{error}</div>}
              <div className="uk-margin-medium-top">
                <input
                  type="submit"
                  value="Sign In"
                  className="md-btn md-btn-primary md-btn-block md-btn-large"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
