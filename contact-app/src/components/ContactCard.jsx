import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const contactData = props.contact;
  //console.log(contactData);

  const { id, name, email } = contactData;
  //console.log(name);
  return (
    <div className="listItem">
      <div className="listMain">
        <img src={user} alt="user" className="ui avatar image" />
        <div className="listContent">
          {/* <Link
            to={`/contact/${id}`}
            state={contactData}
          ></Link> */}
          <Link to={`/contact/${id}`} state={{ contactData }}>
            <div className="listHeader">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
      </div>
      <div className="icons">
        <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
          <i
            className="edit alternate outline icon"
            style={{
              color: "dodgerblue",
              fontSize: "1.3em",
              cursor: "pointer",
            }}
          ></i>
        </Link>

        <Link to={"/confirm"} state={{ contactData }}>
          <i
            className="trash alternate outline icon"
            style={{
              color: "red",
              fontSize: "1.3em",
              cursor: "pointer",
              marginLeft: ".5em",
            }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
