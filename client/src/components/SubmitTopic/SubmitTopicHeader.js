import React from 'react'

function SubmitTopicHeader(props) {
    let headerStyleText = {style: {color: 'black'},text: 'Submit below!'}
    if (Number(props.topicSubmittedResponse) === 201) {
        headerStyleText = {style: {color: 'black'}, text: 'Topic submitted!'}
    } else if (Number(props.topicSubmittedResponse) === -1) {
        headerStyleText = {style: {color: 'crimson'}, text: 'Loading...'}
    }
    return(
        <div className='submit-topic-header-container'>
            <h3 className='submit-topic-header'>Have an idea for a new topic?</h3><br/>
            <h3 className='submit-topic-header' style={headerStyleText.style}>{headerStyleText.text}</h3>
        </div>
    )
}

export default SubmitTopicHeader