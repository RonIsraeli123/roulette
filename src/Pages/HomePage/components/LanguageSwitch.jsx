import React, { useState } from 'react'

import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';

import { useDispatch } from 'react-redux';

import { setLanguage } from '../../../redux/slices/languageSlice';

export const LanguageSwitch = () => {
    const hebrew_text = "Hebrew"
    const english_text = "English"

    const [isChecked, setIsChecked] = useState(true)

    const dispatch = useDispatch();

    const changeLanguage = (is_hebrew) => {
        if (is_hebrew) {
            dispatch(setLanguage("hebrew"));
        }
        else {
            dispatch(setLanguage("english"));

        }
    }

    return (
        <div className='translate-page'>
            <Stack className='translate-component' direction="row" spacing={1} alignItems="center" justifyContent="center" margin="1em">
                <Typography >{hebrew_text}</Typography>
                <Switch onChange={(e) => { setIsChecked(!isChecked); changeLanguage(e.target.checked) }} checked={isChecked} inputProps={{ 'aria-label': 'ant design' }} />
                <Typography>{english_text}</Typography>
            </Stack>
        </div>
    )
}
