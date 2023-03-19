import React from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const ShareButton = (props) => {

    const generateToText = () => {
        let message = `*players and balls- :*\n`;
        props.result.forEach(playerBalls => {
            message += `player number - *${playerBalls[0]}*: *${playerBalls[1][1]}* \n`;
        });
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }


    return (
        <div className='share'>
            <TextField id="standard-basic" label="Phone Number" variant="standard" />
            <Button className='byOrderButton' color="success" variant="contained" onClick={generateToText} endIcon={<WhatsAppIcon style={{ marginRight: "5px" }}></WhatsAppIcon>}>
                Share
            </Button>
        </div >
    )
}
