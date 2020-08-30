import React from 'react'
import GamePrompt from './GamePrompt'
import GameCat from './GameCat'
import GameFetchPromptButton from './GameFetchPromptButton'
import TopicRankContainer from './TopicRank/TopicRankContainer.js'
require("regenerator-runtime/runtime")

class GameContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cat: '',
            catsOptions: [],
            topic: {},
            displayAns: false
        }
        this.setCat = this.setCat.bind(this)
        this.displayAnsSwitch = this.displayAnsSwitch.bind(this)
        this.fetchPrompt = this.fetchPrompt.bind(this)
    }

    componentDidMount () {
        fetch(process.env.backendUrl + "cats", {
            "method": "GET",
            "headers": {
                "Accept": "*/*"
            }
        })
        .then(response => response.json())
        .then(response => this.setState({catsOptions: response}))
        .catch((er) => {console.log(er)})
    }

    setCat(event) {
        this.setState({cat: this.state.catsOptions[event.target.value]})
        setTimeout(this.fetchPrompt, 200)
    }

    fetchPrompt () {
        this.state.displayAns && this.displayAnsSwitch()
        const lastTopicId = this.state.topic ? this.state.topic._id : 0
        this.setState({topic: {
            prompt: 'Loading...',
            popAnswer: ['Loading...', 'Loading...', 'Loading...', 'Loading...', 'Loading...']
        }})
        let newTopicId = this.state.cat.topics[Math.floor(Math.random() * this.state.cat.topics.length)]
        while (newTopicId === lastTopicId) {
            newTopicId = this.state.cat.topics[Math.floor(Math.random() * this.state.cat.topics.length)]
        }
        fetch(process.env.backendUrl + `/topics/${newTopicId}`)
        .then(response => response.json())
        .then(response => this.setState({topic: response}))
        .catch((er) => (console.log(er)))
    }

    displayAnsSwitch() {
        this.setState((prevState) => {
            return({displayAns: !prevState.displayAns})
        })
    }

    render() {
        return(
            <div className='game-container'>
                <GameCat setCat={this.setCat} 
                    cat={this.state.cat} 
                    catsOptions={this.state.catsOptions}/>
                <div className='game-body'>
                    <div className='topic-rank-container-balance' />
                    <GamePrompt 
                        topic={this.state.topic}
                        displayAns={this.state.displayAns} 
                        displayAnsSwitch={this.displayAnsSwitch}/>
                    <TopicRankContainer
                        topic={this.state.topic}/>
                </div>
                <GameFetchPromptButton fetchPrompt={this.fetchPrompt}/>
            </div>
        )
    }
}

export default GameContainer