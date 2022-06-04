import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

function Admin() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const database = [
    {
      username: "admin",
      password: "admin123"
    }
  ];

  const errors = {
    invalid: "Nieprawidlowe dane logowania!"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value || userData.username !== uname.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.invalid });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.invalid });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Login </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Haslo </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" value="Przeslij" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="admin">
      <div className="login-form">
        <h3>Zaloguj się</h3>
        {isSubmitted ? <div>Pomyslnie zalogowano! Przenoszenie na stronę główną</div> && setTimeout(history.push("/"),5000) : renderForm}
      </div>
    </div>
  );
}

export default Admin;