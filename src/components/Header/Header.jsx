import React from "react";
import { Toolbar } from "@material-ui/core";
import { fade, withStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => {
    return {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.primary['500'],
            boxShadow: 'unset',
            width: '100%'
        },
        grow: {
            flexGrow: 1,
        },
        logo: {
            display: 'none',
            [theme.breakpoints.up(475)]: {
                display: 'block',
            },
        },
        title: {
            display: 'none',
            [theme.breakpoints.up(730)]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',

            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }
}

function Header(props) {
    const { classes, updateSearch } = props;

    const onChangeSearch = (e) => {
        const updatedSearch = e.target.value.toLowerCase();

        updateSearch(updatedSearch);
    }

    return (

            <Toolbar className={classes.root}>
                <img className={classes.logo}
                     src={process.env.PUBLIC_URL + '/catch-you.png'}
                     alt={'Catch you logo'}
                />

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon/>
                    </div>
                    <InputBase
                        onChange={onChangeSearch}
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>

                <img className={classes.title}
                     src={process.env.PUBLIC_URL + '/flipside.png'}
                     alt={'Flipside Title'}
                />

            </Toolbar>
    );
}

export default withStyles(styles)(Header);
