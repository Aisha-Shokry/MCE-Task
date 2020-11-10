// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Button } from "react-bootstrap";
// import AddDataModal from "./AddDataModal";
// import { RemoveData } from "../../redux/actions/ProfileActions";
// import DataItem from "./DataItem";
// import DataForm from "./DataForm";
// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       isEditing: false,
//     };
//   }
//   toggleState() {
//     this.setState({
//       isEditing: !this.state.isEditing,
//     });
//   }

//   openAddModal = (e) => {
//     this.setState({ modal: !this.state.modal });
//   };

//   editProfile = () => {};
//   //   deleteData = id => {
//   //      .filter((data) => data.id !== action.id);
//   // }
//   render() {
//     console.log(this.props.profile.addedData);
//     return (
//       <>
//         <h2>User Profile</h2>
//         <div className="user-name" key={this.props.userId}>
//           <span>Username:</span> <p>{this.props.username}</p>
//           <Button
//             onClick={this.props.RemoveData(this.props.userId)}
//             color="danger"
//           >
//             Delete
//           </Button>
//           <Button color="danger">Edit</Button>
//         </div>

//         <DataForm
//           currentData={this.state.currentData}
//           updateData={this.updateData}
//           addData={this.addData}
//         />
//         <ul>
//           {this.state.userData.map((Data, index) => {
//             return (
//               <DataItem
//                 key={index}
//                 index={index}
//                 deleteData={this.deleteData}
//                 editData={this.editData}
//                 details={Data}
//               />
//             );
//           })}
//         </ul>
//         <Button onClick={this.openAddModal}>Add new data</Button>
//         <AddDataModal modal={this.state.modal} toggle={this.openAddModal} />
//       </>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
//   profile: state.Profile,
//   username: state.auth.userdata,
//   userId: state.auth.id,
// });

// export default connect(mapStateToProps, { RemoveData })(Profile);

import React from "react";
import DataItem from "./DataItem";
import DataForm from "./DataForm";
import { connect } from "react-redux";
import { AddData } from "../../redux/actions/ProfileActions";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [
        { name: "" },
        // {
        //   name: this.props.username,
        // },
        // {
        //   name: "aisha@kk.com",
        // },
        // {
        //   name: "24",
        // },
      ],
      currentData: "",
    };
  }

  componentDidMount() {
    var userData = this.state.userData;

    userData["name"] = this.props.username;
    this.setState({
      userData,
    });
  }
  deleteData = (index) => {
    console.log(index);

    let userData = this.state.userData;
    userData.splice(index, 1);

    this.setState({
      userData,
    });
  };
  addData = (evt) => {
    evt.preventDefault();
    let userData = this.state.userData;
    let currentData = this.state.currentData;
    userData.push({
      name: currentData,
      completed: false,
    });

    this.setState({
      userData,
      currentData: "",
    });
  };
  updateData = (newValue) => {
    this.setState({
      currentData: newValue.target.value,
    });
  };

  editData = (index, newValue) => {
    var userData = this.state.userData;
    var Data = userData[index];
    Data["name"] = newValue;
    this.setState({
      userData,
    });
  };

  updatemyData = (e) => {
    this.props.AddData(this.state.datatype, this.state.datavalue);
    console.log(this.props.profile);
  };

  render() {
    return (
      <section>
        <DataForm
          currentData={this.state.currentData}
          updateData={this.updateData}
          addData={this.addData}
          updatemyData={this.updatemyData}
        />
        <ul>
          {this.state.userData.map((Data, index) => {
            return (
              <DataItem
                key={index}
                index={index}
                deleteData={this.deleteData}
                editData={this.editData}
                details={Data}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  username: state.auth.userdata,
  profile: state.Profile,
});
export default connect(mapStateToProps, { AddData })(Profile);
