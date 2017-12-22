import React from 'react'
import Coin from './Coin'

const style = {
  headerDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr"
  }
}

class CryptoPricesWidget extends React.Component{
  constructor(props){
    super(props)
    this.state = {dataComponents: null}
  }
  componentDidMount(){
    console.log("Grabbing crypto data")
    getCryptoData().then((data) => {
      console.log(data)
      this.setState({data: data})
    }, (err) => console.log(err))
  }
  render() {
    if(this.state.data == null){
      return(
        <h3>No data availiable. The world must be ending...</h3>
      )
    }
    else{
      return(
        <div>
          <div style={style.headerDiv}>
            <p></p><p>Price(USD)</p><p>24hr % Change</p>
          </div>
          {this.state.data.map((coin, n) => <Coin name={coin.name} usdPrice={coin.price_usd} percentChange24h={coin.percent_change_24h} />)}
        </div>
      )
    }
  }
}


const getCryptoData = () => new Promise((resolves, rejects) => {
  var request = new XMLHttpRequest()
  request.open("GET", "https://api.coinmarketcap.com/v1/ticker/?limit=5", true)
  request.onload = () => resolves(JSON.parse(request.response))
  request.onerror = (err) => rejects(err)
  request.send()
})
export default CryptoPricesWidget
