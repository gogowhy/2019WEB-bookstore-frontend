import { Comment, Avatar, Form, Button, List, Input ,message} from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
const TextArea = Input.TextArea;


const FormItem=Form.Item;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class bookcomment extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = (e) => {
   
   

    e.preventDefault();
    let url = "/bookremark/newbookremark";
    let formData = new FormData();
    formData.append('remark', this.props.form.getFieldValue("remark"));
    fetch(url, {
            method: 'post',
            mode: 'cors',
            body: formData
        }).then(function (response) {
        return response.text()
    }).then(function (body) {
            message.info(body);
        });
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    const {getFieldDecorator} = this.props.form;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}

        <Form onSubmit={this.handleSubmit} >
                <Comment>
                    {getFieldDecorator('remark', {})(
                        <Input
                            placeholder="remark"/>
                    )}
                </Comment>

               <FormItem> 
                    <Button type="primary"  htmlType="submit"  className="login-form-button">
                        提交您的评论
                    </Button>
                   
                </FormItem>
                
               
            </Form>
      </div>
    );
  }
}

const WrappedNormalbookcomment= Form.create()(bookcomment);
export default WrappedNormalbookcomment;