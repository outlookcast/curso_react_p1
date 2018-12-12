import React, { Component } from "react";
import Post from "./post";

class PostDetails extends Component {
    constructor(){
        super();
        this.state = {
            post: null
        }
    }

    componentDidMount(){
        this.getFromLocalStorage();
    }

    getFromLocalStorage() {
        const posts =  JSON.parse(localStorage.getItem("posts"));
        const post = posts.filter((savedPost) => {
            return savedPost.time.toString() === this.props.match.params.time;
        })[0];
        this.setState({post});
    }

    render() {
        if (!this.state.post) {
            return (<div>Loading...</div>)
        } else {
            return (
                <div>
                    <Post text={this.state.post.text} time={this.state.post.time} key={this.state.post.time} initialLikes={this.state.post.initialLikes} post={this.state.post.post}/>
                </div>
            )
        }
    }
}

export default PostDetails;