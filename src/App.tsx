import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState<string>("")

  return (
   <main>
     <label htmlFor="message">Your message</label>
     <input id="message" type="text" value={text} onChange={event => setText(event.target.value)}/>
   </main>
  )
}

export default App
