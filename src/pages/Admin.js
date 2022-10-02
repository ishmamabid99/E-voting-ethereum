import React, { useEffect } from 'react'
import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import { loadWeb3 } from '../methods/LoadWeb3';
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "13rem"
    },
    paper: {
        width: "35rem",
        height: "50rem",
        backgroundColor: "#EEEEEE"
    },
    colorDiv: {
        background: "#1572A1",
        height: "6rem",
        display: "flex",
        alignItems: "center"
    },
    typo: {
        fontFamily: "Roboto",
        marginLeft: "5rem",
        fontSize: "2rem"
    },
    div1: {
        marginTop: "4rem"
    },
    TextField: {
        width: "28rem",
        margin: "1rem",
    },
    Button: {
        width: "25rem",
        marginTop: "4rem"
    }

}))
export default function Admin() {
    const classes = useStyles();
    useEffect(() => {
        loadWeb3();
    }, [])
    return (
        <div className={classes.root} align='center' >
            <Paper className={classes.paper} elevation={3}>
                <div align='center' className={classes.colorDiv} >
                    <Typography color='secondary' align='center' className={classes.typo}>
                        Candidate Registration Form
                    </Typography>
                </div>
                <div className={classes.div1}>

                    <TextField helperText={<Typography color='primary'>
                        Please enter candidate name
                    </Typography>} label="Name" id='name' className={classes.TextField} variant='outlined' />
                    <TextField label="Voter ID No" id="v_id" className={classes.TextField} variant='outlined'
                        helperText={<Typography color='primary'>
                            Please enter candidate voter id no
                        </Typography>} />
                    <TextField
                        helperText={<Typography color='primary'>
                            Please enter candidates' party
                        </Typography>}
                        label="Party" id='party' className={classes.TextField} variant='outlined' />
                </div>
                <Button className={classes.Button} color='primary' variant='contained'>
                    Register
                </Button>
            </Paper>
        </div>
    )
}
