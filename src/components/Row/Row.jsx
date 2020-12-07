import React from "react";
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles";
import { RESTAURANT } from "../Table/constants";
import Button from "@material-ui/core/Button";


const styles = (theme) => {
    return {
        root: {
            display: 'grid',
            gridTemplateColumns: '4fr 3fr 2fr 4fr 6fr',
            backgroundColor: theme.palette.dialoglightgrey['500'],
            gridGap: 8,
            padding: 8,
            wordWrap: 'break-word'
        },
        header: {
            backgroundColor: `${theme.palette.primary['500']} !important`
        },
        genreButtonContainer: {
        },
        genreButton: {
            backgroundColor: theme.palette.primary['500'],
            textTransform: 'unset',
            lineHeight: 'unset',
            marginLeft: 6,
            marginTop: 6,
            padding: '2px 1px'
        }
    }
};

function Row(props) {
    const { classes, record, rowOrder, isHeader } = props;

    return (
        <div className={clsx(classes.root, isHeader && classes.header)}
             key={record.id}>
            {record && rowOrder && rowOrder.map((key) => {
                const value = record[key];

                if (key === RESTAURANT.GENRE && !isHeader) {
                    const genres = value.split(',');

                    return (
                        <div className={classes.genreButtonContainer}
                             key={value}
                        >
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
