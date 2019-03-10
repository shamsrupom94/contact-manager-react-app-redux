import React, { Component } from "react";
import Contact from "./Contact";

class ContactList extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Shakib Al Hasan",
        email: "shakib@gmail.com",
        phone: "666-666-666"
      },
      {
        id: 2,
        name: "Tamim Iqbal",
        email: "tamim@gmail.com",
        phone: "666-777-666"
      },
      {
        id: 3,
        name: "Mushfiqur Rahim",
        email: "mushi@gmail.com",
        phone: "666-777-666"
      },
      {
        id: 4,
        name: "Mahmudullah",
        email: "riad@gmail.com",
        phone: "999-777-666"
      },
      {
        id: 5,
        name: "Mashrafee Murtuza",
        email: "mp@gmail.com",
        phone: "999-555-666"
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h2 className="display-4 mb-4">
          <span className="text-primary">React </span>Contact Manager
        </h2>
        <div className="card card-body">
          <h3 className="display-5 mb-4">
            <span className="text-primary">Contact </span>List
          </h3>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ContactList;
