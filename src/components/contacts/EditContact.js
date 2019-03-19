import React, { Component } from "react";

import TextGroup from "../assets/TextGroup";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";

class EditContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };
  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.contact;
    this.setState({
      name,
      email,
      phone
    });
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Error Checking
    if (name === "") {
      this.setState({ error: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ error: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ error: { phone: "Phone no. is required" } });
      return;
    }
    const { id } = this.props.match.params;
    const updatedContact = {
      id,
      name,
      email,
      phone
    };

    // UPDATE OPTION

    this.props.updateContact(updatedContact);
    //Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <React.Fragment>
        <h2 className="display-4 mb-3">
          <i
            className="fas fa-user-edit"
            style={{ color: "#0080FF", fontSize: "50px" }}
          />
          Edit <span className="text-primary">{name}'s </span> Contact
        </h2>
        <div className="card mb-3">
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <TextGroup
                label="Name"
                name="name"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
                error={error.name}
              />
              <TextGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email ID..."
                value={email}
                onChange={this.onChange}
                error={error.email}
              />
              <TextGroup
                label="Phone"
                name="phone"
                placeholder="Enter Phone no...."
                value={phone}
                onChange={this.onChange}
                error={error.phone}
              />
              <button
                type="submit"
                value="Add Contact"
                className="btn btn-primary float-right"
              >
                <i className="fas fa-user-edit" /> Update Contact
              </button>
              <Link to="/">
                <button className="btn btn-danger float-left">
                  <i className="fas fa-backspace" /> Back
                </button>
              </Link>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact.contact
});
export default connect(
  mapStateToProps,
  { getContact, updateContact }
)(EditContacts);
