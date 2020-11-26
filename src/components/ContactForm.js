// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React, { Component } from "react";

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }  

  render() {
    const { status } = this.state;
    return (

        <form 
        // novalidate
        className="w-100 needs-validation"
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mleowjbk"
        method="POST">
            {/* name */}
          <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Name</label>
            <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                <div className="input-group-text">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                </div>
                </div>
                <input type="text" name="name" className="form-control" id="formName" placeholder="Name"
                required />
            </div>
            {/* email */}
            <label className="sr-only" 
            htmlFor="formEmail">Email address</label>
                <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                <div className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <polyline points="3 7 12 13 21 7" />
                  </svg>
                </div>
                </div>
                <input type="email" name="_replyto" className="form-control" id="formEmail" placeholder="Email address" required />
            </div>

            {/* add email subject line */}
            <input type="hidden" name="_subject" value="I'm interested in lessons!" />
            {/* spam bot gotcha */}
            <input type="text" name="_gotcha" style={{display: 'none'}} />
            {/* message */}
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" type="text" name="message" placeholder="I'd love to book my first lesson!" rows="3" required></textarea>
                <div className="d-flex py-3">
                    {status === "SUCCESS" ? <button className="btn btn-dark mt-2 py-2 px-3">Thanks!</button> : <button id="sendForm" className="btn btn-dark mt-2 mr-2 py-2 px-3" type="submit" value="Send">Submit</button>}
                    {status === "ERROR" && 
                    <div id="alert" className="d-inline-block alert alert-danger mb-0 mt-2 py-2 px-3 fade show" role="alert">
                        <strong>Error!</strong> Please try again!
                    </div>}
                </div>
            </div>
        </form>
    );
  }


  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
        // document.querySelector('#sendForm').addEventListener('click', function() {
        //     document.querySelector('#alert').classList.add('fade');
        // });
      }
    };
    xhr.send(data);
  }
}