import React, { Component } from 'react'
import axios from 'axios'
import './Admin.scss'



const Contact = props => (
    <tr>
      <td>{props.contact.name}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.phoneNumber}</td>
      <td>{props.contact.message}</td>
    </tr>
)

export default class Admin extends Component {
    constructor(props) {
      super(props);
  
      this.state = {contacts: []};
    }
  
    componentDidMount() {
      axios.get('http://localhost:5000/contact/')
        .then(response => {
          this.setState({ contacts: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
    }


  contactList() {
    return this.state.contacts.map(currentcontact => {
      return <Contact contact={currentcontact} />;
    })
  }

    render() {
        return (
            <div className="admin-container">
                <h3>Admin</h3>
                <div className="inquiries">
                    <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.contactList() }
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}