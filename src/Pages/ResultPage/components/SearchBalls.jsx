import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const SearchBalls = (props) => {
    const [ballNumber, setBallNumber] = useState('')

    const alertPlayerOwner = () => {
        if (ballNumber > 15 || ballNumber < 1) {
            alert(`${ballNumber} ball number invalid!`)
            return
        }
        const playerNumber = getBallsOwner()
        if (playerNumber !== -1) {
            alert(`The ${ballNumber} ball belongs to player number ${playerNumber}`)
        }
        else {
            alert(`The ${ballNumber} ball doesn't belong to any player`)
        }
    }

    const getBallsOwner = () => {
        for (let index = 0; index < props.result.length; index++) {
            let playerBalls = []
            props.result[index].forEach(element => {
                playerBalls.push(element[0])
            });
            if (playerBalls.includes(parseInt(ballNumber))) {
                return index + 1
            }
        }
        return -1
    }

    return (
        <div className='search-balls'>
            <TextField id="filled-basic" label="Ball Number" type='number' variant="filled" onChange={(e) => setBallNumber(e.target.value)} />
            <Button variant="contained" onClick={() => alertPlayerOwner()}>Search</Button>
        </div>
    )
}
