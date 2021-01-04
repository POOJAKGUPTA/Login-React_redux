import React, { Component } from 'react';
import Post from "./post";
import { connect } from 'react-redux';

class AllPost extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts 
    }
}
export default connect(mapStateToProps)(AllPost);