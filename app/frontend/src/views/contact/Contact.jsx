import React from 'react'
import ReCaptcha from 'react-recaptcha'

const style = {
  root : {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  }
}

class Contact extends React.Component{
  render() {
    return (
      <div style={style.root}>
        <div></div>
        <div>
          <h1>Contact</h1>

        </div>
        <div></div>
      </div>

    )
  }
}

export default Contact
