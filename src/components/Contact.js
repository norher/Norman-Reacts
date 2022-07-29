import React, { useState } from "react";
import { validateEmail } from "../utils/helpers.js";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address!");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the user name and message is not valid. If so, we set an error message regarding the invalid entry.
    }
    if (!userName) {
      setErrorMessage(`Name section blank!`);
      return;
    }
    if (!message) {
      setErrorMessage(`Message section blank!`);
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  const handleOnBlur = (e) => {
    e.preventDefault();

    if (!userName) {
      setErrorMessage(`Please enter your name`);
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage(
        "Please enter a valid email"
      );
      return;
    }
    if (!message) {
      setErrorMessage(
        `No message received`
      );
      return;
    }
    if (userName && validateEmail(email) && message) {
      setErrorMessage("");
      return;
    }
  };

  return (
    <form className="form container">
      <div className="col">
        <h3> Contact Me </h3>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="text"
          placeholder="Name"
          id="userInput"
          className="row"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="email"
          placeholder="Email"
          id="emailInput"
          className="row"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="message"
          placeholder="Message"
          id="messageInput"
          className="row"
        />
        <button
          type="button"
          onClick={handleFormSubmit}
          className="row"
          id="submit"
        >
          Submit
        </button>
      </div>

      {errorMessage && (
        <div>
          <p id="errorText">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}

export default Contact;