import React from 'react'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useSelector, useDispatch } from 'react-redux';

import { setNumBalls } from '../../../redux/slices/gameSlice';
import { GameFormConfig } from '../../../config'

export const BallsInput = () => {
    const dispatch = useDispatch();

    const numBalls = useSelector((state) => state.game.gameData['numBalls']);

    return (
        <div>
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
        </div>
    )
}
