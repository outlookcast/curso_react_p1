import React, { Component } from "react";

class PostCreator extends Component{

    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    createPost(){
        const newPost = {
            text: "Post criado pelo postCreator",
            post: this.state.text,
            time: new Date().getTime(),
            initialLiker: 0
        }
        this.props.onCreate(newPost);
        console.log("newPost ==> ", newPost)
    }

    render(){
        return(
            <div>
                <h3>Novo Post</h3>
                <input style={{
                    width: "100%",
                    padding: '15'
                }} value={this.state.text} onChange={(event)=>{
                    this.setState({
                        text: event.target.value
                    }, ()=> {
                        console.log('text ==> ', this.state.text)
                    })
                }}/>
                <button onClick={()=> {
                    this.createPost();
                }}>Postar</button>
            </div>
        )
    }

}

export default PostCreator;