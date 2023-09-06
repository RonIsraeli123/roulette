import React, { useState } from 'react'

import { useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { ResultPageConfigEnglish, ResultPageConfigHebrew } from '../../../config'

export const SearchBalls = () => {
    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? ResultPageConfigHebrew : ResultPageConfigEnglish

    const playerBallsResult = useSelector((state) => state.game.gameData['playerBallsResult']);

    const [ballNumber, setBallNumber] = useState('')

    const alertPlayerOwner = () => {
        if (ballNumber > 15 || ballNumber < 1) {
            alert(`${ballNumber} ball number invalid!`)
            return
        }
        const playerNumber = getBallsOwner()
        if (playerNumber !== -1) {
            alert(`${ballNumber} ball number belongs to player number ${playerNumber}`)
        }
        else {
            alert(`${ballNumber} ball number doesn't belong to any player`)
        }
    }

    const getBallsOwner = () => {
        for (let index = 0; index < playerBallsResult.length; index++) {
            let playerBalls = []
            playerBallsResult[index].forEach(element => {
                playerBalls.push(element[0])
            });
            if (playerBalls.includes(parseInt(ballNumber))) {
                return index + 1
            }
        }
        return -1
    }

    return (

        <div className='search_ball'>
            <TextField id="filled-basic" label={configText.SEARCH_INPUT_TEXT} type='number' variant="filled" onChange={(e) => setBallNumber(e.target.value)} />
            <Button variant="contained" onClick={() => alertPlayerOwner()}>{configText.SEARCH_BUTTON_TEXT}</Button>
        </div>
    )
}
