import './App.css';
import React from 'react';
import { withStyles } from "@material-ui/styles";

import Main from "./components/Main";
import Header from "./components/Header";
import Content from './components/Content';
import Footer from './components/Footer';

const styles = (theme) => {
    return {
        root: {
            overflow: 'hidden',
            height: '100vh',
            width: '100vw',

            '& button': {
                background: theme.palette.primary["500"],

                '&:hover': {
                    background: theme.palette.yellow['900']
                }
            }
        }
    }
};


function App(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Main header={(<Header/>)}
                  content={(<Content/>)}
                  footer={(<Footer/>)}

            />
        </div>
    );
}

export default withStyles(styles)(App);
