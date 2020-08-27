import React from 'react'
import './game.css'

class GamePrompt extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let popAnswerFormatted = 'Answer loading...'
        if (Object.keys(this.props.topic).length !== 0) {
            popAnswerFormatted = this.props.topic.popAnswer.map((answer) => <li><h4>{answer}</h4></li>)
        }
        return(
            <div className='game-prompt' onClick={this.props.displayAnsSwitch}>
                <h3 className='game-topic-header'>Top Five:</h3><hr style={{width: '100%'}}/> 
                {this.props.displayAns
                ? <ol className='game-answer'>{popAnswerFormatted}</ol> 
                : <div className='game-topic'>
                        <h3 className='game-topic-content'>{this.props.topic.prompt}</h3>
                    </div>}
            </div>
        )
    }
}

export default GamePrompt