import React from 'react'
import { about } from '../data/about'

function About() {
  return (
    <div>
        <h5>{about.section}</h5>
        <img src={about.image} alt={about.alt}/>
    </div>
  )
}

export default About