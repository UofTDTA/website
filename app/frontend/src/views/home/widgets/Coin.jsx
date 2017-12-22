import React from 'react'

//<Coin name={coin.name} usd_price={coin.price_usd} percent_change_24h={coin.percent_change_24h} />

const style = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    backgroundColor: "#e0e0e0",
    color: "#0f0f0f",
    border: "2px solid #e0e0e0",
    borderRadius: "5px",
    margin: "5px 0px",
    padding: "0px 2px"
  },
  name: {

  },
  price: {
    textAlign: "right"
  },
  percentChange24h: {
    textAlign: "right"
  }
}

class Coin extends React.Component{
  render() {
    return (
      <div style={style.root}>
        <p style={style.name}>{this.props.name}</p>
        <p style={style.price}>{this.props.usdPrice}</p>
        <p style={style.percentChange24h}>{this.props.percentChange24h}</p>
      </div>
    )
  }
}

export default Coin
