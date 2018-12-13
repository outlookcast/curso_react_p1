import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                        </IconButton>
                            <Typography variant="h6" color="inherit">
                            Minha rede social
                        </Typography>
                            <Button color="inherit" href="/">Home</Button>
                        <Button color="inherit" href="/sobre">Sobre</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;