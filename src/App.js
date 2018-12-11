import React, { Component } from 'react';
import Post from "./Components/post";
import PostCreator from "./Components/postCreator";

const postArray = [
  {
    text: "Texto do primeiro post",
    time: "13:00",
    post: "POST 1",
    initialLikes: 4
  },
  {
    text: "Texto do seugundo post",
    time: "14:00",
    post: "POST 2",
    initialLikes: 6
  },
  {
    text: "Texto do terceiro post",
    time: "15:00",
    post: "POST 3",
    initialLikes: 8
  },
  {
    text: "Texto do quarto post",
    time: "16:00",
    post: "POST 4",
    initialLikes: 2
  }
];



class App extends Component {

  constructor(){
    super();
    this.state = {
      postArray: postArray
    };
  }

  insertPost(newPost){
    const myPosts = this.state.postArray;
    myPosts.unshift(newPost);
    this.setState({postArray: myPosts});
  }

  render() {
    return (
      <div>
        <h1>Minha rede social!</h1>
        <PostCreator onCreate={this.insertPost.bind(this)}/>
        {this.state.postArray.map(post => {
          return (
            <Post text={post.text} time={post.time} key={post.text} initialLikes={post.initialLikes} post={post.post}></Post>
          )
        })}
      </div>
    )
  }
}

export default App;