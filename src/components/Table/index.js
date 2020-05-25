import React, { Component } from 'react';
import Datatable from 'react-bs-datatable'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Space from 'components/Space'
import CreateTask from 'components/Table/createTask'
import * as api from 'api/APIUtils'

class Table extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            data: ''
        }
    }

    async componentDidMount() {
        const data = await api.getList().then(data => data)
        this.setState({ data: data })
    }

    handleCreate = (data) => {
        this.setState({
            data: [
                ...this.state.data,
                data
            ]
        })
    }

    async handleDelete(rowNumber){        
        await api.deleteItem()
            .then(response => {
                if(response.status === 204) {
                    this.setState({
                        data: this.state.data.filter(item => item.id != rowNumber)
                    })
                    const notification = this.props.notificationSystem.current;
                    notification.addNotification({
                        message: 'Task deleted successfully.',
                        level: 'success',
                        position: 'tc'
                    });
                } else throw new Error('Network response was not ok.');
            }).catch((error) => {
                const notification = this.props.notificationSystem.current;
                notification.addNotification({
                  message: 'There has been a problem with your fetch operation: ' + error.message,
                  level: 'error',
                  position: 'tc'
                });
            })
    }
    
    render() {
        const header = [
            { title: 'ID', prop: 'id', sortable: true, filterable: true },
            { title: 'Description', prop: 'description', sortable: true, filterable: true },
            { title: 'Created at', prop: 'created_at', sortable: true, filterable: true },
            { title: 'Status', prop: 'done', cell: (row) => row.done ? 'Done' : 'Undone', sortable: true, filterable: true },
            { title: 'Actions', cell: (row) => { return <Button variant='danger' onClick={() => this.handleDelete(row.id)}>Delete</Button>}}
        ];

        return (
            <Container>
                <Space height={20} />
                <h1>Todo App</h1>
                <Space height={20} />
                <Row>
                    <Col>
                        <CreateTask notificationSystem={this.props.notificationSystem} createTask={this.handleCreate} />
                    </Col>
                </Row>
                <Space height={20} />
                <Row>
                    <Col>
                        {this.state.data && 
                            <Datatable 
                                tableHeaders={header} 
                                tableBody={this.state.data} 
                                rowsPerPage={10}
                                rowsPerPageOption={[5, 10, 15, 20]}
                            />
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Table;