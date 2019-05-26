import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class timesales extends React.Component {
    //查询书籍销量
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/order/timesales";
        let formData = new FormData();
        formData.append('bookname', this.props.form.getFieldValue("bookname"));
        formData.append('year', this.props.form.getFieldValue("year"));
        formData.append('month', this.props.form.getFieldValue("month"));
        formData.append('date', this.props.form.getFieldValue("data"));
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
                    {getFieldDecorator('year', {})(
                        <Input
                            prefix={< Icon type = "time" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想查询销量的书籍开始年份"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('month', {})(
                        <Input
                            prefix={< Icon type = "time" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想查询销量的书籍开始月份"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('date', {})(
                        <Input
                            prefix={< Icon type = "time" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想查询销量的书籍开始日期"/>
                    )}
                </FormItem>
              
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                   查询书籍销量
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormaltimesales = Form.create()(timesales);
export default WrappedNormaltimesales;
