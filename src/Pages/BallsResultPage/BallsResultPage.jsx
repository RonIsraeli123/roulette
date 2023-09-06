import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';

import generateBalls from '../../algorithm/generateBalls'
import { setPlayerBallsResult } from '../../redux/slices/gameSlice';
import { GameNavbar, PlayersTabPanel, BallsTapPanel } from './components'


export const BallsResultPage = () => {
    const dispatch = useDispatch();

    const numPlayer = useSelector((state) => state.game.gameData['numPlayer']);
    const numBalls = useSelector((state) => state.game.gameData['numBalls']);

    useEffect(() => {
        dispatch(setPlayerBallsResult(generateBalls(numPlayer, numBalls)));
    }, [dispatch, numBalls, numPlayer]);

    const [show, setShow] = useState(false)
    const [value, setValue] = useState(0);

    return (
        <div className='ballsResult'>

            <Box sx={{ width: '100vw' }}>
                <GameNavbar setShow={setShow} />
                <PlayersTabPanel value={value} setValue={setValue} setShow={setShow} />
                <BallsTapPanel value={value} show={show} setShow={setShow} />
            </Box >
        </div>
    );
}
