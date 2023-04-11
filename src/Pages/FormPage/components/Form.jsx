import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { Config, GameFormConfig } from '../../../config'

const validation = (players) => {
    if (players > Config.MAX_PLAYERS || players < Config.MIN_PLAYERS) {
        return false;
    }
    return true;
}

export const Form = (props) => {
    const playersSumChoice = [2, 3, 4, 5]
    const ballsSumChoice = [1, 2, 3]

    return (
        <div className="GameForm">
            <div className='form'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{GameFormConfig.NUMBER_OF_PLAYERS}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.numPlayers}
                            label={GameFormConfig.NUMBER_OF_PLAYERS}
                            onChange={
                                e => {
                                    if (validation(e.target.value)) {
                                        props.setPlayers(e.target.value);
                                    } else {
                                        e.target.value = props.players;
                                        alert(GameFormConfig.PLAYERS_ALERT_MESSAGE_TEXT);
                                    }
                                }
                            }
                        >
                            {playersSumChoice.map((element, index) => {
                                return <MenuItem key={index} value={element}>{element}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{GameFormConfig.NUMBER_OF_BALLS}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.sumBalls}
                            label={GameFormConfig.NUMBER_OF_BALLS}
                            onChange={
                                e => {
                                    props.setBalls(e.target.value);
                                }
                            }
                        >
                            {ballsSumChoice.map((element, index) => {
                                return <MenuItem key={index} value={element}>{element}</MenuItem>
                            })}


                        </Select>
                    </FormControl>
                </Box>
                <div className="formLinks">
                    <Button component={Link} to={"/RandomNumber"} variant="contained" color="inherit">{GameFormConfig.SHUFFLE_BUTTON}</Button>
                    <Button component={Link} to={"/"} variant="contained" color="inherit">{GameFormConfig.BACK_BUTTON}</Button>
                </div>
            </div>
        </div>
    );
}
