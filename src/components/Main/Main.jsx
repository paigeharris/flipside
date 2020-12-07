import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";

import { Content, Footer, Header, Nav, Root, presets } from "mui-layout";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";


const config = presets.createStandardLayout();

const styles = (theme) => {
    const sm = theme.breakpoints.only('sm');
    const md = theme.breakpoints.only('md');
    return {
        root: {
        },
        toggleButton: {
            backgroundColor: theme.palette.blue["500"],

            '&:hover': {
                backgroundColor: theme.palette.blue["900"]
            }
        },
    }
};

class Main extends Component {

    constructor(props) {
        super(props);
        const { records, hydrateDB } = props;

        if (!records) hydrateDB();
    }


    render() {
        const { classes, header, nav, content, footer } = this.props;

        return (
            <Root config={config}>
                <Header renderMenuIcon={open => (open ? <ChevronLeft/> : <MenuRounded/>)}>
                    {header && header}
                </Header>
                <Nav renderIcon={collapsed =>
                         collapsed ? <ChevronRight/> : <ChevronLeft/>
                     }
                     toggleProps={{
                         classes: {
                             root: classes.toggleButton
                         }
                     }}
                >
                    {nav && nav}
                </Nav>
                <Content>
                    {content && content}
                </Content>
                <Footer>
                    {footer && footer}
                </Footer>
            </Root>
        );
    }


}

export default withStyles(styles)(Main);
