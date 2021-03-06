import React, { Component } from 'react'
import { connect } from 'react-redux'
import LinkedStockCard from '../semantic-ui-components/LinkedStockCard'
// import StockCard from './StockCard'

import { Card } from 'semantic-ui-react'

class UserStocks extends Component {

  render() {

    const userStocks = this.props.user.stocks

    if (!userStocks) return <div></div>

    return (
      <Card.Group itemsPerRow={3}>
        {
          userStocks.map( ( stock, i ) => <LinkedStockCard key={i} stock={stock} /> )
        }

      </Card.Group>


    )
  }
}



export default UserStocks
