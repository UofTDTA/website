import React from 'react'
import logo from './logo.png'
import NavButton from './NavButton'

const style = {
  root: {
    backgroundColor: "#63C4FF",
    display: "grid",
    gridTemplateColumns: "1fr 12fr"
  },
  logo: {
    height: "5rem",
    paddingLeft: "1rem",
    display: "inline-block"
  }
}

const menuItems = [
  {title: "Home", link: "/"},
  {title: "About", link: "/about"},
  {title: "Calendar", link: "/calendar"},
  {title: "Contact", link: "/contact"}
]

class Header extends React.Component{
  render(){
    return(
      <header style={style.root}>
        <div>
          <img src={logo} alt="Logo" style={style.logo} ></img>
        </div>
        <div>
          {menuItems.map((item, n) => (<NavButton title={item.title} link={item.link} key={n}/>))}
        </div>
      </header>
    )
  }
}

export default Header
