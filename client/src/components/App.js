import React from 'react'
import GameContainer from './Game/GameContainer'
import Header from './Header'
import './style.css'
import topFiveTopics from '../data/topFiveTopics.js'
import SubmitTopicContainer from './SubmitTopic/SubmitTopicContainer'


function App(props) {
    return(
        <div className='root'>
            <Header />
            <GameContainer dataset={topFiveTopics}/><hr className='game-submittopic-divider' />
            <div className='submission-container'>
                <SubmitTopicContainer />
            </div>
        </div>
    )
}

export default App