import React from 'react'

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import RefreshIcon from '@mui/icons-material/Refresh';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Button from '@mui/material/Button';

import { NavBarConfig } from '../../../config'
import { setPlayerBallsResult } from '../../../redux/slices/gameSlice';
import generateBalls from '../../../algorithm/generateBalls'

export const GameNavbar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);
    const numBalls = useSelector((state) => state.game.gameData['numBalls']);

    return (
        <div className='navbarEnd' >
            <Button className='ButtonNav' variant="outlined" onClick={() => { navigate('/Form') }} endIcon={<CompareArrowsIcon />}>
                {NavBarConfig.GO_BACK}
            </Button>
            <Button className='ButtonNav' variant="outlined" onClick={() => { dispatch(setPlayerBallsResult((generateBalls(numPlayer, numBalls)))); props.setShow(false) }} endIcon={<RefreshIcon />}>
                {NavBarConfig.RESHUFFLE}
            </Button >
            <Button className='ButtonNav' variant="outlined" onClick={() => { navigate('/') }} endIcon={<MenuBookIcon />}>
                {NavBarConfig.PASS_TO_RULES}
            </Button>
        </div >
    )
}
