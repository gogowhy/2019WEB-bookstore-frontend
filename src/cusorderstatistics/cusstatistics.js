import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class cusstatistics extends React.Component {
    //查询一个顾客在一定时间内的购买情况
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/order/custimebuy";
        let formData = new FormData();
        formData.append('year', this.props.form.getFieldValue("year"));
        formData.append('month', this.props.form.getFieldValue("month"));
        formData.append('date', this.props.form.getFieldValue("date"));
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
                    {getFieldDecorator('year', {})(
                        <Input
                            prefix={< Icon type = "time" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想查询购买情况开始年份"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('month', {})(
                        <Input
                            prefix={< Icon type = "time" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想查询购买情况开始月份"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('date', {})(
                        <Input
                            prefix={< Icon type = "time" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想查询购买情况开始日期"/>
                    )}
                </FormItem>
              
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                   查询在该时间以后的购买情况
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalcusstatistics = Form.create()(cusstatistics);
export default WrappedNormalcusstatistics;
