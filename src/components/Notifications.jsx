import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../SocketContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    }
}));
const Notifications = () => {
    const classes = useStyles();
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div className={classes.gridContainer}>
                    <h1>{call.name} is calling:</h1>
                    <Button variant="contained" color="primary" onClick={answerCall}>
                        Answer
                    </Button>
                </div>
            )}
        </>
    );
};

export default Notifications;