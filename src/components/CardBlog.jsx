import React from 'react'

function CardBlog({ title, date, description }) {
  return (
    <div>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
    </div>
  )
}

export default CardBlog