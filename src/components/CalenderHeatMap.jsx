import React from 'react'
import ReactDOM from 'react-dom'
import CalendarHeatmap from 'react-calendar-heatmap'
import { Tooltip as ReactTooltip } from 'react-tooltip'

import 'react-calendar-heatmap/dist/styles.css'
import '../assets/styles/CalenderHeat.css'

const today = new Date()

function CalenderHeat() {
  const randomValues = getRange(365).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(0, 4), // Update to include 4 for the black scale
    }
  })
  return (
    <div className='pr-5 pt-12'>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={randomValues}
        classForValue={(value) => {
          if (!value) {
            return 'color-green-0'
          }
          return `color-green-${value.count}`
        }}
        tooltipDataAttrs={(value) => {
          return {
            'data-tooltip-id': 'my-tooltip',
            'data-tooltip-content': `${value.date.toISOString().slice(0, 10)} has Visited: ${value.count}`,
          }
        }}
        showWeekdayLabels={true}
        onClick={(value) => alert(`Clicked on value with count: ${value.count}`)}
      />
      <ReactTooltip id='my-tooltip' />
    </div>
  )
}

function shiftDate(date, numDays) {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + numDays)
  return newDate
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i)
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

export default CalenderHeat
