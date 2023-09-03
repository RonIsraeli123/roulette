import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import { useNavigate } from 'react-router-dom';

import { NavBarConfig, ResultPageConfig } from '../../../config'
import returnNumbers from '../../../algorithm/algo'
import Ball from '../../General/Ball';
import { SearchBalls } from './SearchBalls'

import { useSelector, useDispatch } from 'react-redux';
import { setPlayerBallsResult } from '../../../redux/slices/gameSlice';

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
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const BallsResult = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);
    const numBalls = useSelector((state) => state.game.gameData['numBalls']);

    useEffect(() => {
        dispatch(setPlayerBallsResult(returnNumbers(numPlayer, numBalls)));
    }, [dispatch, numBalls, numPlayer]);


    const playerBallsResult = useSelector((state) => state.game.gameData['playerBallsResult']);

    const [show, setShow] = useState(false)
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setShow(false)
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <div className='navbarEnd' >
                    <Button className='ButtonNav' variant="outlined" onClick={() => { navigate('/Form') }} endIcon={<CompareArrowsIcon />}>
                        {NavBarConfig.GO_BACK}
                    </Button>
                    <Button className='ButtonNav' variant="outlined" onClick={() => { dispatch(setPlayerBallsResult((returnNumbers(numPlayer, numBalls)))); setShow(false) }} endIcon={<RefreshIcon />}>
                        {NavBarConfig.RESHUFFLE}
                    </Button >
                    <Button className='ButtonNav' variant="outlined" onClick={() => { navigate('/') }} endIcon={<MenuBookIcon />}>
                        {NavBarConfig.PASS_TO_RULES}
                    </Button>
                </div >
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        playerBallsResult.map((item, index) => {
                            return <Tab key={index} label={`${ResultPageConfig.PLAYER_TITLE} ${index + 1} `} {...a11yProps(index)} />
                        })
                    }
                </Tabs>
            </Box >
            {
                playerBallsResult.map((item, index) => {
                    return (
                        <TabPanel key={index} value={value} index={index}>
                            {show ?
                                <div className='balls-section'>
                                    <h2>{ResultPageConfig.BALLS_TITLE}</h2>
                                    <div className='balls'>
                                        {item.map((ballNumberColor, index) => {
                                            return <Ball key={index} ballValue={ballNumberColor[0]} color={ballNumberColor[1]} />
                                        })}
                                    </div>
                                    <Button variant="contained" onClick={() => { setShow(!show) }}>
                                        {show ? "hide" : "show"}
                                    </Button>
                                </div>
                                : <div>
                                    <div>
                                        <div className='balls-section'>
                                            <h2>{ResultPageConfig.BALLS_TITLE}</h2>
                                            <Button variant="contained" onClick={() => { setShow(!show) }}>
                                                {show ? "hide" : "show"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </TabPanel>
                    )
                })}
            <SearchBalls />

        </Box >

    );
}
