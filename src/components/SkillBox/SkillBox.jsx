import React from 'react'
import './skillBox.scss'

const SkillBox = ({ component, title, status, color, id }) => {
  return (
    <div className='skillBox'>
      <div className="icon" style={{color: `${color}`}}>
          {component}
      </div>
      <div className="skillDetail">
        <p className="title">{title}</p>
        <p className="status">{status}</p>
      </div>
    </div>
  )
}

export default SkillBox