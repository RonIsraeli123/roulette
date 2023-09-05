import React from 'react'

import Ball from '../../General/Ball';


export const BallsView = (props) => {
    return (
        <div className='balls'>
            {props.item.map((ballNumberColor, index) => {
                return <Ball key={index} ballValue={ballNumberColor[0]} color={ballNumberColor[1]} />
            })}
        </div>
    )
}
