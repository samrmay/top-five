import React from 'react'

function SubmitTopicHeader(props) {
    return(
        <div className='submit-topic-header-container'>
            <h3 className='submit-topic-header'>Have an idea for a new topic?</h3><br/>
            {(Number(props.topicSubmittedResponse) === 201)
            ? <h3 className='submit-topic-header-success'>Topic submitted!</h3>
            : <h3 className='submit-topic-header'>Submit below!</h3>}
        </div>
    )
}

export default SubmitTopicHeader