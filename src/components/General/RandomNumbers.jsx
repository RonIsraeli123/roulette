import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Ball from './Ball';
import { useNavigate } from 'react-router-dom';

import RefreshIcon from '@mui/icons-material/Refresh';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import returnNumbers from '../../algo/algo'


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
                    <Typography>{children}</Typography>
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

export const RandomNumbers = (props) => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false)
    const [value, setValue] = React.useState(0);
    const [result] = useState(returnNumbers(props.players, props.sumBalls))

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <div className='navbarEnd' >
                    <Button className='ButtonNav' variant="outlined" onClick={() => { navigate('/game') }} endIcon={<CompareArrowsIcon />}>
                        חזור
                    </Button>
                    <Button className='ButtonNav' variant="outlined" onClick={() => { navigate(0) }} endIcon={<RefreshIcon />}>
                        הגרלה מחדש
                    </Button>
                    <Button className='ButtonNav' variant="outlined" onClick={() => { navigate('/') }} endIcon={<MenuBookIcon />}>
                        לחוקים
                    </Button>
                </div>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        result.map((item, index) => {
                            return <Tab label={`שחקן ${index + 1} `} {...a11yProps(index)} />
                        })
                    }
                </Tabs>
            </Box>
            {
                result.map((item, index) => {
                    return (
                        <TabPanel value={value} index={index}>
                            {show ?
                                <div className='result'> <h2>הכדורים הם -</h2>
                                    <div className='balls'>
                                        {item.map((ballNumberColor,) => {
                                            return <Ball ballValue={ballNumberColor[0]} color={ballNumberColor[1]} />
                                        })}
                                    </div>
                                    <Button variant="contained" onClick={() => { setShow(!show) }}>
                                        {show ? "הסתר" : "גלה"}
                                    </Button>
                                </div>

                                : <div>
                                    <div>
                                        <div className='result'> <h2>הכדורים הם -</h2>
                                            <Button variant="contained" onClick={() => { setShow(!show) }}>
                                                {show ? "הסתר" : "גלה"}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            }
                        </TabPanel>
                    )
                })
            }
        </Box>

    );
}
