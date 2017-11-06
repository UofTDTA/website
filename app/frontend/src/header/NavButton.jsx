import React from 'react'
import FlatButton  from 'material-ui/FlatButton'
import { Link } from 'react-router-dom'

//TODO: This can probably be static

const style = {
  link: {
    textDecoration: "none"
  },
  button: {
    height: "100%",
    padding: "none",
    display: "inline"
  }
}

class NavButton extends React.Component{
  render(){
    return(
      <Link to={this.props.link} style={style.link}>
        <FlatButton label={this.props.title} style={style.button} hoverColor={"#EBEBEB"}/>
      </Link>
    )
  }
}

export default NavButton
