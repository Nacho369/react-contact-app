// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export class EditContacts extends Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   update = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("All Fields are Mandatory.");
//       return;
//     }
//     console.log(this.state);
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//     // console.log(this.props);
//     // this.props.history.push('/')
//   };

//   render() {
//     return (
//       <div className="addContactPad">
//         {/* {<h3>Contact Added</h3> ? this.props.addContactHandler(this.state) : ""} */}
//         <div className="addContact">
//           <h2 className="contactListHead">
//             Edit Contact
//             <Link to="/">
//               <button className="ui button blue right">Contacts</button>
//             </Link>
//           </h2>
//           <form action="" className="ui form" onSubmit={this.update}>
//             <div className="field">
//               <label htmlFor="">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id=""
//                 placeholder="Name"
//                 value={this.state.name}
//                 onChange={(e) => this.setState({ name: e.target.value })}
//               />
//             </div>

//             <div className="field">
//               <label htmlFor="">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id=""
//                 placeholder="Email"
//                 value={this.state.email}
//                 onChange={(e) => this.setState({ email: e.target.value })}
//               />
//             </div>

//             <button className="ui button blue">Update</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default EditContacts;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class EditContacts extends Component {
  state = {
    name: "",
    email: "",
  };

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All Fields are Mandatory.");
      return;
    }
    console.log(this);
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    // console.log(this.props);
    // this.props.history.push('/')
  };

  render() {
    return (
      <div className="addContactPad">
        {/* {<h3>Contact Added</h3> ? this.props.addContactHandler(this.state) : ""} */}
        <div className="addContact">
          <h2 className="contactListHead">
            Edit Contact
            <Link to="/">
              <button className="ui button blue right">Contacts</button>
            </Link>
          </h2>
          <form action="" className="ui form" onSubmit={this.update}>
            <div className="field">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>

            <div className="field">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <button className="ui button blue">Update</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditContacts;
