

import {
    Table, Input, Button, Icon,
  } from 'antd';
  import Highlighter from 'react-highlight-words';
  import { Link } from 'react-router-dom';
  import React, { Component } from 'react';
  const data = [{
    key: '1',
    bookname: 'John Brown',
    price: 32,
    details: 'New York No. 1 Lake Park',
    add:'add to chart',
  }, {
    key: '2',
    bookname: 'Joe Black',
    price: 42,
    details: 'London No. 1 Lake Park',
    add:'add to chart',
  }, {
    key: '3',
    bookname: 'Jim Green',
    price: 32,
    details: 'Sidney No. 1 Lake Park',
    add:'add to chart',
  }, {
    key: '4',
    bookname: 'Jim Red',
    price: 32,
    details: 'London No. 2 Lake Park',
    add:'add to chart',
  }];
  
  class Bookviewform extends React.Component {
    state = {
      searchText: '',
    };
  
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
      const columns = [{
        title: 'bookname',
        dataIndex: 'bookname',
        key: 'bookname',
        width: '30%',
        ...this.getColumnSearchProps('bookname'),
      }, {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
        width: '20%',
        ...this.getColumnSearchProps('price'),
      }, {
        title: 'details',
        dataIndex: 'details',
        key: 'details',
        ...this.getColumnSearchProps('details'),
      },
      {
        title: 'BUY IT NOW !',
        dataIndex: 'add',
        key: 'add',
        ...this.getColumnSearchProps('add'),
      }];
      return <Table columns={columns} dataSource={data} />;
    }
  }
  
  export default Bookviewform;



  