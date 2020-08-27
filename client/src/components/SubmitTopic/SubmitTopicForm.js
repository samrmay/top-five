import React from 'react'
import './SubmitTopic.css'
import Button from '@material-ui/core/Button'

function SubmitTopicForm (props) {
    return(
        <div className='submit-topic-form-container'>
            <form className='submit-topic-form'>
                <input
                    name='categorySubmissionField'
                    onChange={props.handleChange}
                    className='topic-submission-field'
                    placeholder='Category'
                    value={props.fieldValues.categorySubmissionField}
                /><br/>

                <input 
                    name='topicSubmissionField'
                    onChange={props.handleChange} 
                    className='topic-submission-field'
                    placeholder='Topic'
                    value={props.fieldValues.topicSubmissionField}
                /><br/>

                <Button variant='contained' color='primary' onClick={props.handleSubmit}> Submit </Button>
            </form>
        </div>
    )
}

export default SubmitTopicForm