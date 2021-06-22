import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 35,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid #38445a8a',
        background: '#283142d1',
        color: '#c5c7ca',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h4" component="h4" align="center" >
                    Video Chat
                </Typography>
            </AppBar>

            {/* VideoPlayer Component */}
            <VideoPlayer />

            {/* Options component -> include notifications */}
            <Options>
                <Notifications />
            </Options>

        </div>
    )
}

export default App
