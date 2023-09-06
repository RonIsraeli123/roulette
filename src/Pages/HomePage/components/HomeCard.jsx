import React from 'react';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { useSelector } from 'react-redux';

import RouteButton from '../../General/RouteButton'
import { LanguageSwitch } from './LanguageSwitch'

import { HomeCardConfigHebrew, HomeCardConfigEnglish } from '../../../config'
import Snooker from "../../../images/Snooker.jpg"

export const HomeCard = () => {
    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? HomeCardConfigHebrew : HomeCardConfigEnglish

    return (
        <div>
            <LanguageSwitch />
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Snooker}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom align="center" variant="h5" component="div">
                            {configText.TITLE}
                        </Typography>
                        <Typography component={'span'} variant="body2" color="text.secondary">
                            <h3>{configText.INIT_TITLE}</h3>
                            <Typography> {configText.INIT_EXPLANATION}</Typography>

                            <h3>{configText.SUBTITLE2}</h3>
                            <ul>
                                <li>{configText.SUBTITLE2_POINT1}</li>
                                <li>{configText.SUBTITLE2_POINT2}</li>
                            </ul>

                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div className='center'>
                    <RouteButton route="/Form" text={configText.START_BUTTON_TEXT}></RouteButton>
                </div>
            </Card>
        </div>
    );
}
