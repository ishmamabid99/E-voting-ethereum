import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { loadWeb3 } from '../../methods/LoadWeb3';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    div1: {
        flexGrow: 1
    },
    div2: {
        flexGrow: 2
    },
    btn: {
        margin: "1rem"
    },
    navlink: {
        textDecoration: "none"
    }
}))
export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color='primary' position='sticky'>
                <Toolbar >
                    <NavLink to='/' style={{ textDecoration: "none" }}>
                        <div className={classes.div1}>
                            E-Voting System Admin
                        </div>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}
