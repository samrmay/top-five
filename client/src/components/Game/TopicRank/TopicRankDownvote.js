import React from 'react'
import downvoteImgActive from '../../../resources/arrow-down-active.svg'
import downvoteImgDeactive from '../../../resources/arrow-down-deactive.svg'

function TopicRankDownvote(props) {
    return(
        <div className='topic-rank-downvote-container'>
            <img className='topic-rank-downvote' 
                onClick={props.handleChange}
                name='isDownvoted'
                src={props.isDownvoted ? downvoteImgActive : downvoteImgDeactive}
                />
        </div>
    )
}

export default TopicRankDownvote