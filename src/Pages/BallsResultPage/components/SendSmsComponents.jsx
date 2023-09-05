import React, { useState } from 'react'

import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { sendMessage } from '../../../algorithm/sendMessage'

export const SendSmsComponent = (props) => {
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const playerBallsResult = useSelector((state) => state.game.gameData['playerBallsResult']);

    const sendSMS = (playerIndex) => {
        if (isValidPhoneNumber(userPhoneNumber)) {
            let playerBalls = []
            const playerData = playerBallsResult[playerIndex]
            for (let index = 0; index < playerData.length; index++) {
                const ballData = playerData[index];
                playerBalls.push(ballData[0])
            }
            sendMessage(userPhoneNumber, `\n ***YOUR BALLS NUMBERS ARE - ${playerBalls}***`)
        }
        else {
            alert("Invalid number")
        }
        setUserPhoneNumber('')
    }
    return (
        <div className='send_sms'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PhoneInput
                    defaultCountry="IL"
                    placeholder="Enter phone number"
                    value={userPhoneNumber}
                    onChange={setUserPhoneNumber} />
            </Box>
            <Button variant="contained" onClick={() => { sendSMS(props.index) }}>send sms</Button>
        </div>
    )
}
