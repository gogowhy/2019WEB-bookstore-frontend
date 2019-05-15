import { Layout, Menu, Breadcrumb, Icon,Button,Form, Table,Input} from 'antd';
import axios from 'axios';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import '../order.css' ;
import { Link } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import { Resizable } from 'react-resizable';
import { the_config } from '../config';

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

class ordermanagement extends React.Component
 {
    state = {
        searchText: '',
        collapsed: false
      };
   
    /*state = {
        columns: [{
            title: 'userid',
            dataIndex: 'userid',
            width: 200,
          },{
          title: 'orderid',
          dataIndex: 'orderid',
          width: 200,
        }, {
          title: 'Price',
          dataIndex: 'price',
          width: 100,
        }, {
          title: 'Bookname',
          dataIndex: 'bookname',
          width: 100,
        }, {
          title: 'Number',
          dataIndex: 'number',
          width: 100,
        },{
          title: 'Date',
          dataIndex: 'ordertime',
          width: 100,
        }, {
          title: 'Action',
          key: 'action',
          render: () => (
            <a href="javascript:;">Delete</a>
          ), },
        ],
        searchText: '',
        collapsed: false
      };*/
      
    
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
  




      
      componentDidMount(){
        let formData = new FormData();
        
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get("order/query_all_order", {
        
          mode: 'cors',
          body: formData
      })
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
       /* const columns = this.state.columns.map((col, index) => ({
          ...col,
          onHeaderCell: column => ({
            width: column.width,
            onResize: this.handleResize(index),
          }),
        }));*/
        const columns =[{
            title: 'userid',
            dataIndex: 'userid',
            width: 200,
            ...this.getColumnSearchProps('userid'),
          },{
          title: 'orderid',
          dataIndex: 'orderid',
          width: 200,
          ...this.getColumnSearchProps('orderid'),
        }, {
          title: 'Price',
          dataIndex: 'price',
          width: 100,
        }, {
          title: 'Bookname',
          dataIndex: 'bookname',
          width: 100,
          ...this.getColumnSearchProps('bookname'),
        }, {
          title: 'Number',
          dataIndex: 'number',
          width: 100,
        },{
          title: 'Date',
          dataIndex: 'ordertime',
          width: 100,
          ...this.getColumnSearchProps('ordertime'),
        }, {
          title: 'Action',
          key: 'action',
          render: () => (
            <a href="javascript:;">Delete</a>
          ), },];
    
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
                            <span className="nav-text">Order management</span>
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
                        
                        <Table
            bordered
            rowSelection={rowSelection}
            components={this.components}
            columns={columns}
            dataSource={this.state.users}
          />
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
 export default ordermanagement;