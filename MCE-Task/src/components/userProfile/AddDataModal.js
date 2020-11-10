import React, { Component } from 'react'
import {Modal,ModalBody,ModalHeader,Form,FormGroup,Input,Button} from 'reactstrap'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {AddData} from '../../redux/actions/ProfileActions'

class AddDataModal extends Component {
constructor(){
    super()
    this.state={
        datatype:'',
        datavalue:''
    }
}
   
  addDate=()=>{
        this.props.AddData(this.state.datatype,this.state.datavalue)
        this.props.toggle()
    }
  render() {
    return (
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} >
        <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
          <Input type="text" name="datatype" value={this.state.datatype} onChange={(e)=>this.setState({datatype:e.target.value})} placeholder="Enter Type of data" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="datavalue" value={this.state.datavalue} onChange={(e)=>this.setState({datavalue:e.target.value})}  placeholder="Enter value of data" />
        </FormGroup>
    
        <Button onClick={this.addDate}>Add</Button>
      </Form>

        </ModalBody>
        
      </Modal>
    )
  }
}

  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ AddData }, dispatch);
  };
  export default connect(null,mapDispatchToProps )(AddDataModal)