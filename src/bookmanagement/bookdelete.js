import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class bookdelete extends React.Component {
    //删除书籍事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/bookdelete";
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
                            placeholder="请输入您想删除的书籍名称"/>
                    )}
                </FormItem>
                
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                   删除本书籍
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalbookdelete = Form.create()(bookdelete);
export default WrappedNormalbookdelete;
