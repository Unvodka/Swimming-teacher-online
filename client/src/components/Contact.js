import React from "react";
import{ init } from 'emailjs-com';
import { useState } from "react";
import './Contact.css';

init("user_j0DBFik1bsTzzxgRJJoNa");


const ContactMe = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
      let mail = document.getElementById('not-mail');
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        mail.style.display = 'none'
        return true;
      } else {
        mail.style.display = 'block'
        mail.style.animation = 'dongle 1s'
        setTimeout(() => {
          mail.style.animation = 'none'
        }, 2000);
        return false;
      }
  }

  const failMessage = () => {
    let formMess = document.querySelector('.form-message')
    formMess.innerHTML = 'Please full fill require fields *'
    formMess.style.opacity = '1'
    formMess.style.background = 'rgb(253,87,87)';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  }

  const successMessage = () => {
    let formMess = document.querySelector('.form-message')
    formMess.innerHTML = 'Succes, your message has been send';
    formMess.style.background = 'green';
    formMess.style.opacity = '1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
    sendFeedback("template_d9wvswt", {
      name,
      company,
      phone,
      email,
      message,
    });
  } else {
    failMessage();
  }
  };


    const sendFeedback = (templateId, variables) => {

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        successMessage();
        
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) => 
          document.querySelector('.form-message').innerHTML =
            "An error occurs, please try again.")
  };

  return (
    <form id="contactId"className="contact">
      <h2> - -  Contact - - </h2><br/>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="name *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="company"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail">Non valid email</label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Send ..."
        onClick={handleSubmit}
      />
      <div className="form-message"></div>
      <p className="contactP">If you prefer, you can contact me by phone directly (see below) </p>
    </form>
  );
};

export default ContactMe;