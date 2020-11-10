import React, { Component } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import isEqual from "lodash/isEqual";

import { withRouter } from "react-router-dom";

class EditName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show2: false,
      myerror: "",
      name: "",
    };
  }

  handleClose = (e) => {
    this.props.hideModal(false);
  };

  OnChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  editName = (id) => {
    this.props.username = this.state.name;
  };

  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(prevState, this.state)) {
      this.props.username = this.state.name;
    }
  }

  render() {
    return (
      <Container className="w-50">
        <div>
          <h4>Change Name</h4>
          <div>
            <input value={this.state.name} />
            <Button onClick={this.editName} className="mt-3 cancelbtn">
              Confirm
            </Button>
            <Modal className=" firstnameupdatesnackbar" show={this.state.show2}>
              <div id="snackbar">Slot Edited Successfully!</div>
            </Modal>
          </div>
        </div>
        <p style={{ fontWeight: "bold" }} className="mt-4">
          {this.state.myerror}
        </p>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps)(withRouter(EditName));
