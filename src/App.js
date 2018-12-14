import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TimeLine from "./Components/timeline";
import PostDetails from "./Components/postDetails";
import Header from "./Components/header";
import UserCreate from "./Components/userCreate"

class App extends Component {

    showNotFound() {
        return (
            <div>
                <p style={{
                    textAlign: "center"
                }}> Pagina nao encontrada!</p>
            </div>
        );
    }

    shouAboutPage() {
        return (
            <div>
                <p style={{
                    textAlign: "center"
                }}> Sou uma pagina feita em React!</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/post/:id" component={PostDetails} />
                        <Route exact path="/" component={TimeLine} />
                        <Route exact path="/createUser" component={UserCreate} />
                        <Route exact path="/sobre" component={this.shouAboutPage} />
                        <Route path="*" component={this.showNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;