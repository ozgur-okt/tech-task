import React from 'react'

function CardServices({ icon, alt, title, description }) {
  return (
    <div>
      <img src={icon} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default CardServices