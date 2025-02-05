import { useState } from 'react'
import initialEmails from '../data/emails'
import '../styles/App.css'
import OpenEmail from './OpenEmail.jsx'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)

const EmailComponent = (props) => {
    
  const [emails, setEmails] = useState(initialEmails)
  const [emailIsOpen, setEmailIsOpen] = useState(false)
  const[mailId, setMailId] = useState("")

    props.setCurrentTab(props.currentTab)
    props.setHideRead(props.hideRead)
  
    const toggleRead = targetEmail => {
        const updatedEmails = emails =>
          emails.map(email =>
            email.id === targetEmail.id ? { ...email, read: !email.read } : email
          )
        setEmails(updatedEmails)
    }

    const toggleStar = targetEmail => {
      const updatedEmails = emails =>
        emails.map(email =>
          email.id === targetEmail.id
            ? { ...email, starred: !email.starred }
            : email
        )
      setEmails(updatedEmails)
    }
    
    let filteredEmails = emails

    if (props.hideRead) filteredEmails = getReadEmails(filteredEmails)
  
    if (props.currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)


    return (!emailIsOpen) ? (
        <>
            <main className="emails">
                <ul>
                {filteredEmails.map((email, index) => (
                    <li
                    key={index}
                    className={`email ${email.read ? 'read' : 'unread'}`}
                    >
                    <div className="select">
                        <input
                        className="select-checkbox"
                        type="checkbox"
                        checked={email.read}
                        onChange={() => toggleRead(email)}
                        />
                    </div>
                    <div className="star">
                        <input
                        className="star-checkbox"
                        type="checkbox"
                        checked={email.starred}
                        onChange={() => toggleStar(email)}
                        />
                    </div>
                    <div className="sender">{email.sender}</div>
                    <div className="title" onClick={() => {setMailId(email.id), setEmailIsOpen(!emailIsOpen)}} >{email.title}</div>              
                    </li>
                ))}
                </ul>
            </main>
        </>
    ) : (<> <OpenEmail id = {mailId} emailIsOpen={emailIsOpen} setEmailIsOpen={setEmailIsOpen}/> </>)
}

export default EmailComponent