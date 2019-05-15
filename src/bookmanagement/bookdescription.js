import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class bookdescription extends React.Component {
    //修改书籍description事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/bookdescription";
        let formData = new FormData();
        formData.append('bookname', this.props.form.getFieldValue("bookname"));
        formData.append('bookdescription', this.props.form.getFieldValue("bookdescription"));
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
                            placeholder="请输入您想修改description的书籍名称"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('bookdescription', {})(
                        <Input
                            prefix={< Icon type = "book" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想修改的description"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                   修改书籍的description
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalbookdescription = Form.create()(bookdescription);
export default WrappedNormalbookdescription;
