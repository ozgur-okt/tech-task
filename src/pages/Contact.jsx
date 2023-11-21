import React from 'react'
import { contact } from '../data/contact'
import styles from '../styles/Contact.module.scss'

function Contact() {
  return (
    <div className={styles.contactContainer}>
        <h5>{contact.section}</h5>
        <h1>{contact.title}</h1>
        <input className={styles.email} type={contact.inputs.email.type} placeholder={contact.inputs.email.placeholder} />
        <input className={styles.subject} type={contact.inputs.subject.type} placeholder={contact.inputs.subject.placeholder} />
        <textarea className={styles.message} type={contact.inputs.message.type} placeholder={contact.inputs.message.placeholder} />
        <button>{contact.buttonText}</button>
    </div>
  )
}

export default Contact