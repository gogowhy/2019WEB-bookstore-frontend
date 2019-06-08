import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class salesform extends React.Component {
    //查询一本书籍的总销量
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/order/booksales";
        let formData = new FormData();
        formData.append('bookname', this.props.form.getFieldValue("bookname"));
        fetch(url, {
                method: 'post',
                mode: 'cors',
                body: formData
            }).then(function (response) {
            return response.text()
        }).then(function (body) {
                message.info(body);
            });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('bookname', {})(
                        <Input
                            prefix={< Icon type = "book" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想查询销量的书籍名称"/>
                    )}
                </FormItem>
              
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                   查询该书籍总销量
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalsalesform = Form.create()(salesform);
export default WrappedNormalsalesform;
