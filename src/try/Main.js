import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import {connect} from 'react-redux'
import {AddData} from '../redux/actions/ProfileActions' 
class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          userData:[{
            name:"Aisha",
          },
          {
            name:"aisha@kk.com",
          },
          {
            name:"24",
          }],
          currentData:'' 
        }
     }
    deleteData=(index)=>{
      console.log(index)
    
      let userData = this.state.userData;
      userData.splice(index,1);
    
      this.setState({
        userData
      })
      
    }
    addData=(evt)=>{
      evt.preventDefault();
      let userData = this.state.userData;
      let currentData = this.state.currentData;
      userData.push({
        name:currentData,
        completed:false
      })
    
      this.setState({
        userData,
        currentData:'' 
      })
    
    
    }
    updateData=(newValue)=>{
      this.setState({
        currentData:newValue.target.value
      })
    }
    
    editData=(index, newValue)=>{
     var userData = this.state.userData;
     var Data = userData[index];
     Data['name'] = newValue;
     this.setState({
      userData
     })
    }
    
    updatemyData=e=>{
      this.props.AddData(this.state.datatype,this.state.datavalue)
      console.log(this.props.profile)

    }
   
     render() {
         console.log(this.props.profile)
        return (
          <section>
           <TodoForm 
                currentData={this.state.currentData}
                updateData={this.updateData}
                addData={this.addData}
                updatemyData={this.updatemyData}
            />
            <ul>
            {
              this.state.userData.map((Data, index) => {
                return <TodoItem 
                        key={index} 
                        clickHandler={this.changeStatus} 
                        index={index} 
                        deleteData={this.deleteData}
                        editData={this.editData}
                        details={Data}
                         />
              })
            }
              
            </ul>
          </section>
        )
      }
    }

    const mapStateToProps=(state)=>({
        isAuth: state.isAuth,
        profile:state.Profile
      })
export default connect(mapStateToProps,{AddData} )(Main)