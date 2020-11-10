import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <>
       <form onSubmit={this.props.addData}>
		  <input type="text" 
		    value={this.props.currentData}
		    onChange={this.props.updatemyData}
		   />
		   <button type="submit">Submit</button>		
		</form>
      </>
    )
  }
}
