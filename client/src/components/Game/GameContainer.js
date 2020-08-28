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
            cat: null,
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

    async setCat(event) {
        console.log('Loading cat')
        const newCat = (await fetch(process.env.backendUrl + 'cats', {
            body: JSON.stringify(event.target.value)
        })).json()
        console.log('cat loaded')
        this.setState({cat: newCat})
        // Delay fetching topic until state of component is updated (necessary I think)
        setTimeout(this.fetchTopic, 10)
    }

    async fetchTopic() {
        if (this.state.displayAns) {this.displayAnsSwitch()}
        const cat = this.state.cat
        let newTopicId = cat.topics[Math.floor(Math.random() * cat.topics.length)]
        while (String(this.state.topic._id) === String(newTopicId)) {
            newTopicId = cat.topics[Math.floor(Math.random() * cat.topics.length)]
        }
        console.log('loading topic')
        const newTopic = await fetch(process.env.backendUrl + `topics/${newTopicId}`)
        console.log('topic loaded')
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