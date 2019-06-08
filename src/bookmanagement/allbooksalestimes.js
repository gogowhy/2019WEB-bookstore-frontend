import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class allbooksalestimes extends React.Component {
    //查询所有书籍在一定时间的销量
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/order/allbooksalestimes";
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
                   查询所有书籍在该时间以后的销量
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalallbooksalestimes = Form.create()(allbooksalestimes);
export default WrappedNormalallbooksalestimes;
