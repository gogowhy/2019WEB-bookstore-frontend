import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class newbook extends React.Component {
    //新增书籍事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/bookadd";
        let formData = new FormData();
        formData.append('isbn', this.props.form.getFieldValue("isbn"));
        formData.append('bookname', this.props.form.getFieldValue("bookname"));
        formData.append('price', this.props.form.getFieldValue("price"));
        formData.append('author', this.props.form.getFieldValue("author"));
        formData.append('repertory', this.props.form.getFieldValue("repertory"));
        formData.append('description', this.props.form.getFieldValue("description"));
        formData.append('picture', this.props.form.getFieldValue("picture"));
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
                    {getFieldDecorator('isbn', {})(
                        <Input
                            prefix={< Icon type = "number" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想新增的书籍isbn"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('bookname', {})(
                        <Input
                            prefix={< Icon type = "book" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想新增的书籍名称"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('price', {})(
                        <Input
                            prefix={< Icon type = "dollar" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想新增的书籍价格"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('author', {})(
                        <Input
                            prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想新增的书籍作者"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('repertory', {})(
                        <Input
                            prefix={< Icon type = "number" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想新增的书籍库存数量"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('description', {})(
                        <Input
                            prefix={< Icon type = "number" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想新增的书籍详情信息"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('picture', {})(
                        <Input
                            prefix={< Icon type = "number" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想新增的书的图片链接。注：图片格式为省略http://的未转义的字符串地址"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                   新增书籍
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalnewbook = Form.create()(newbook);
export default WrappedNormalnewbook;