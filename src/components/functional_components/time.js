import React from 'react'

function time() {
  return (
    <div>
    <div>Time</div>
    <div> Time is {new Date().toLocaleTimeString()}</div>
    </div>
  )
}

export default time