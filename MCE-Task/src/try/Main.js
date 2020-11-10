// import React, { Component } from "react";
// import TodoItem from "../components/userProfile/DataItem";
// import TodoForm from "../components/userProfile/DataForm";
// import { connect } from "react-redux";
// import { AddData } from "../redux/actions/ProfileActions";
// import { Button } from "react-bootstrap";

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       profileData: [],

//       currentData: "",
//     };
//   }

//   componentDidMount() {
//     this.setState({ profileData: this.props.userdata });
//   }
//   deleteData = (index) => {
//     let profileData = this.state.profileData;
//     profileData.splice(index, 1);

//     this.setState({
//       profileData,
//     });
//   };
//   addData = (evt) => {
//     evt.preventDefault();
//     let profileData = this.state.profileData;
//     let currentData = this.state.currentData;

//     this.setState({
//       profileData: this.state.profileData.concat(currentData),
//     });

//     this.setState({
//       profileData,
//     });
//   };
//   updateData = (newValue) => {
//     this.setState({
//       currentData: newValue.target.value,
//     });
//   };

//   // editData = (index, newValue) => {
//   //   var profileData = this.state.profileData;
//   //   var Data = profileData[index];
//   //   Data["name"] = newValue;
//   //   this.setState({
//   //     profileData,
//   //   });
//   // };

//   onchangeName = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//     this.state.profileData.name = e.target.value;
//   };

//   onEdit = (e) => {
//     this.props.userdata.name = this.state.profileData.name;
//   };

//   componentDidUpdate() {
//     this.props.userdata.name = this.state.profileData.name;
//   }
//   render() {
//     console.log(this.state.profileData);
//     return (
//       <section>
//         {/* <TodoForm
//           currentData={this.state.currentData}
//           updateData={this.updateData}
//           addData={this.addData}
//           updatemyData={this.updatemyData}
//         />

//         <TodoItem
//           key={this.state.}
//           index={index}
//           deleteData={this.deleteData}
//           editData={this.editData}
//           details={Data}
//         /> */}

//         <input
//           value={this.state.profileData.name}
//           onChange={this.onchangeName}
//           name="name"
//         />
//         <input
//           name="email"
//           value={this.state.profileData.email}
//           onChange={this.onchangeEmail}
//         />

//         <Button onClick={this.onEdit}>Save Edits</Button>
//       </section>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
//   userdata: state.auth.userdata.userdata,
//   profile: state.Profile,
// });
// export default connect(mapStateToProps, { AddData })(Main);
import React from "react";
import TodoItem from "../components/userProfile/DataItem";
import TodoForm from "../components/userProfile/DataForm";
import { connect } from "react-redux";
import { AddData } from "../redux/actions/ProfileActions";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [
        {
          name: this.props.userdata.name,
        },
        {
          name: this.props.userdata.email,
        },
        {
          name: "24",
        },
      ],
      currentData: "",
    };
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
    this.props.userdata.name = newValue;
  };

  render() {
    return (
      <section>
        <TodoForm
          currentData={this.state.currentData}
          updateData={this.updateData}
          addData={this.addData}
        />
        <ul>
          {this.state.userData.map((Data, index) => {
            return (
              <TodoItem
                key={index}
                clickHandler={this.changeStatus}
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
  isAuth: state.isAuth,
  profile: state.Profile,
  userdata: state.auth.userdata.userdata,
});
export default connect(mapStateToProps, { AddData })(Main);
