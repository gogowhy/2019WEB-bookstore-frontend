

import { Layout, Menu, Breadcrumb, Icon,Button,Form} from 'antd';
import { Table, Divider, Tag } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import './order.css' ;
import { Link } from 'react-router-dom';
import Cartform from'./cartform';
const { Header, Content, Footer, Sider } = Layout;


const columns = [{
    title: 'Bookname',
    dataIndex: 'Bookname',
    key: 'Bookname',
    render: text => <a href="javascript:;">{text}</a>,
  }, {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
  }, {
    title: 'Details',
    dataIndex: 'Details',
    key: 'Details',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">Buy it again {record.Bookname}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    Bookname: 'John Brown',
    Price: 32,
    Details: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }, {
    key: '2',
    Bookname: 'Jim Green',
    Price: 42,
    Details: 'London No. 1 Lake Park',
    tags: ['loser'],
  }, {
    key: '3',
    Bookname: 'Joe Black',
    Price: 32,
    Details: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  }];


class order extends Component {
   state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    
    render() {
        return (
            <Layout>
                <Sider 
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >   <Button type="primary" icon="fire"  >Hi,</Button>
                    <div classBookname="logo" />
                    <Button type="default" icon="team" classBookname="regist_button"  ><Link to="/Register/">Login/Register</Link></Button>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="shopping-cart" />
                            <span classBookname="nav-text">My cart</span>
                        </Menu.Item>
                        
                    </Menu>
                </Sider>
                <Layout>
                
                    <Header style={{ background: '#000', padding: 0 }}>
                       <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                            <Icon
                                classBookname="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{cursor: 'pointer'}}
                            />
                        </span> {/*这里实现的是点击左右拉扯的动画*/}
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>EBOOK SYSTEM</span>
                        <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            <img src={logo} classBookname="App-logo" alt="logo" />
                        </span>{/*这里实现右侧旋转logo*/}
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>My Cart</Breadcrumb.Item>
                            
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>My Cart
                        
                        <Table columns={columns} dataSource={data} > </Table>
                        
                        <Button type="default" icon="home"><Link to ="/">Back to index</Link></Button>
                        
                        </div>
                    </Content>{/*这里是面包屑导航*/}
                    <Footer style={{ textAlign: 'center' }}>
                        EBOOK SYSTEM ©2019 Created by gogowhy
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default order; 
