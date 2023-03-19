import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Link } from 'react-router-dom';

import { Config, GaneFormConfig } from '../../config'
import returnNumbers from '../../algo/algo'

const validtion = (players) => {
    if (players > Config.MAX_PLAYERS || players < Config.MIN_PLAYERS) {
        return false;
    }
    return true;
}


const playersSumChoice = [2, 3, 4, 5]
const ballsSumChoice = [1, 2, 3]

export const GameForm = (props) => {
    const calcBalls = () => {
        props.setResult(returnNumbers(props.players, props.sumBalls))
    }

    return (
        <div className="GameForm">
            <div className='form'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{GaneFormConfig.NUMBER_OF_PLAYERS}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.players}
                            label={GaneFormConfig.NUMBER_OF_PLAYERS}
                            onChange={
                                e => {
                                    if (validtion(e.target.value)) {
                                        props.setPlayers(e.target.value);
                                    } else {
                                        e.target.value = props.players;
                                        alert(GaneFormConfig.PLAYERS_ALERT_MESSAGE_TEXT);
                                    }
                                }
                            }
                        >
                            {playersSumChoice.map((element) => {
                                return <MenuItem value={element}>{element}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{GaneFormConfig.NUMBER_OF_BALLS}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.sumBalls}
                            label={GaneFormConfig.NUMBER_OF_BALLS}
                            onChange={
                                e => {
                                    props.setBalls(e.target.value);
                                }
                            }
                        >
                            {ballsSumChoice.map((element) => {
                                return <MenuItem value={element}>{element}</MenuItem>
                            })}


                        </Select>
                    </FormControl>
                </Box>
                <div className="center">
                    <Button onClick={() => calcBalls()} component={Link} to={"/RandomNumber"} variant="contained" color="inherit">{GaneFormConfig.SHUFFLE_BUTTON}</Button>
                </div>
            </div>
        </div>
    );
}
