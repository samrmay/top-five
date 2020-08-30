import React from 'react'
import SubmitTopicHeader from './SubmitTopicHeader'
import SubmitTopicForm from './SubmitTopicForm'
import './SubmitTopic.css'
require("regenerator-runtime/runtime")


class SubmitTopicContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            categorySubmissionField: '',
            topicSubmissionField: '',
            popAnswer: ['', '', '', '', ''],
            topicSubmittedResponse: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePopAnswer = this.handlePopAnswer.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit() {
        this.setState({topicSubmittedResponse: -1})
        fetch(process.env.backendUrl + 'topics', {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                catName: this.state.categorySubmissionField,
                prompt: this.state.topicSubmissionField,
                popAnswer: this.state.popAnswer

            })
        })
        .then(response => {
            console.log(response.status)
            this.setState({topicSubmittedResponse: response.status})
        })
        this.setState({topicSubmissionField: '', categorySubmissionField: '', popAnswer: ['', '', '', '', '']})
    }

    handlePopAnswer(event) {
        const {name, value} = event.target
        this.setState((prevState) => {
            const newPopAnswer = prevState.popAnswer.map((item, index) => {
                return (index === Number(name) ? value : item)})
            return ({popAnswer: newPopAnswer})
        })
    }

    render() {
        return(
            <div className='submit-topic-container'>
                <SubmitTopicHeader topicSubmittedResponse={this.state.topicSubmittedResponse}/>
                <SubmitTopicForm 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSubmit}
                    handlePopAnswer={this.handlePopAnswer}
                    fieldValues={{
                        topicSubmissionField: this.state.topicSubmissionField, 
                        categorySubmissionField: this.state.categorySubmissionField,
                        popAnswer: this.state.popAnswer}}/>
            </div>
        )
    }
}

export default SubmitTopicContainer