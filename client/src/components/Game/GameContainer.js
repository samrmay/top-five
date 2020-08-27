import React from 'react'
import GamePrompt from './GamePrompt'
import GameCat from './GameCat'
import GameFetchPromptButton from './GameFetchPromptButton'
import TopicRankContainer from './TopicRank/TopicRankContainer.js'
import './game.css'


class GameContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cat: 'music',
            topic: {},
            displayAns: false
        }
        this.setCat = this.setCat.bind(this)
        this.displayAnsSwitch = this.displayAnsSwitch.bind(this)
        this.fetchTopic = this.fetchTopic.bind(this)
    }

    componentDidMount () {
        this.fetchTopic()
    }

    setCat(event) {
        const newCat = event.target.value
        this.setState({cat: newCat})
        // Delay fetching topic until state of component is updated (necessary I think)
        setTimeout(this.fetchTopic, 10)
    }

    fetchTopic() {
        if (this.state.displayAns) {this.displayAnsSwitch()}
        const cat = this.props.dataset[this.state.cat]
        let newTopic = cat[Math.floor(Math.random() * cat.length)]
        while (this.state.topic === newTopic) {
            newTopic = cat[Math.floor(Math.random() * cat.length)]
        }
        this.setState({topic: newTopic})
    }

    displayAnsSwitch() {
        this.setState((prevState) => {
            return({displayAns: !prevState.displayAns})
        })
    }

    render() {
        return(
            <div className='game-container'>
                <GameCat setCat={this.setCat} fetchTopic={this.fetchTopic} cat={this.state.cat}/>
                <div className='game-body'>
                    <div className='topic-rank-container-balance' />
                    <GamePrompt 
                        topic={this.state.topic}
                        displayAns={this.state.displayAns} 
                        displayAnsSwitch={this.displayAnsSwitch}/>
                    <TopicRankContainer
                        topic={this.state.topic}/>
                </div>
                <GameFetchPromptButton fetchTopic={this.fetchTopic}/>
            </div>
        )
    }
}

export default GameContainer