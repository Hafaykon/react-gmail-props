//import { useState } from 'react'
import initialEmails from '../data/emails'
import '../styles/App.css'

const OpenEmail = (props) => {

    const email = initialEmails.find(email => email.id === parseInt(props.id))

    return(
        <>
        <main className="emails">
            <h2 className="title">{email.title}</h2>   
            <p>___________________________________________________________________________________________________________________________</p>
            <div className="title">{email.textContnet}</div> 
            <p>___________________________________________________________________________________________________________________________</p>  
            <div className="title" onClick={() => {props.setEmailIsOpen(!props.emailIsOpen)}}>Back</div>
        </main>  
        </>
    )
} 

export default OpenEmail