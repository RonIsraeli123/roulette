import React from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useSelector, useDispatch } from 'react-redux';

import { setNumPlayer } from '../../../redux/slices/gameSlice';
import { Config, GameFormConfig } from '../../../config'


export const PlayerInput = () => {
    const dispatch = useDispatch();

    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);


    const validation = (players) => {
        if (players > Config.MAX_PLAYERS || players < Config.MIN_PLAYERS) {
            return false;
        }
        return true;
    }
    return (
        <div>
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
        </div>
    )
}
