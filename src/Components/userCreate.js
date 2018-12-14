import React, { Component } from "react";
import { Card, FormControl, FormLabel, InputLabel, Input, RadioGroup } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import img1 from "../Assets/ft1.png";
import img2 from "../Assets/ft2.png";
import img3 from "../Assets/ft3.png";

const imgs = [
    img1,img2,img3
];


class UserCreate extends Component {


    constructor() {
        super();
        this.state = {
            nome: "",
            img: ""
        }
    }

    selecionarImg = event => {
        this.setState({ img: event.target.value }, () => {
            console.log(this.state.img)
        });
    };

    returnImages(){
        return imgs.map((img) => {
            return<img src={img} key={img} width="100" height="100"/>
        });
    }


    render() {
        return this.returnImages();
        return (
            <Card>
                <CardContent>
                    <h1>Criar Usuario</h1>
                    <FormControl>
                        <FormLabel>
                            Nome
                    </FormLabel>
                        <InputLabel id="nome" />
                        <Input id="nome" value={this.state.nome} onChange={(event) => {
                            this.setState({ nome: event.target.value });
                        }} />
                    </FormControl>

                    <FormControl>
                        <InputLabel id="imagem"></InputLabel>
                        <RadioGroup value={this.state.img} onChange={this.selecionarImg}>
                            
                        </RadioGroup>
                        
                    </FormControl>
                    {this.returnImages}
                </CardContent>

            </Card>
        )
    }

}

export default UserCreate;