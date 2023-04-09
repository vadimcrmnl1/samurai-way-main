import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {selectIsLoading} from "../../../redux/selectors/authentifical-selectors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

export const SimpleBackdrop = () => {
    const classes = useStyles();
    const isLoading = useSelector(selectIsLoading)
    return (
        <div>
            <Backdrop className={classes.backdrop} open={isLoading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
}