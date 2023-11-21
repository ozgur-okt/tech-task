import React from 'react'
import { services } from '../data/services'
import CardServices from '../components/CardServices'

function Services() {
  return (
    <div>
      <h1>{services.title}</h1>
      <button>{services.buttonText}</button>
      {
        services.cards.map((card, index) => (
          <CardServices
            key={index}
            icon={card.icon}
            alt={card.alt}
            title={card.title}
            description={card.description} />
        ))
      }
    </div>
  )
}

export default Services