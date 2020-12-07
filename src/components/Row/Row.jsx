import React from "react";
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import { RESTAURANT } from "../Table/constants";
import Button from "@material-ui/core/Button";


const styles = (theme) => {
    return {
        root: {
            display: 'grid',
            gridTemplateColumns: '20% 15% 10% 20% 35%',
            backgroundColor: theme.palette.dialoglightgrey['500'],
            padding: 8,
            wordWrap: 'break-word'
        },
        header: {
            backgroundColor: `${theme.palette.blue['500']} !important`
        },
        genreButtonContainer: {
        },
        genreButton: {
            backgroundColor: theme.palette.pink['500'],
            textTransform: 'unset',
            lineHeight: 'unset',
            marginLeft: 6,
            marginTop: 6,
            padding: 1
        }
    }
};

function Row(props) {
    const { classes, record, rowOrder, isHeader } = props;

    return (
        <div className={clsx(classes.root, isHeader && classes.header)}>
            {record && rowOrder && rowOrder.map((key) => {
                const value = record[key];

                if (key === RESTAURANT.GENRE && !isHeader) {
                    const genres = value.split(',');

                    return (
                        <div className={classes.genreButtonContainer}>
                        {genres && genres.map((genre)=>(
                            <Button className={classes.genreButton} key={genre}>
                                {genre}
                            </Button>
                        ))}
                        </div>
                    )
                } else {
                    return (
                        <span key={value}>{value}</span>
                    )
                }

            })}
        </div>
    );
}

export default withStyles(styles)(Row);
