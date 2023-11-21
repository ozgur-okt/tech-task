import React from 'react'
import { topBar } from '../data/topBar'


function TopBar() {
  return (
    <div>
      <img src={topBar.logo} alt="logo"></img>
      {topBar.links.map((link, index) => {
        return (
          <button key={index} > {link.name} </button>
        )
      })}
      <button> {topBar.button.text} </button>
    </div>
  )
}

export default TopBar