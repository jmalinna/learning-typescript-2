import React from 'react';
import { List, Row, Col } from 'antd';

interface TodoListProps {
  todoItems: string[];
}

const TodoList = ({ todoItems }: TodoListProps) => {
  return (
    <Row justify="center">
      <Col span={8}>
        <List
          header={<div>Todo List</div>}
          bordered
          dataSource={todoItems}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </Col>
    </Row>
  )
};
export default TodoList;
