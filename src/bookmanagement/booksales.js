import { Layout, Menu, Breadcrumb, Icon,Button,Form, Table,Input} from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import '../bookview.css' ;
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import Normalbooksalesform from './salesform';

const { Header, Content, Footer, Sider } = Layout;

const Wrappednormalbooksales=Form.create({name:'normal_login'})(Normalbooksalesform);


class booksales extends React.Component {
    state = {
        searchText: '',
        collapsed: false
      };
    constructor(props){
        super(props);
        this.state={
          users:[],
          isLoaded:false
        }
      }

      
    
 
     
  render() {
  
      return (
        <Layout>
            <Sider 
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
            >   <Button type="primary" icon="fire"  >Hi,</Button>
                <div className="logo" />
                <Button type="default" icon="team" className="regist_button"  ><Link to="/Register/">Login/Register</Link></Button>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="book" />
                        <span className="nav-text">Book sales</span>
                    </Menu.Item>
                    
                </Menu>
            </Sider>
            <Layout>
            
                <Header style={{ background: '#000', padding: 0 }}>
                   <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                            style={{cursor: 'pointer'}}
                        />
                    </span> {/*这里实现的是点击左右拉扯的动画*/}
                    <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>EBOOK SYSTEM</span>
                    <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </span>{/*这里实现右侧旋转logo*/}
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Bookview</Breadcrumb.Item>
                        
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>Book management
                    
                    <Wrappednormalbooksales></Wrappednormalbooksales>

                     



                    <br/>
                    <Button type="default" icon="home"><Link to ="/admin">Back to management</Link></Button>
                     
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


export default booksales;