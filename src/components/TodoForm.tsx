import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
  
interface Values {
  todo: {
    item: string,
  }
}

const TodoForm = () => {
  const handleSubmit = (values: Values) => {
    console.log(values);
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
