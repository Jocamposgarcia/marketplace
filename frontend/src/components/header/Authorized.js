import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Toolbar } from '@material-ui/core';


import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    console.log('index', index)

    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Authorized() {
    const classes = useStyles();
    const [value, setValue] = React.useState(null);
    const [redirect, setRedirect] = React.useState(null);

    const initialRenderTabHandler = newValue => {
        setValue(newValue);

    }

    const tabChangeHandler = (event, newValue) => {
        setValue(newValue);
        console.log('newValue', newValue)
    };


    const redirectTo = (path) => {
        setRedirect(path);
        console.log('document location', document.location)
    }

    useEffect(() => {
        const currentUrl = document.location.href
        let tabIndex;
        switch (currentUrl) {
            case "http://localhost:3000/shoppingCart":
                tabIndex = 2
                break;

            case "http://localhost:3000/administration":
                tabIndex = 1
                break;
            case "http://localhost:3000/":
                tabIndex = 0
                break;

        }
        initialRenderTabHandler(tabIndex)
    }, [])


    return (
        <div className={classes.root} style={{ marginBottom: '100px' }}>
            {/* large Screen */}
            <AppBar>
                <Toolbar>
                    <Tabs value={value} onChange={tabChangeHandler} aria-label="simple tabs example">
                        <Tab label="Home" icon={<HomeRoundedIcon />} {...a11yProps(0)} onClick={() => redirectTo('/')} />
                        <Tab label="sell an item" icon={<PostAddIcon />} {...a11yProps(1)} onClick={() => redirectTo('/administration')}>
                            <Redirect
                                to="/administration"
                            />
                        </Tab>
                        <Tab label={`Cart(${2})`} icon={<ShoppingCartRoundedIcon />} {...a11yProps(2)} onClick={() => redirectTo('/shoppingCart')} />


                    </Tabs>
                </Toolbar>

            </AppBar>

            {redirect ? <Redirect to={redirect} /> : null}


        </div>
    )
};