import React, { Component } from 'react'
import { connect } from 'react-redux'
import LinkedStockCard from '../semantic-ui-components/LinkedStockCard'
// import StockCard from './StockCard'
import { fetchStocksOwned } from '../actions/stockActions'
import { Card } from 'semantic-ui-react'

class UserStocks extends Component {

  componentDidMount() {
    this.props.fetchStocksOwned()
  }

  render() {
    const userStocks = this.props.stocks

    if (userStocks.length === 0 || 'na' in userStocks) return <div></div>

    return (<div></div>

     
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchStocksOwned: () => {
      let action = fetchStocksOwned()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( UserStocks )
