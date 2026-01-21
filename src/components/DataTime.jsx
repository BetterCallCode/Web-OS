import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()

      const datePart = now.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      })
        .replace(',', '')
        .toLowerCase()

      const timePart = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).toLowerCase()

      setDate(datePart)
      setTime(timePart)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="datetime">
      <span className="date">{date}</span>
      <span className="time">{time}</span>
    </div>
  )
}

export default DateTime