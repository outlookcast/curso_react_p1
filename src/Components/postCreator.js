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

const users = [
    {
      id: "4bc99efa-c1e3-48a0-8c52-9ea17a62c242",
      nome: "Vinicius",
      foto: "../Assets/ft1.png"
    },
    {
      id: "b829e6f4-1bdf-45d4-b9de-5723d991c5ec",
      nome: "Isabela",
      foto: "../Assets/ft1.png"
    }
  ]

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
                        <h1>Criar post</h1>
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
                        <h3>Selecione o Autor</h3>
                        {users.map((element) => {
                            return <div key={element.id}>{element.nome}</div>
                        })}
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