import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LinkButton from './Button';
import Ball from './Ball';

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

const RandomNumbers = (props) => {
    const [show, setShow] = useState(false)
    const [value, setValue] = React.useState(0);
    const [result] = useState(returnNumbers(props.players, props.sumBalls))
    console.log(result)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <LinkButton route="/" text="חזרה הביתה" />
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
                                        {item.map((ballValue) => {
                                            return <Ball ballValue={ballValue} />
                                        })}
                                    </div>
                                </div>
                                : <div></div>
                            }

                            <Button variant="contained" onClick={() => { setShow(!show) }}>
                                {show ? "הסתר" : "גלה"}
                            </Button>
                        </TabPanel>
                    )
                })
            }
        </Box>
    );
}
export default RandomNumbers;
