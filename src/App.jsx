import { useState } from 'react'
import './styles/App.css'
import LeftMenu from './components/LeftMenu'
import EmailComponent from './components/EmailComponent'
import Header from './components/Header'


function App() {
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  return (
    <div className="app">
      <Header/>
      <LeftMenu currentTab={currentTab} setCurrentTab={setCurrentTab} hideRead={hideRead} setHideRead={setHideRead}/>
      <EmailComponent currentTab={currentTab} setCurrentTab={setCurrentTab} hideRead={hideRead} setHideRead={setHideRead}/>
    </div>
  )
}

export default App