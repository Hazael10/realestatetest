import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Contact() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const form = useRef("");

  const sendMessage = (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      setSuccessMessage(`Email sent to: ${email}`);
      setErrorMessage("");
      setEmail("");
    } else {
      setErrorMessage("Invalid email address!");
      setSuccessMessage("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_abzv7ap",
        "template_lg1qlnb",
        form.current,
        "5rlqRG73YEdyQaAY3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="row">
        <div className="col-12"></div>
        <section>
          <div className="context">
            <h1>Work with Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              facilis sint accusamus molestias, dolorem provident nostrum facere
              inventore perspiciatis modi esse quaerat animi non sapiente vitae
              officia atque labore incidunt. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto ullam sint unde assumenda
              aut esse incidunt, sunt dolorum, sapiente odit nemo rem. Amet quia
              repellendus aperiam et, velit ad eos?
            </p>
          </div>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            LET'S CONNECT
          </button>
        </section>
        <form ref={form} onSubmit={sendEmail}>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Send us a message
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">
                      Email address:
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      className="form-control"
                      id="emailInput"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message:
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    value="Send"
                    className="btn btn-dark"
                    onClick={sendMessage}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <div className="alert-messages">
                    {successMessage && (
                      <div className="modal-footer">
                        <div className="alert alert-success" role="alert">
                          {successMessage}
                        </div>
                      </div>
                    )}
                    {errorMessage && (
                      <div className="modal-footer">
                        <div className="alert alert-danger" role="alert">
                          {errorMessage}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
