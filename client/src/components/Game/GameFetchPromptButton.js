import React from 'react'
import Button from '@material-ui/core/Button'
import './game.css'

function GameFetchPromptButton(props) {
    return(
        <div className='game-fetch-prompt-button'>
            <Button 
                onClick={props.fetchTopic}
                variant='contained'
                color='primary'>
                New Top Five
            </Button>
        </div>
    )
}

export default GameFetchPromptButton