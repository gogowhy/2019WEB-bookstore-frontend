import { Layout, Menu, Breadcrumb, Icon,Button} from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import './Navi.css';
import { Link } from 'react-router-dom';
import { the_config } from '../config';
const { Header, Content, Footer, Sider } = Layout;

  


class SiderDemo extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    handle=()=>{
        const w=window.open('about:blank');
        w.location.href="/bookview"
      }

      opencart=()=>{
        const w=window.open('about:blank');
        w.location.href="/cart"
      }
      openorder=()=>{
        const w=window.open('about:blank');
        w.location.href="/order"
      }
      openlogin=()=>{
        const w=window.open('about:blank');
        w.location.href="/Login"
      }
     

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
                >   <Button type="primary" icon="fire">Hi,{the_config.username}</Button>
                    <div className="logo" />
                    <Button type="default" icon="team" className="regist_button"  onClick={this.openlogin} >Login/Register</Button>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                   
                        <Menu.Item key="1">
                            <Icon type="barcode" />
                            <span className="nav-text" onClick={this.handle}> Book view</span>
                            
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="shopping-cart" />
                            <span className="nav-text" onClick={this.opencart}>Cart</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="check" />
                            <span className="nav-text" onClick={this.openorder}>Order</span>
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
                        </span>
                        <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>EBOOK SYSTEM</span>
                        <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
                            <img src={logo} className="App-logo" alt="logo" />
                        </span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '12px 0' }}>
                            <Breadcrumb.Item>Ebook</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
                      


                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        EBOOK SYSTEM ©2019 Created by gogowhy
                    </Footer>
                </Layout>
            </Layout>
        );
    }
   
    

}

export default SiderDemo;
