import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Button } from 'react-bootstrap';
import AddDataModal from './AddDataModal';
class Profile extends Component {
  constructor(props){
    super(props);
    this.state={     
        modal:false,
        isEditing:false

    }
  }
  toggleState(){
    this.setState({
      isEditing:!this.state.isEditing
    })
  }


  openAddModal=e=>{
    this.setState({modal:!this.state.modal})
  }
 
  editProfile=()=>{

  }

  deleteData=e=>{

  }

  componentDidUpdate(){
    console.log(this.props.profile)
  }
  renderData=()=>{
    const {data}=this.props.profile;

  }
  render() {
    console.log(this.props.profile.addedData)
    return (
      <>
      <h2>User Profile</h2>
         <div className='user-name'>
         <span>Username:</span> <p>{this.props.profile.username}</p>
            <Button color="danger" >Delete</Button> 
            <Button color="danger">Edit</Button>

        </div>

        <div className='user-email'>
        <span>UserEmail:</span> <p>{this.props.profile.email}</p>
        </div>

        <div className='user-age'>
        <span>UserAge:</span> <p>{this.props.profile.age}</p>
        </div> 
      
        <Button onClick={this.openAddModal}>Add new data</Button>
        <AddDataModal modal={this.state.modal} toggle={this.openAddModal}  />
      </>
    )
  }
}
const mapStateToProps=(state)=>({
  isAuth: state.isAuth,
  profile:state.Profile
})

export default connect(mapStateToProps, )(Profile)