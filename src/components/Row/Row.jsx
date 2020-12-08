import React from "react";
import clsx from 'clsx';
import { RESTAURANT } from "../Table/constants";

import { withStyles } from "@material-ui/core/styles";
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { Button } from "@material-ui/core";

import AutoComplete from "../AutoComplete/AutoComplete";


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
        headerText: {
            display: 'flex',
            justifySelf: 'center',
            alignSelf: 'center',
        },
        rowText: {
            display: 'flex',
            justifySelf: 'center',
            alignSelf: 'center'
        },
        headerSort: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        headerFilter: {

        },
        sortArrow: {
            fontSize: 16,

            '&:hover': {
                color: theme.palette.yellow['900'],
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
                    if (key === RESTAURANT.NAME) {
                        return (
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
                        )
                    } else if (key === RESTAURANT.STATE) {
                        return (
                            <AutoComplete className={classes.headerSort}
                                          placeholder={'State'}
                                          name={'state'}
                                          onChange={()=>{}}
                                // fullWidth
                                          options={[
                                              {
                                                  value: 'CO',
                                                  label: 'CO'
                                              }, {
                                                  value: 'CA',
                                                  label: 'CA',
                                              },
                                              {
                                                  value: 'DE',
                                                  label: 'DE'
                                              }
                                          ]

                                          }/>
                        )

                    } else if(key === RESTAURANT.GENRE) {
                        return (
                            <AutoComplete className={classes.headerSort}
                                          placeholder={'Genre'}
                                          name={'genre'}
                                          onChange={()=>{}}
                                // fullWidth
                                          options={[
                                              {
                                                  value: 'Genre',
                                                  label: 'Genre1'
                                              }, {
                                                  value: 'Genre2',
                                                  label: 'Genre2',
                                              },
                                              {
                                                  value: 'Genre3',
                                                  label: 'Genre3'
                                              }
                                          ]

                                          }/>
                        )

                    }else {
                        return (
                            <span className={classes.headerText} key={value}>{value}</span>
                        )
                    }


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
