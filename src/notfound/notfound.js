import { Layout, Menu, Breadcrumb, Icon,Button,Form, Table,Input} from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import './notfound.css' ;
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { Resizable } from 'react-resizable';
import { the_config } from '../config';
import notfound_picture from '../images/notfound.jpg';


const { Header, Content, Footer, Sider } = Layout;
const ResizeableTitle = (props) => {
    const { onResize, width, ...restProps } = props;
    
      if (!width) {
        return <th {...restProps} />;
      }
    
      return (
        <Resizable width={width} height={0} onResize={onResize}>
          <th {...restProps} />
        </Resizable>
      );
    };
const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
      };

class notfound extends React.Component
 {
    
    state = {
        collapsed: false
      };
    components = {
        header: {
          cell: ResizeableTitle,
        },
      };
    
    handleResize = index => (e, { size }) => {
        this.setState(({ columns }) => {
          const nextColumns = [...columns];
          nextColumns[index] = {
            ...nextColumns[index],
            width: size.width,
          };
          return { columns: nextColumns };
        });
      };
  

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
                            <span className="nav-text">You are banned or the website not found</span>
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
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>You are banned or the website is unconnected
                        
                        <br/>
                       <div class="picture">
                        <img src={notfound_picture} width="900" height="600"/>
<br/>
                       </div>
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
 export default notfound;
