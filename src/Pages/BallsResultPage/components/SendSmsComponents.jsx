import React, { useState } from 'react'

import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ResultPageConfigEnglish, ResultPageConfigHebrew } from '../../../config'
import { sendMessage } from '../../../algorithm/sendMessage'

export const SendSmsComponent = (props) => {
    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? ResultPageConfigHebrew : ResultPageConfigEnglish

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
            sendMessage(userPhoneNumber, `***\n ${configText.SEND_MSG_TEXT} - ${playerBalls}\n ***`)
        }
        else {
            alert(configText.ALERT_INVALID_BALL_NUMBER)
        }
        setUserPhoneNumber('')
    }
    return (
        <div className='send_sms'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <PhoneInput
                    defaultCountry="IL"
                    placeholder={configText.SEND_MSG_PLACEHOLDER}
                    value={userPhoneNumber}
                    onChange={setUserPhoneNumber} />
            </Box>
            <Button variant="contained" onClick={() => { sendSMS(props.index) }}>{configText.SEND_MSG_BUTTON_TEXT}</Button>
        </div>
    )
}
