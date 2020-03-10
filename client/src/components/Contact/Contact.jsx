import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Contact.scss'

export default class Contact extends Component{
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    }
  }

  onNameChange(e) {
	  this.setState({name: e.target.value})
  }

  onEmailChange(e) {
	  this.setState({email: e.target.value})
  }

  onMessageChange(e) {
	  this.setState({message: e.target.value})
  }

  onPhoneNumberChange(e) {
    this.setState({phoneNumber: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const contact = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      message: this.state.message
    }

    console.log(contact);
    axios.post('http://localhost:5000/contact/add', contact)
    .then(res => {
      if (res.data.status === 'success'){
        alert("Message Sent.");
      }else if(res.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
      .catch(error => {
        console.log(error.message)
        console.log(error.response)
    })
  }

  render() {
	return(
  	<div className="contact-main-container">
  	<form id="contact-form" onSubmit={this.onSubmit} method="POST">
  	<div className="form-group">
      	<label htmlFor="name">Name</label>
      	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="exampleInputEmail1">Email address</label>
      	<input type="text" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="phonenumber">Phone Number</label>
      	<input type="text" className="form-control" id="phoneNumber" value={this.state.phoneNumber} onChange={this.onPhoneNumberChange} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="message">Message</label>
      	<textarea type="text" className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange} />
  	</div>
    <input type="submit"/>
  	<button type="submit" className="btn btn-primary">Submit</button>
  	</form>
  	</div>
	);
  }
}
