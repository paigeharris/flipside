import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import { Content, Footer, Header, Nav, Root, presets } from "mui-layout";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";


const config = presets.createDefaultLayout()

const styles = (theme) => {
    return {
        root: {},
        toggleButton: {
            backgroundColor: theme.palette.primary["500"],

            '&:hover': {
                backgroundColor: theme.palette.primary["900"]
            }
        },
        headerBackground: {
            backgroundColor: theme.palette.primary['500'],
        }
    }
};

class Main extends Component {

    constructor(props) {
        super(props);
        const { records, hydrateDB } = props;

        if (!records) hydrateDB();
    }


    render() {
        const { classes, header, content, footer } = this.props;

        return (
            <Root config={config}>
                <Header className={classes.headerBackground}
                        renderMenuIcon={open => (open ? <ChevronLeft/> : <MenuRounded/>)}>
                    {header && header}
                </Header>
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
