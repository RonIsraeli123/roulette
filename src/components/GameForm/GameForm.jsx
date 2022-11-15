import React from 'react';
import LinkButton from '../General/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Config } from '../../config'

const validtion = (players) => {
    if (players > Config.MAX_PLAYERS || players < Config.MIN_PLAYERS) {
        return false;
    }
    return true;
}

const validtionBalss = (sumBalls) => {

    if (sumBalls > Config.MAX_BALLS || sumBalls < Config.MIN_BALLS) {
        return false;
    }
    return true;
}
const playersSumChoice = [2, 3, 4, 5]
const ballsSumChoice = [1, 2, 3]

export const GameForm = (props) => {
    return (
        <div className="GameForm">
            <div className='form'>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">כמות שחקנים</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.players}
                            label="כמות שחקנים"
                            onChange={
                                e => {
                                    if (validtion(e.target.value)) {
                                        props.setPlayers(e.target.value);
                                    } else {
                                        e.target.value = props.players;
                                        alert("מספר המשתתפים צריך להיות גדול מ2 וקטן מ5");
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
                        <InputLabel id="demo-simple-select-label">כמות כדורים לשחקן</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={props.sumBalls}
                            label="כמות כדורים לשחקן"
                            onChange={
                                e => {
                                    if (validtionBalss(e.target.value)) {
                                        props.setBalls(e.target.value);
                                    } else {
                                        e.target.value = props.sumBalls;
                                        alert("כמות הכדורים חייבת להיות בין 1 ל 3 ");
                                    }
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
                    <LinkButton enabled={validtion(props.players)} route="/RandomNumber" text="הגרל!"></LinkButton>
                </div>
            </div>
        </div>
    );
}
