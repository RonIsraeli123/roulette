import React from 'react';

import { RouteButtons } from './components/RouteButtons'
import { PlayerInput } from './components/PlayerInput'
import { BallsInput } from './components/BallsInput'


export const FormPage = () => {

    return (
        <div className="GameForm">
            <div className='form'>
                <PlayerInput />
                <BallsInput />
                <RouteButtons />
            </div>
        </div>
    );
}
