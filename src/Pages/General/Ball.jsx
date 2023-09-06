import * as React from 'react';
import Chip from '@mui/material/Chip';

const Ball = (props) => {
    return (
        <div key={props.index} className='outsideBall' style={{ backgroundColor: props.color }}>
            {props.ballValue > 8 ?
                <Chip
                    style={{ backgroundColor: 'white' }}
                    label={props.ballValue}
                /> :
                <Chip
                    className='insideBall'
                    style={{ backgroundColor: props.color, color: 'white' }}
                    label={props.ballValue}
                />
            }
        </div>
    );
}
export default Ball;
