import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Row from '../Row';
import { HEADER, RESTAURANT } from "./constants";

const styles = (theme) => {
    return {
        root: {
            textAlign: 'center',
            display: 'grid',
            gridGap: '8px',
            margin: 24
        }
    }
};


function Table(props) {
    const { classes, records } = props;
    const rowOrder = [RESTAURANT.NAME, RESTAURANT.CITY, RESTAURANT.STATE, RESTAURANT.PHONE, RESTAURANT.GENRE];

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
        </div>
    );
}

export default withStyles(styles)(Table);
