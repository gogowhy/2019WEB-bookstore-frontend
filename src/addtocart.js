import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import './Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class addtocart extends React.Component {
    //提交购物车事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/addtocart";
        let formData = new FormData();
        formData.append('bookname', this.props.form.getFieldValue("bookname"));
        formData.append('number', this.props.form.getFieldValue("number"));
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
                            placeholder="请输入您想购买的书籍名称"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('number', {})(
                        <Input
                            prefix={< Icon type = "number" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想购买的书籍数量"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                     添加到购物车
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormaladdtocart = Form.create()(addtocart);
export default WrappedNormaladdtocart;
