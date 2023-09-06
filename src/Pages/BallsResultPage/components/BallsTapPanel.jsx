import React from 'react'

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { BallsView } from './BallsView'
import { ResultPageConfigEnglish, ResultPageConfigHebrew } from '../../../config'
import { SendSmsComponent, SearchBalls } from '../components'

import 'react-phone-number-input/style.css'

const TabPanel = (props) => {
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


export const BallsTapPanel = (props) => {
    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? ResultPageConfigHebrew : ResultPageConfigEnglish

    const playerBallsResult = useSelector((state) => state.game.gameData['playerBallsResult']);

    return (
        <div>
            {
                playerBallsResult.map((item, index) => {
                    return (
                        <div key={index}>
                            <TabPanel key={index} value={props.value} index={index}>
                                <div className='balls-section'>
                                    <h2>{configText.BALLS_TITLE}</h2>
                                    {props.show &&
                                        <BallsView item={item} show={props.show} index={index} setShow={props.setShow} />
                                    }
                                    <Button variant="contained" onClick={() => { props.setShow(!props.show) }}>
                                        {props.show ? configText.BUTTON_HIDE_TEXT : configText.BUTTON_SHOW_TEXT}
                                    </Button>
                                </div>
                                <Box className='center_search_find'>
                                    {props.show ? < SendSmsComponent index={index} /> : <SearchBalls />}
                                </Box>
                            </TabPanel>

                        </div>
                    )

                })
            }
        </div>
    )
}
