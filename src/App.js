import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TimeLine from "./Components/timeline";
import PostDetails from "./Components/postDetails";

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
                <BrowserRouter>
                    <Switch>
                        <Route path="/post/:time" component={PostDetails} />
                        <Route exact path="/" component={TimeLine} />
                        <Route exact path="/sobre" component={this.shouAboutPage} />
                        <Route path="*" component={this.showNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
                )
            }
        }
        
export default App;