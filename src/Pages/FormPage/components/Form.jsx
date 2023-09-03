import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { setNumPlayer, setNumBalls } from '../../../redux/slices/gameSlice';


import { Config, GameFormConfig } from '../../../config'

const validation = (players) => {
    if (players > Config.MAX_PLAYERS || players < Config.MIN_PLAYERS) {
        return false;
    }
    return true;
}

export const Form = () => {
    const dispatch = useDispatch();

    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);
    const numBalls = useSelector((state) => state.game.gameData['numBalls']);

    return (
        <div className="GameForm">
            <div className='form'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{GameFormConfig.NUMBER_OF_PLAYERS}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={numPlayer}
                            label={GameFormConfig.NUMBER_OF_PLAYERS}
                            onChange={
                                e => {
                                    if (validation(e.target.value)) {
                                        dispatch(setNumPlayer(e.target.value));
                                    } else {
                                        e.target.value = numPlayer;
                                        alert(GameFormConfig.PLAYERS_ALERT_MESSAGE_TEXT);
                                    }
                                }
                            }
                        >
                            {GameFormConfig.PLAYER_NUMBER.map((element, index) => {
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
                            value={numBalls}
                            label={GameFormConfig.NUMBER_OF_BALLS}
                            onChange={
                                e => {
                                    dispatch(setNumBalls(e.target.value));
                                }
                            }
                        >
                            {GameFormConfig.BALLS_NUMBER.map((element, index) => {
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
