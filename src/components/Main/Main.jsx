import React, {Component} from "react";

import { Content, Footer, Header, Nav, Root, presets } from "mui-layout";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";


const config = presets.createStandardLayout();

class Main extends Component {

    constructor(props) {
        super(props);
        const { records, hydrateDB } = props;

        if (!records) hydrateDB();
    }


    render() {
        const { header, nav, content, footer } = this.props;

        return (
            <Root config={config}>
                <Header renderMenuIcon={open => (open ? <ChevronLeft/> : <MenuRounded/>)}>
                    {header && header}
                </Header>
                <Nav renderIcon={collapsed =>
                    collapsed ? <ChevronRight/> : <ChevronLeft/>
                }>
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

export default Main;

