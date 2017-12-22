import React from 'react'
import BigCalendar from 'react-big-calendar'
import Moment from 'moment'
import './react-big-calendar.css'

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(Moment)
)

const style = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr"
  },
  calendarDiv: {
    paddingTop: "1rem"
  }
}

class Calendar extends React.Component{
  render() {
    return (
      <div style={style.root}>
        <div></div>
        <div style={style.calendarDiv}>
          <BigCalendar
            style={{height: '420px'}}
            events={[]}
            views={['month', 'week', 'agenda']}
          />
        </div>
        <div></div>
      </div>
    )
  }
}

export default Calendar
