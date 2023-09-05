import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const RouteButton = (props) => {
    return (
        <Stack spacing={2} direction="row">
            <Button component={Link} to={props.route} variant="contained" color="inherit">
                {props.text}
            </Button>
        </Stack>
    );
}
export default RouteButton
