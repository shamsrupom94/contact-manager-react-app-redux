import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT } from "../actions/types";

const initialState = {
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

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    default:
      return state;
  }
}
