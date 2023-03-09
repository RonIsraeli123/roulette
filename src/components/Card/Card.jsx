import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import BasicButtons from '../General/Button'
import { HomeCardConfig } from '../../config'
import Snoker from "../../images/snoker.jpg"

export const HomeCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={Snoker}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom align="center" variant="h5" component="div">
                        {HomeCardConfig.TITLE}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h3>{HomeCardConfig.INIT_TITLE}</h3>
                        <p> {HomeCardConfig.INIT_EXPLANATION}</p>

                        <h3>{HomeCardConfig.SUBTITLE2}</h3>
                        <ul>
                            <li>{HomeCardConfig.SUBTITLE2_POINT1}</li>
                            <li>{HomeCardConfig.SUBTITLE2_POINT2}</li>
                        </ul>

                    </Typography>
                </CardContent>
            </CardActionArea>
            <div className='center'>
                <BasicButtons route="/game" text={HomeCardConfig.START_BUTTON_TEXT}></BasicButtons>
            </div>
        </Card>
    );
}
