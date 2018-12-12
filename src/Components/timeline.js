import React, { Component } from 'react';
import Post from "./post";
import PostCreator from "./postCreator";

class TimeLine extends Component {

  constructor() {
    super();
    this.state = {
      postArray: []
    };
  }

  componentDidMount() {
    console.log('App did mount')
    this.getFromStorage();
  }

  insertPost(newPost) {
    const myPosts = this.state.postArray;
    myPosts.unshift(newPost);
    this.setState({ postArray: myPosts });
    this.saveInStorage(myPosts);
  }

  saveInStorage() {
    const posts = JSON.stringify(this.state.postArray);
    localStorage.setItem('posts', posts);
  }


  getFromStorage() {
    const posts = localStorage.getItem('posts');
    if (posts) {
      this.setState({
        postArray: JSON.parse(posts)
      })
        ;
    }
  }

  onNavigate(post){
    this.props.history.push("/post/"+post.time)
  }


  render() {
    return (
      <div>
        <h1>Minha rede social!</h1>
        <button onClick={()=>{
          this.props.history.push("/sobre");
        }}> Ver sobre</button>
        <PostCreator onCreate={this.insertPost.bind(this)} />
        {this.state.postArray.map((post, i) => {
          return (
            <Post text={post.text} time={post.time} key={post.time} initialLikes={post.initialLikes} post={post.post} onNavigate={()=> this.onNavigate(post)}></Post>
          )
        })}
      </div>
    )
  }
}

export default TimeLine;