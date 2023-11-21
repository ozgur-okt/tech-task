import React from 'react'
import { contact } from '../data/contact'

function Contact() {
  return (
    <div>
        <h5>{contact.section}</h5>
        <h3>{contact.title}</h3>
        <input type={contact.inputs.email.type} placeholder={contact.inputs.email.placeholder} />
        <input type={contact.inputs.subject.type} placeholder={contact.inputs.subject.placeholder} />
        <input type={contact.inputs.message.type} placeholder={contact.inputs.message.placeholder} />
        <button>{contact.buttonText}</button>
    </div>
  )
}

export default Contact