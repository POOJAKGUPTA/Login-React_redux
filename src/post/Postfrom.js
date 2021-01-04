import React, { Component } from 'react';
import { connect } from "react-redux";

import '../form.css'
class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    }
    this.props.dispatch({
      type: 'ADD_POST',
      data
    });
    this.getTitle.value = '';
    this.getMessage.value = '';
  }
  render() {
    return (
      <div className="container">
        <h1>Create Post</h1>
        <hr />
        <form onSubmit={this.handleSubmit} >
          <label for="email"><b>Title</b></label>
          <input type="text" placeholder="Enter Post Title" name="title" ref={(input) => this.getTitle = input} />
          <br />
          <label for="psw"><b>Message</b></label>
          <input type="text" placeholder="Enter Password" name="psw" ref={(input) => this.getMessage = input} />
          <div className="clearfix">
            <button>Create Post</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
