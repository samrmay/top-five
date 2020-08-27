import React from 'react'

function TopicRankDownvote(props) {
    return(
        <div className='topic-rank-downvote-container'>
            <div className='topic-rank-downvote' 
                onClick={props.handleChange}
                name='isDownvoted'
                style={props.isDownvoted ? {backgroundColor: 'blue'} : null}>
                Downvote
            </div>
        </div>
    )
}

export default TopicRankDownvote