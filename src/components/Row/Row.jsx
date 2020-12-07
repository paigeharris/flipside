import React from "react";
import clsx from 'clsx';
import { fade, withStyles } from "@material-ui/core/styles";
import { RESTAURANT } from "../Table/constants";
import Button from "@material-ui/core/Button";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";


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
        genreButtonContainer: {},
        genreButton: {
            backgroundColor: theme.palette.primary['500'],
            textTransform: 'unset',
            lineHeight: 'unset',
            marginLeft: 6,
            marginTop: 6,
            padding: '3px 10px'
        },
        headerText: {},
        rowText: {
            marginTop: 8,
        },
        headerSort: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        sortArrow: {
            fontSize: 16,

            '&:hover': {
                color: theme.palette.yellow['500'],
                cursor: 'pointer'
            },
        }
    }
};

function Row(props) {
    const { classes, record, rowOrder, isHeader, sortOrder, updateSort } = props;

    const onClickSort = () => {
        updateSort(sortOrder ? 0 : 1)
    };

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
                            {genres && genres.map((genre) => (
                                <Button className={classes.genreButton} key={genre}>
                                    {genre}
                                </Button>
                            ))}
                        </div>
                    )
                } else if (isHeader) {
                    return key === RESTAURANT.NAME ? (
                            <div className={classes.headerSort}
                                 key={value}>
                                <span className={classes.headerText}>
                                    {value}
                                </span>
                                {sortOrder ? (<ArrowUpward className={classes.sortArrow}
                                                           onClick={onClickSort}
                                />) : (<ArrowDownward className={classes.sortArrow}
                                                      onClick={onClickSort}
                                />)}
                            </div>
                        ) :
                        (
                            <span className={classes.headerText} key={value}>{value}</span>
                        )

                } else {
                    return (
                        <span className={classes.rowText} key={value}>{value}</span>
                    )
                }

            })}
        </div>
    );
}

export default withStyles(styles)(Row);
