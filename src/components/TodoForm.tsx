import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
  
interface Values {
  todo: {
    item: string,
  }
}

interface TodoFormProps {
  addTodoItems: (newItem: string) => void;
}

const TodoForm = ({ addTodoItems }: TodoFormProps) => {
  const handleSubmit = (values: Values) => {
    const newItem = values.todo.item;
    addTodoItems(newItem);
  }

  return (
    <Row justify="center">
      <Col span={8}>
        <Form onFinish={handleSubmit}>
          <Form.Item name={['todo', 'item']}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Add todo</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
};
export default TodoForm;
