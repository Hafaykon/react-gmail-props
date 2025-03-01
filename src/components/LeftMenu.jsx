import initialEmails from '../data/emails'
import '../styles/App.css'

const LeftMenu = (props) => {

    props.setHideRead(props.hideRead)

    const unreadEmails = initialEmails.filter(email => !email.read)
    const starredEmails = initialEmails.filter(email => email.starred)
    
    return (
    <>
     <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${props.currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => props.setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${props.currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => props.setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={props.hideRead}
              onChange={e => props.setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav>
    </>
    )
}

export default LeftMenu;