import React from 'react'
import { Link } from 'react-router-dom';
import { GameFormConfig } from '../../../config'

import Button from '@mui/material/Button';
export const RouteButtons = () => {
    return (
        <div className="formLinks">
            <Button component={Link} to={"/RandomNumber"} variant="contained" color="inherit">{GameFormConfig.SHUFFLE_BUTTON}</Button>
            <Button component={Link} to={"/"} variant="contained" color="inherit">{GameFormConfig.BACK_BUTTON}</Button>
        </div>
    )
}
