import React from 'react'
import './TopicRank.css'

function TopicRankUpvote(props) {
    return(
        <div className='topic-rank-upvote-container'>
            <div 
                className='topic-rank-upvote'
                name='isUpvoted'
                onClick={props.handleChange}
                style={props.isUpvoted ? {backgroundColor: 'red'} : null}
                >
                Upvote
            </div>
        </div>
    )
}




export default TopicRankUpvote