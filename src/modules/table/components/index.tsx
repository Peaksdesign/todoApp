import Space from 'modules/space/components';
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Datatable from 'react-bs-datatable';
import type { ItemType } from 'types';

type TableProps = {
    itemList: Array<ItemType>;
    loadList: () => void;
    deleteItem: (itemId: number) => void;
    createItem: (description: string) => void;
};

type TableState = {
    description: string;
};

export default class Table extends Component<TableProps, TableState> {
    constructor(props: TableProps) {
        super(props);
        this.state = {
            description: '',
        };
    }

    async componentDidMount() {
        this.props.loadList();
    }

    async handleDelete(itemId: number) {
        this.props.deleteItem(itemId);
    }

    async handleCreate() {
        this.props.createItem(this.state.description);
        this.setState({
            description: '',
        });
    }

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ description: event.currentTarget.value });
    };

    render() {
        const header = [
            {
                title: 'ID',
                prop: 'id',
                sortable: true,
                filterable: true,
            },
            {
                title: 'Description',
                prop: 'description',
                sortable: true,
                filterable: true,
            },
            {
                title: 'Created at',
                prop: 'created_at',
                sortable: true,
                filterable: true,
            },
            {
                title: 'Status',
                prop: 'done',
                cell: (row: ItemType) =>
                    row.done ? 'Done' : 'Undone',
                sortable: true,
                filterable: true,
            },
            {
                title: 'Actions',
                prop: 'actions',
                cell: (row: ItemType) => {
                    return (
                        <Button
                            variant="danger"
                            onClick={() => this.handleDelete(row.id)}
                        >
                            Delete
                        </Button>
                    );
                },
            },
        ];

        return (
            <Container>
                <Space height={20} />
                <h1>Todo App</h1>
                <Space height={20} />
                <Row>
                    <Col>
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            placeholder="New Task"
                            onChange={this.handleChange}
                        />
                        <Button
                            variant="success"
                            onClick={() => this.handleCreate()}
                        >
                            Create new task
                        </Button>
                    </Col>
                </Row>
                <Space height={20} />
                <Row>
                    <Col>
                        {this.props.itemList && (
                            <Datatable
                                tableHeaders={header}
                                tableBody={this.props.itemList}
                                rowsPerPage={10}
                                rowsPerPageOption={[5, 10, 15, 20]}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}
