import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div>
                <h2>Title : {this.props.post.title}</h2>
                <p>Message : {this.props.post.message}</p>
            </div>
        );
    }
}
export default Post;