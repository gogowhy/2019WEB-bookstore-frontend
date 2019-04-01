import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

class Cartform extends React.Component {
  state = {
    columns: [{
      title: 'Date',
      dataIndex: 'date',
      width: 200,
    }, {
      title: 'Price',
      dataIndex: 'Price',
      width: 100,
    }, {
      title: 'Bookname',
      dataIndex: 'Bookname',
      width: 100,
    }, {
      title: 'Note',
      dataIndex: 'note',
      width: 100,
    }, {
      title: 'Action',
      key: 'action',
      render: () => (
        <a href="javascript:;">Delete</a>
      ),
    }],
  };

  components = {
    header: {
      cell: ResizeableTitle,
    },
  };

  data = [{
    key: 0,
    date: '2018-02-11',
    Price: 120,
    Bookname: 'income',
    note: 'transfer',
  }, {
    key: 1,
    date: '2018-03-11',
    Price: 243,
    Bookname: 'income',
    note: 'transfer',
  }, {
    key: 2,
    date: '2018-04-11',
    Price: 98,
    Bookname: 'income',
    note: 'transfer',
  }];

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
    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index),
      }),
    }));

    return (
      <Table
        bordered
        rowSelection={rowSelection}
        components={this.components}
        columns={columns}
        dataSource={this.data}
      />
    );
  }
}


export default Cartform;