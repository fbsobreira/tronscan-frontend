import React from "react";
import { Table } from 'antd';
import {QuestionMark} from "../../../common/QuestionMark";
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';
import {connect} from "react-redux";
import {getSelectData} from "../../../../actions/exchange";
import { filter, map } from 'lodash'

class ExchangeTable extends React.Component {

  constructor() {
    super();

    this.state = {
      columns: [],
      dataSource: []
      
      
    };
  }

  getColumns() {
    const columns = [{
      title: '交易对',
      key: 'first_token_id',
      render: (text, record, index) => {
        return record.first_token_id +'/'+ record.second_token_id
      }
    }, {
      title: '最新价格',
      dataIndex: 'price',
      key: 'price',
    }, 
    {
      title: <span>涨幅</span>,
      dataIndex: 'up_down_percent',
      key: 'up_down_percent',
      render: (text, record, index) => {
        return (
          text.indexOf('-') != -1?
          <span className='col-red'>{text}</span>:
          <span className='col-green'>{text}</span>
        )
      }
    }];

    this.setState({columns})
  }

  getData() {
    const parsed = queryString.parse(this.props.location.search).id;
    const { dataSource, getSelectData } = this.props;

    const currentData = filter(dataSource, item => {
      return item.exchange_id == parsed
    })

    // 更新数据
    if(dataSource.length){
      if(!parsed){
        this.onSetUrl(dataSource[0])
      }else{
        getSelectData(currentData[0])
      }
    }

    // 获取选择状态
    map(dataSource, item => {
      if(item.exchange_id == parsed || !parsed){
        item.isCurrent = true
      }
    })
  }

  onSetUrl(record) {
    const {getSelectData} = this.props
    this.props.history.push('/exchange?token='+ record.exchange_name+'&id='+record.exchange_id)
    getSelectData(record, true)
     
  }

  componentDidMount() {
    this.getColumns()
  }

  componentDidUpdate() {
    this.getData()
  }

  render() {
    const { columns} = this.state
    const { dataSource } = this.props;
    return (
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        pagination={false}
        rowKey={(record, index) => {
          return index
        }}
        onRow={(record) => {
          return {
            onClick: () => {
              this.onSetUrl(record)
            }
          }
        }}
      />
    )
  }
}

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {
  getSelectData,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ExchangeTable));