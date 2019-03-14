import React, { Component } from "react";
import Contact from "./Contact";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "../../actions/contactAction";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(ContactList);
