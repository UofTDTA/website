import React from 'react'

const style = {
  root : {
    display: "inline-block",
    border: "5px solid #63C4FF",
    borderRadius: "10px",
    margin: "10px"
  },
  headerDiv: {
    backgroundColor: "#63C4FF",
    height: "50px"
  },
  header: {
    margin: "0",
    padding: "5px"
  },
  bodyDiv : {
    padding: "5px"
  }
}
class Widget extends React.Component{
  render(){
    return(
      <div style={Object.assign({width: this.props.width, height: this.props.height}, style.root)}>
        <div style={style.headerDiv}>
          <h2 style={style.header}>Test</h2>
        </div>
        <div style={style.bodyDiv}>
          <p>Lorem ipsum some dum dum num nom hum blum plum</p>
        </div>
      </div>
    )
  }
}

export default Widget
