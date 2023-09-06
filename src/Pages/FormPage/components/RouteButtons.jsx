import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { GameFormConfigEnglish, GameFormConfigHebrew } from '../../../config'

import Button from '@mui/material/Button';
export const RouteButtons = () => {
    const languageType = useSelector((state) => state.language.languageType);

    const configText = languageType === "hebrew" ? GameFormConfigHebrew : GameFormConfigEnglish

    return (
        <div className="formLinks">
            <Button component={Link} to={"/RandomNumber"} variant="contained" color="inherit">{configText.SHUFFLE_BUTTON}</Button>
            <Button component={Link} to={"/"} variant="contained" color="inherit">{configText.BACK_BUTTON}</Button>
        </div>
    )
}
