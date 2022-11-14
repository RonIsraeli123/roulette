import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const BasicButtons = (props) => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text"><Link to={props.route}> {props.text} </Link></Button>
        </Stack>
    );
}
export default BasicButtons
