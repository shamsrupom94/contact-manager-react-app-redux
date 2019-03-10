import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    toggleButton: false
  };
  expandDetails = e => {
    this.setState({ toggleButton: !this.state.toggleButton });
  };

  deleteClick = (id, dispatch) => {
    //DELETE OPTION
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { toggleButton } = this.state;

    return (
      <div className="card card-body mb-3">
        <h5>
          {name}
          {"  "}
          <i
            onClick={this.expandDetails}
            className="fas fa-chevron-circle-down"
            style={{
              cursor: "pointer",
              color: "#0080FF",
              fontSize: "25px"
            }}
          />
          <i
            onClick={this.deleteClick.bind(this, id)}
            className="fas fa-trash-alt"
            style={{
              cursor: "pointer",
              color: "red",
              float: "right",
              fontSize: "25px"
            }}
          />
        </h5>

        {toggleButton ? (
          <ul className="list-group">
            <li className="list-group-item">
              <b>Email:</b> {email}
            </li>
            <li className="list-group-item">
              <b>Phone:</b> {phone}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
