import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const moment = require('moment');
const uuidv4 = require('uuid/v4');

export const buttomStyle = {
    marginLeft: "10px",
    marginBottom: "10px"
};

class PostCreator extends Component {

    constructor() {
        super();
        this.state = {
            text: "",
            autor: "",
            post: ""
        }
    }

    createPost() {
        const newPost = {
            id: uuidv4(),
            text: this.state.text,
            post: this.state.post,
            time: moment().format("DD/MM/YYYY - HH:mm:ss"),
            autor: this.state.autor,
            initialLikes: 0
        }
        console.log("new post ==> ", newPost)
        this.setState(
            {
                text: "",
                autor: "",
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
                            <InputLabel>Digite o Autor</InputLabel>
                            <Input id="autor" value={this.state.autor} onChange={(event) => {
                                this.setState({
                                    autor: event.target.value
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