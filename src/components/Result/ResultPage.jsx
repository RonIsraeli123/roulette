import React from 'react'
import { BallsResult } from './BallsResult'
// import { ShareButton } from '../WahtappShare/ShareButton'

export const ResultPage = (props) => {
    return (
        <div>
            <div className='ballsResult'>
                <BallsResult result={props.result} setResult={props.setResult} players={props.players} sumBalls={props.sumBalls} />
                {/* <div className="left-down">
                    <ShareButton result={props.result} />
                    </div> */}
            </div>
        </div>
    )
}
