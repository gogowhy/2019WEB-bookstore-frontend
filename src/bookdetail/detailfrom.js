import React from 'react';
import {Form, Icon, Input, Button, message, Card} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;
const { Meta } = Card;

class detailform extends React.Component {
    //提交购物车事件
  

    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/setbookdetail";
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
            const w=window.open('about:blank');
        w.location.href="/bookdetail"
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('bookname', {})(
                        <Input
                            prefix={< Icon type = "book" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想查询详情的书籍名称"/>
                    )}
                </FormItem>
                
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.send_data}>
                     查询该书籍的详情
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormaldetailform = Form.create()(detailform);
export default WrappedNormaldetailform;
