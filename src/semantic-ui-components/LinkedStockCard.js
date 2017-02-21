import React, { Component } from 'react'

import { Card, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { unfollowStock } from '../actions/stockActions'

class LinkedStockCard extends Component {
  constructor() {
    super()

    this.handleUnfollow = this.handleUnfollow.bind(this)
  }

  handleUnfollow(){
    this.props.unfollowStock(
      { ticker: this.props.stock.ticker }
    )
  }



  render(){
    return (
      <div>
        <Card>

          <Icon onClick={this.handleUnfollow} corner name='delete' inverted color='red' />


          <Card.Content onClick={this.handleClick}>
            <Card.Header as='h5'>{this.props.stock.ticker}</Card.Header>
            <Card.Description as='p'>{this.props.stock.company_name}</Card.Description>
            <Card.Description as='p'>{ this.props.stock.data[0].last_price }</Card.Description>

          </Card.Content>
        </Card>
      </div>
        )}
        }

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

function mapDispatchToProps(dispatch){
  return {
    unfollowStock: (params) => {
      let action = unfollowStock(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedStockCard)
