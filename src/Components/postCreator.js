import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';

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
            post: "",
            autores: null
        }
    }

    componentDidMount() {
        this.setState({ autores: users }, () => {
            console.log('this.sate from postCreator', this.state)
        })
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

    selecionarAutor = event => {
        this.setState({ autor: event.target.value }, () => {
            console.log(this.state.autor)
        });
    };

    formAutores() {
        if (this.state.autores) {
            return this.state.autores.map((element) => {
                return (<FormControlLabel value={element.nome} control={<Radio color="primary" />} label={element.nome} labelPlacement="start" key={element.id} />)
            })
        }
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
                        <div style={{
                            marginTop: "20px"
                        }}>
                            <Grid container spacing={8} alignItems="flex-end">
                                <FormControl>
                                    <FormLabel>Autor</FormLabel>
                                    <RadioGroup value={this.state.autor} onChange={this.selecionarAutor}>
                                        {this.formAutores()}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </div>

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