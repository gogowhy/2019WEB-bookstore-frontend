import { Layout, Menu, Breadcrumb, Icon,Button,Form, Table,Input,Card,Divider, Comment, Avatar } from 'antd';

import axios from 'axios';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import '../bookview.css' ;
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import Normalbookcomment from './bookcomment';
import Normalnumberbuy from './numberbuy';

const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;




const WrappedNormalbookcomment=Form.create({name:'normal_login'})(Normalbookcomment);
const WrappedNormalnumberbuy=Form.create({name:'normal_login'})(Normalnumberbuy);

class bookdetail extends React.Component {
    state = {
        searchText: '',
        collapsed: false
      };
    constructor(props){
        super(props);
        this.state={
          users:[],
          picture:[],
          isLoaded:false,
          bookcomments:[]
        }
      }
      
    
      componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.post("books/querydetail")
        .then(function (response) {
          _this.setState({
            users:response.data,
            isLoaded:true
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        })


        axios.post("bookremark/querythebook")
        .then(function (response) {
          _this.setState({
            bookcomments:response.data,
            isLoaded:true
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        })

        axios.post("books/querythebookpicture")
        .then(function (response) {
          _this.setState({
            picture:response.data,
            isLoaded:true
          });
        })
        .catch(function (error) {
          console.log(error);
          _this.setState({
            isLoaded:false,
            error:error
          })
        })

      }


      getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
          setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => { this.searchInput = node; }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button
              onClick={() => this.handleReset(clearFilters)}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: (text) => (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
      })
    
      handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
      }
    
      handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
      }
  render() {
      const remarkcolumns=[
        {
        title: 'username',
        dataIndex: 'username',
        key: 'username',
        width: '10%',
        ...this.getColumnSearchProps('username'),
        },
        {
          title: 'bookremark',
          dataIndex: 'bookremark',
          key: 'bookremark',
          ...this.getColumnSearchProps('bookremark'),
        }
      ];
    const columns = [{
        title: 'bookname',
        dataIndex: 'name',
        key: 'bookname',
        width: '30%',
        ...this.getColumnSearchProps('name'),
      }, {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
        width: '20%',
        ...this.getColumnSearchProps('price'),
      }, {
        title: 'author',
        dataIndex: 'author',
        key: 'author',
        ...this.getColumnSearchProps('author'),
      },{
        title: 'isbn',
        dataIndex: 'isbn',
        key: 'isbn',
        ...this.getColumnSearchProps('isbn'),
      },{
        title: 'repertory',
        dataIndex: 'repertory',
        key: 'repertory',
        ...this.getColumnSearchProps('repertory'),
      }
    ];
  
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
                        <span className="nav-text">Book View</span>
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
                    <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>Book view
                    
                    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={"http://"+this.state.picture} />}
  >
    <Meta title="Book picture" />
  </Card>

  <Divider>add to cart</Divider>

  <WrappedNormalnumberbuy></WrappedNormalnumberbuy>
  <Divider>Book detail</Divider>
                    
                    
                    
                    <Table columns={columns} 
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                   dataSource={
                     this.state.users
                       } />
<Divider>comments of the book</Divider>

 <Table columns={remarkcolumns} 
                    
                   dataSource={
                     this.state.bookcomments
                       } />
  
<Divider>Commit your comment</Divider>
<WrappedNormalbookcomment></WrappedNormalbookcomment>


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


export default bookdetail;
