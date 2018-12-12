import React, { Component } from "react";
import "../post.css";

class Post extends Component {


    constructor(props) {
        super(props);
        this.state = {
            likes: props.initialLikes
        };
    }

    setLike() {
        this.setState({ likes: this.state.likes + 1 }, () => {
            console.log("Likes: ", this.state.likes)
            this.savingInStorageWithPost();
        })
    }

    savingInStorageWithPost() {
        const posts = JSON.parse(localStorage.getItem('posts'));
        const updatePosts = posts.map(savedPost => {
            if (savedPost.time === this.props.time) {
                savedPost.initialLikes = this.state.likes;
            }
            return savedPost;
        });
        localStorage.setItem('posts', JSON.stringify(updatePosts));
    }

    render() {
        return (
            <div className={"post"}>
                <h3 onClick={()=> {
                    this.props.onNavigate();
                }}>{this.props.text}</h3>
                <small>{this.props.time}</small>
                <p>Post: {this.props.post}</p>
                <div style={likeLike}>
                    <p>Likes: {this.state.likes}</p>
                    <button style={
                        {
                            backgroundColor: 'blue',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '5px',
                            fontWeight: 'bolder'
                        }
                    } onClick={() => {
                        this.setLike();
                    }
                    }>Like</button>
                </div>
            </div>
        );
    }
}

const likeLike = {
    display: "flex",
    justifyContent: "space-around",
    height: 40
}

export default Post;