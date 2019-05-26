import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import './Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';


const FormItem = Form.Item;

class checkall extends React.Component {
    //提交全部购物车事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/checkall";
        let formData = new FormData();
    
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
                    <Button type="primary" htmlType="submit" className="login-form-button">
                     购买购物车中所有商品！！！
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalcheckall = Form.create()(checkall);
export default WrappedNormalcheckall;
