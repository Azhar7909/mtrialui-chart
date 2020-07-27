import React from 'react';
import { makeStyles, Paper, TextField, Button, } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '15px',
        flexDirection:'column',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    Paper: {
        margin: '0 auto',
        height: '300px',
        width: '300px',
        textAlign:'center'
    },
    input: {
        width: '93%',
        marginTop:'10px'
    },
    loginBtn: {
        marginTop:'35px'
    },
    sign_forgot: {
        display:'flex',
        justifyContent:'space-between',
        padding: '0 10px'
    },
    signin: {
        color: 'darkgreen',
        fontSize: '13px',
        cursor: 'pointer'
    },
    forgot: {
        color: 'darkred',
        fontSize: '13px',
        cursor: 'pointer'
    },
    loginHeader: {
        color: 'navy',
    }
}));

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.Paper} >
                <h3 className={classes.loginHeader}>Login</h3>
                <form noValidate autoComplete="off">
                    <TextField className={classes.input}  label="Enter Email" />
                    <TextField className={classes.input} label="Enter Password" />
                    <Button className={classes.loginBtn} variant="contained">Login</Button>
                </form>
                <p className={classes.sign_forgot}>
                    <span className={classes.signin}>Sign Up</span>
                    <span className={classes.forgot}>Forgot Password</span>
                </p>
            </Paper>
        </div>
    );
}
