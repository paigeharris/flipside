import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

import Row from '../Row';
import { HEADER, RESTAURANT } from "./constants";

const styles = (theme) => {
    const md = theme.breakpoints.up('md');


    return {
        root: {
            textAlign: 'center',
            display: 'grid',
            gridGap: '2px',
            margin: 2,

            [md]: {
                margin: 24,
                gridGap: '8px',
            }
        },
        paginator: {

        },
        pageArrow: {
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
        }
    }
};


function Table(props) {
    const { classes, records, page, pages, updatePage } = props;
    const rowOrder = [RESTAURANT.NAME, RESTAURANT.CITY, RESTAURANT.STATE, RESTAURANT.PHONE, RESTAURANT.GENRE];

    const onClickPageForward = () => {
        if ( page < pages - 1 ) {
            updatePage(page + 1)
        }
    }

    const onClickPageBack = () => {
        if ( page > 0 ) {
            updatePage(page - 1)
        }
    }

    return (
        <div className={classes.root}>
            {rowOrder &&
            <Row record={HEADER}
                 rowOrder={rowOrder}
                 key={HEADER.id}
                 isHeader={true}

            />
            }
            {records && records.length ? records.map((record) => {
                    return (<Row record={record}
                                 rowOrder={rowOrder}
                                 key={record.id}
                    />)
                }) :
                (<h1>No records found</h1>)
            }
            <div className={classes.paginator}>
            <ArrowBack className={classes.pageArrow}
                       onClick={onClickPageBack}/>
                {page + 1} / {pages}
            <ArrowForward className={classes.pageArrow}
                          onClick={onClickPageForward}
            />
            </div>
        </div>
    );
}

export default withStyles(styles)(Table);
