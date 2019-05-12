import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import '../Login.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

const FormItem = Form.Item;

class booknumber extends React.Component {
    //修改书籍库存事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/books/booknumber";
        let formData = new FormData();
        formData.append('bookname', this.props.form.getFieldValue("bookname"));
        formData.append('booknumber', this.props.form.getFieldValue("booknumber"));
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
                            placeholder="请输入您想修改库存数量的书籍名称"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('booknumber', {})(
                        <Input
                            prefix={< Icon type = "book" style = {{ fontSize: 13 }}/>}
                            placeholder="请输入您想修改的库存数量"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                   修改书籍的库存
                    </Button>
                </FormItem>
            </Form>
             
        );
    }
}
const WrappedNormalbooknumber = Form.create()(booknumber);
export default WrappedNormalbooknumber;
