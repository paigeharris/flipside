import React from "react";
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";


const styles = (theme) => {
    return {
        root: {
            display: 'grid',
            gridTemplateColumns: '20% 20% 10% 20% 30%',
            gridGap: '8px',
        },
        header: {
            backgroundColor: theme.palette.blue['500']
        }
    }
};

function Row(props) {
    const { classes, record, rowOrder, isHeader } = props;

    return (
        <div className={clsx(classes.root, isHeader && classes.header)}>
            {record && rowOrder && rowOrder.map((key) => (
                <span key={record[key]}>{record[key]}</span>
            ))}
        </div>
    );
}

export default withStyles(styles)(Row);
