import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import user from "../images/user2.jpg";

const ContactDetail = () => {
  const location = useLocation();
  const data = location.state.contactData;
  //console.log(data)
  return (
    <div className="contactDetails">
      <Link to="/">
        <button className="btnDetail">Go Back</button> 
      </Link>
      <div className="contactDetail">
        <div className="contactDetailImg">
          <img src={user} alt="user"/>
        </div>
        <div className="content">
          <div className="header">{data.name}</div>
          <div className="description">{data.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
