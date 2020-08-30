import React from 'react'
import GameContainer from './Game/GameContainer'
import Header from './Header'
import './style.css'
import SubmitTopicContainer from './SubmitTopic/SubmitTopicContainer'


function App(props) {
    return(
        <div className='root'>
            <Header />
            <GameContainer /><hr className='game-submittopic-divider' />
            <div className='submission-container'>
                <SubmitTopicContainer />
            </div>
        </div>
    )
}

export default App