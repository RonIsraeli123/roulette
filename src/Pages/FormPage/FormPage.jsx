import React from 'react'

import { Form } from './components/Form'

export const FormPage = (props) => {
    return (
        <div>
            <Form
                numPlayers={props.numPlayers}
                sumBalls={props.sumBalls}
                setNumPlayers={(n) => props.setNumPlayers(n)}
                setBalls={(n) => props.setSumBalls(n)}
                setResult={(n) => props.setResult(n)}
            />
        </div>
    )
}
