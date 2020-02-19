import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { addTask, checkTask, uncheckTask, removeTask } from 'state/actions';
import { Typography, Divider, Form, Icon, Input, Button, Empty, List } from 'antd';

import 'assets/css/Todo.css';

const { Title, Paragraph, Text } = Typography;

class ToDoApp extends Component {
    constructor() {
        super();

        this._handleSubmit = this._handleSubmit.bind(this);        
    }

    _handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.addTask(values);
            }
        });
    }

    _handleCheck(id) {
        this.props.checkTask(id);
    }

    _handleUncheck(id) {
        this.props.uncheckTask(id);
    }

    _handleRemove(id) {
        this.props.removeTask(id);
    }

    _renderForm() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout="vertical" onSubmit={this._handleSubmit}>
                <Form.Item >
                    {getFieldDecorator('task', {
                        rules: [{ required: true, message: 'Please input Task!' }],
                    })(
                        <Input
                            prefix={<Icon type="clock-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="What to do?"
                        />,
                    )}
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add task
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    _renderTask(task) {

        return task.text
    }

    _renderTasks() {
        const { tasks } = this.props;

        if (!tasks || _.size(tasks) <= 0) {
            return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No tasks" />
        }

        //console.log(tasks);

        return (
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={Object.values(tasks)}
                renderItem={item => (
                    <List.Item
                        actions={
                            [   
                                item.active ? (
                                    <Button shape="circle" icon="check" type="primary" onClick={() => this._handleCheck(item.id)} />
                                ) : (
                                    <Button shape="circle" icon="cross" type="dashed" onClick={() => this._handleUncheck(item.id)} />
                                )
                                ,
                                <Button shape="circle" icon="delete" type="danger" onClick={() => this._handleRemove(item.id)} />
                            ]
                        }>

                            <Text delete={!item.active} disabled={!item.active}>{item.text}</Text>
                    </List.Item>
                )}
            />
        );
    }

    render() {
        return (
            <div className="todo-app-container">
                <Title>Simple.Todo</Title>
                <Text>You can add tasks here! </Text>
                <Paragraph>Just enter text and press "Add task" button</Paragraph>

                <Divider />
                {this._renderTasks()}

                <Divider />
                {this._renderForm()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { tasks } = state.todo;

    return {
        tasks
    };
};


const ToDoAppForm = Form.create({ name: 'horizontal_login' })(ToDoApp);


export default connect(
    mapStateToProps, {
    addTask,
    checkTask,
    uncheckTask,
    removeTask
})(ToDoAppForm);