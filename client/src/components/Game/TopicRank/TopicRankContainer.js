import React from 'react'
import TopicRankUpvote from './TopicRankUpvote'
import TopicRankDownvote from './TopicRankDownvote'

class TopicRankContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isUpvoted: false,
            isDownvoted: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const name = event.target.getAttribute('name')
        this.setState((prevState) => {
            return {[name]: !prevState[name]}
        })
        setTimeout(() => {
            if (this.state.isUpvoted === true && this.state.isDownvoted === true) {
                name === 'isUpvoted' ? this.setState({isDownvoted: false}) : this.setState({isUpvoted: false})
            }
        }, 5)
    }

    render() {
        return (
            <div className='topic-rank-container'>
                <TopicRankUpvote handleChange={this.handleChange} isUpvoted={this.state.isUpvoted}/>
                <hr className='topic-rank-divider' />
                <TopicRankDownvote handleChange={this.handleChange} isDownvoted={this.state.isDownvoted}/>
            </div>
        )
    }
}

export default TopicRankContainer