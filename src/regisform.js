/*import React from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import 'whatwg-fetch';
import './Login.css';

const FormItem = Form.Item;
class Login extends React.Component {
    //登录事件
    handleSubmit = (e) => {
        e.preventDefault();
        let url = "/user/register";
        let formData = new FormData();
        formData.append('username', this.props.form.getFieldValue("username"));
        formData.append('userpwd', this.props.form.getFieldValue("userpwd"));
        formData.append('tell', this.props.form.getFieldValue("tell"));
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
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('userpwd')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }



    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {})(
                        <Input
                            prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                            placeholder="帐号"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('userpwd', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
                        <Input
                            prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                            type="password"
                            placeholder="密码"/>
                    )}
                </FormItem>


                 <Form.Item
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input  prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>} type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>


                
                <FormItem>
                    {getFieldDecorator('tell', {})(
                        <Input
                            prefix={< Icon type = "phone" style = {{ fontSize: 13 }}/>}
                            type="tell"
                            placeholder="电话号码"/>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        注册
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm;

*/
/*
import {
    Form,Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,message
  } from 'antd';
  import React, { Component } from 'react';
import './regisform.css'
import axios from 'axios';
  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  const SeoCreateForm = Form.create()(
    (props) => {
        const {form} = props;
        const {getFieldDecorator} = form;
        const saveFormData = () => {
            form.validateFields((err, values) => {
                if (err) {
                    return;
                }
                console.table(values);
                // 在这里执行保存到服务器的操作使用axios
                
                message.success('保存成功！')
            });
        }
        return (
          <div className="new-wrap">
              <Form layout='vertical'>

                  <Form.Item
                      labelCol={{span: 2}}
                      wrapperCol={{span: 12}}
                      label="username">
                      {getFieldDecorator('username', {
                          rules: [{required: true, message: '请填写用户名'}],
                      })(
                        <Input placeholder="请准确填写网站的标题"/>)}
                  </Form.Item>
                  <Form.Item
                      labelCol={{span: 2}}
                      wrapperCol={{span: 12}}
                      label="password">
                      {getFieldDecorator('password', {
                          rules: [{required: true, message: '请填写密码'}],
                      })(
                        <Input placeholder="请准确填写网站的标题"/>)}
                  </Form.Item>
                  <Form.Item
                      labelCol={{span: 2}}
                      wrapperCol={{span: 12}}
                      label="telephone-number">
                      {getFieldDecorator('tell', {
                          rules: [{required: true, message: '请填写电话'}],
                      })(
                        <Input placeholder="请准确填写网站的标题"/>)}
                  </Form.Item>

                  
                  <Button type="primary" onClick={saveFormData}>保存</Button>

              </Form>
          </div>
      )
  }
)


  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
   

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    handleConfirmBlur = (e) => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    }
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    }
  
    handleWebsiteChange = (value) => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      );
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
      return (
        
        <div>
                <SeoCreateForm/>
            </div>

      );
    }
  }
  export default RegistrationForm; 
  */
 import React from 'react';
 import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,message
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;



class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

 /* handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }*/


  handleSubmit = (e) => {
    e.preventDefault();
    let url = "/user/register";
    let formData = new FormData();
    formData.append('username', this.props.form.getFieldValue("username"));
    formData.append('userpwd', this.props.form.getFieldValue("userpwd"));
    formData.append('tell', this.props.form.getFieldValue("tell"));
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


  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('userpwd')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

<Form.Item
          label={(
            <span>
             Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>


        <Form.Item
          label="E-mail"
        >
          {getFieldDecorator('tell', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="Password"
        >
          {getFieldDecorator('userpwd', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </Form.Item>
        <Form.Item
          label="Confirm Password"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </Form.Item>
        
        
        
       
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>I have read the <a href="">agreement</a></Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </Form.Item>
      </Form>
    );
  }
}

export default RegistrationForm; 


  
  