import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class numberbuy extends React.Component {
    //提交输入数字的购物车事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/numberbuy";
        let formData = new FormData();
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
const WrappedNormalnumberbuy = Form.create()(numberbuy);
export default WrappedNormalnumberbuy;
