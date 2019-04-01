import { Layout, Menu, Breadcrumb, Icon,Button} from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import './Navi.css'
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

  


class SiderDemo extends Component {
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
                >   <Button type="primary" icon="fire">Hi,</Button>
                    <div className="logo" />
                    <Button type="default" icon="team" className="regist_button"  ><Link to="/Login/">Login/Register</Link></Button>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                   
                        <Menu.Item key="1">
                            <Icon type="barcode" />
                            <span className="nav-text" > <Link to="/bookview/">Book view</Link></span>
                            
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="shopping-cart" />
                            <span className="nav-text"><Link to="/cart/">Cart</Link></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="check" />
                            <span className="nav-text"><Link to="/order/">Order</Link></span>
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
