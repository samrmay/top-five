import React from 'react'
import './TopicRank.css'
import upvoteImgActive from '../../../resources/arrow-up-active.svg'
import upvoteImgDeactive from '../../../resources/arrow-up-deactive.svg'

function TopicRankUpvote(props) {
    return(
        <div className='topic-rank-upvote-container'>
            <img
                className='topic-rank-upvote'
                name='isUpvoted'
                onClick={props.handleChange}
                src={props.isUpvoted ? upvoteImgActive : upvoteImgDeactive}
                />
        </div>
    )
}




export default TopicRankUpvote