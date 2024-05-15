import React, { useState } from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      return;
    }

    setShowToast(true);

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container">
          <form className="shadow">
            <h4>Fill-up The Form</h4> <br />
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              placeholder="Write your thoughts...."
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button onClick={handleContactSubmit}>Submit Request</button>
          </form>
        </div>
      </section>
      {showToast && (
        <div className="toast show">
          <p>Your Request has been submitted!</p>
        </div>
      )}
    </>
  );
};

export default Contact;
