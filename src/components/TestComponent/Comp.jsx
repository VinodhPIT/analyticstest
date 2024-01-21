import React from 'react'

export default function Comp({title,desrip ,button}) {
  return (
    <div>

        <h2>{title}</h2>
        <p>{desrip}</p>

        <button>{button}</button>
      
    </div>
  )
}
