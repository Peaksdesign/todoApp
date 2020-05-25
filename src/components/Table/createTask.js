import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import * as api from 'api/APIUtils'

class CreateTask extends Component {
    state = {
        description: ''
    }

    async handleCreate(){
        if( this.state.description == '' ){
            const notification = this.props.notificationSystem.current;
            notification.addNotification({
                message: 'Can not create empty task.',
                level: 'error',
                position: 'tc'
            });
            return
        }
        const result = await api.createItem(this.state.description)
            .then(response => {
                if(response.status === 201) {
                    const notification = this.props.notificationSystem.current;
                    notification.addNotification({
                        message: 'Task created successfully.',
                        level: 'success',
                        position: 'tc'
                    });
                    return response.json()
                } else throw new Error('Network response was not ok.');
            }).catch((error) => {
                const notification = this.props.notificationSystem.current;
                notification.addNotification({
                  message: 'There has been a problem with your fetch operation: ' + error.message,
                  level: 'error',
                  position: 'tc'
                });
            })
        
            
        { result && 
            this.props.createTask(result)
            this.setState({description: ''})
        }
        
    }

    handleChange = (event) => {
        this.setState({ description: event.target.value })
    }

    render(){
        return (
            <>
                <input type="text" name="description" value={this.state.description} placeholder="New Task" onChange={this.handleChange} />
                <Button variant="success" onClick={() => this.handleCreate()}>Create new task</Button>
            </>
        )
    }
}

export default CreateTask;