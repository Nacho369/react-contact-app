import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // const deleteContactHandler = (id) => {
  //   props.getContactId(id);
  // };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        // clickHandler={deleteContactHandler}
      />
    );
  });
  return (
    <div className="contactList">
      <h3 className="contactListHead">
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h3>

      {renderContactList.length > 0 ? (
        <p>{renderContactList}</p>
      ) : (
        <h4>No Contact Available</h4>
      )}
    </div>
  );
};

export default ContactList;
