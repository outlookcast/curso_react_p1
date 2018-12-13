import React, { Component } from "react";
import "../post.css";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const buttomStyle = {
    marginLeft: "10px",
    marginBottom: "10px"
};

class Post extends Component {

    componentDidMount() {
        console.log("props =>", this.props)
    }

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
        if (this.props.showViewPost) {
            return (
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.props.text}
                        </Typography>
                        <Typography color="textSecondary">
                            {this.props.time}
                        </Typography>
                        <Typography component="p">
                            Post: {this.props.post}
                        </Typography>
                        <Typography color="textSecondary">
                            Likes: {this.state.likes}
                        </Typography>
                    </CardContent>
                    <Button variant="contained" color="primary" style={buttomStyle} onClick={() => {
                        this.props.onNavigate();
                    }}>
                        View Post
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => {
                        this.setLike();
                    }
                    } style={buttomStyle}>Like</Button>
                </Card>
            );
        }
        else{
            return (
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.props.text}
                        </Typography>
                        <Typography color="textSecondary">
                            {this.props.time}
                        </Typography>
                        <Typography component="p">
                            Post: {this.props.post}
                        </Typography>
                        <Typography color="textSecondary">
                            Likes: {this.state.likes}
                        </Typography>
                    </CardContent>
                    <Button variant="contained" color="secondary" onClick={() => {
                        this.setLike();
                    }
                    } style={buttomStyle}>Like</Button>
                </Card>
            );
        }

    }
}


export default Post;