import React from 'react'
import SubmitTopicHeader from './SubmitTopicHeader'
import SubmitTopicForm from './SubmitTopicForm'

class SubmitTopicContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            topicSubmissionField: '',
            categorySubmissionField: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit() {
        // HOOK UP TO DATABASE ONCE DONE (CURRENT STATE DATA SHOULD BE ADDED TO DB)
        console.log('Data (kind of) submitted:', this.state.categorySubmissionField, this.state.topicSubmissionField)
        this.setState({topicSubmissionField: '', categorySubmissionField: ''})
    }

    render() {
        return(
            <div className='submit-topic-container'>
                <SubmitTopicHeader />
                <SubmitTopicForm 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    fieldValues={{
                        topicSubmissionField: this.state.topicSubmissionField, 
                        categorySubmissionField: this.state.categorySubmissionField}}/>
            </div>
        )
    }
}

export default SubmitTopicContainer