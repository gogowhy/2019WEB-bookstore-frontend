import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import './Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class checknow extends React.Component {
    //提交购物车事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/checknow";
        let formData = new FormData();
        formData.append('orderid', this.props.form.getFieldValue("orderid"));

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
                    {getFieldDecorator('orderid', {})(
                        <Input
                            prefix={< Icon type = "money" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想结账的订单号orderid"/>
                    )}
                </FormItem>
                
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                     现在结账！！！
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalchecknow = Form.create()(checknow);
export default WrappedNormalchecknow;
