import React from 'react';
import LinkButton from '../General/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Validtion = (players) => {
    if (players > 5 || players < 2) {
        return false;
    }
    return true;
}

const ValidtionBalss = (sumBalls) => {

    if (sumBalls > 3 || sumBalls < 1) {
        return false;
    }
    return true;
}

export const Game = (props) => {
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
                                    if (Validtion(e.target.value)) {
                                        props.setPlayers(e.target.value);
                                    } else {
                                        e.target.value = props.players;
                                        alert("מספר המשתתפים צריך להיות גדול מ2 וקטן מ5");
                                    }
                                }
                            }
                        >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>

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
                                    if (ValidtionBalss(e.target.value)) {
                                        props.setBalls(e.target.value);
                                    } else {
                                        e.target.value = props.sumBalls;
                                        alert("כמות הכדורים חייבת להיות בין 1 ל 3 ");
                                    }
                                }
                            }
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>

                        </Select>
                    </FormControl>
                </Box>
                <div className="center">
                    <LinkButton enabled={Validtion(props.players)} route="/RandomNumber" text="הגרל!"></LinkButton>
                </div>
            </div>
        </div>
    );
}
