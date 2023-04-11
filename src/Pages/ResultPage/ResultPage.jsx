import React from 'react'
import { BallsResult } from './components/BallsResult'

export const ResultPage = (props) => {
    return (
        <div className='ballsResult'>
            <BallsResult result={props.result} setResult={props.setResult} players={props.players} sumBalls={props.sumBalls} />
        </div>
    )
}
