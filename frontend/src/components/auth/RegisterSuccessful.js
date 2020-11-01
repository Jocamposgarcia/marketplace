import { Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none'
    }
}))

const RegisterSuccessful = () => {
    const classes = useStyles()
    return (
        <div style={{textAlign: 'center'}}>
            <Typography variant='h5'>A confirmation email has been sent to verify your account.</Typography>
            <Typography variant='h6' style={{fontWeight: 200}}>Your email will need to be verified before you are able to log in.</Typography>

            <br />
            <Link to="/" className={classes.link}><Button variant='outlined' >Go to home page</Button></Link> 
        </div>
    )
}

export default RegisterSuccessful;
