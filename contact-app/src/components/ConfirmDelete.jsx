import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ConfirmDelete = (props) => {
    const location = useLocation();
    const keyId = location.state.contactData.id;
    //console.log(data);

  const deleteContactHandler = () => {
    props.getContactId(keyId);
  };

  return (
    <div className="confirm">
      <div className="confirmBox">
        <h3>Are you sure you want to delete?</h3>
        <div className="confirmOption">
            <Link to={"/"}>
                <button className="btn" onClick={deleteContactHandler}>
                    Yes
                </button>
            </Link>
          <Link to={"/"}>
            <button className="btn">No</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
