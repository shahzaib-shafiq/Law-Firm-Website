import React from 'react'

const button = ({isActive,clicked}) => {
  return (
    <div>
      <button onClick={clicked}
      className='btn bg-primary hover:bg-primary-hover transition-all'
      >{isActive? "Click to Get Another Lawyer" : "Click to Get Lawyer"}</button>
    </div>
  )
}

export default button
