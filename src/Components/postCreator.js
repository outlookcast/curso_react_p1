import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export const buttomStyle = {
    marginLeft: "10px",
    marginBottom: "10px"
};

class PostCreator extends Component {

    constructor() {
        super();
        this.state = {
            text: "",
            time: "",
            post: ""
        }
    }

    createPost() {
        const newPost = {
            text: this.state.text,
            post: this.state.post,
            time: this.state.time,
            initialLikes: 0
        }
        this.setState(
            {
                text: "",
                time: "",
                post: ""
            }
        )
        this.props.onCreate(newPost);
        console.log("newPost ==> ", newPost)
    }

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <FormControl>
                            <InputLabel >Digite o titulo do post</InputLabel>
                            <Input id="title" value={this.state.text} onChange={(event) => {
                                this.setState({
                                    text: event.target.value
                                })
                            }} />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Digite o horario</InputLabel>
                            <Input id="time" value={this.state.time} onChange={(event) => {
                                this.setState({
                                    time: event.target.value
                                })
                            }} />
                        </FormControl>
                        <div>
                            <Grid container spacing={8} alignItems="flex-end">
                                <FormControl>
                                    <InputLabel>Digite o Post</InputLabel>
                                    <Input id="post" value={this.state.post} onChange={(event) => {
                                        this.setState({
                                            post: event.target.value
                                        })
                                    }} />
                                </FormControl>
                            </Grid>
                        </div>

                    </CardContent>
                    <Button variant="contained" color="primary" style={buttomStyle} onClick={() => {
                        this.createPost();
                    }}>
                        Criar post
                        </Button>
                </Card>
            </div>
        )
    }

}

export default PostCreator;