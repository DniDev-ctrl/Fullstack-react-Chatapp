import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { io } from 'socket.io-client'

export function Home({ socket }) {
  function handleSend() {
    const message = document.getElementById('send').value
    const name = document.getElementById('name').value
    const msgToSend = { message: [name, message] }
    socket.emit('json', msgToSend)
  }

  useEffect(() => {
    socket.on('message', (msg) => {
      const msgContainer = document.getElementById('msgContainer')
      const p = document.createElement('p')
      msgContainer.appendChild(p)
      p.innerText = msg.message[0] + ': ' + msg.message[1]
      msgContainer.scrollTop = msgContainer.scrollHeight
    })

    return () => {
      socket.off('message')
    }
  }, [])

  return (
    <div className="MainContainer">
      <div id="msgContainer" className="MsgContainer"></div>
      <div className="SendContainer">
        <input type="text" id="name" placeholder="Name" />
        <input type="text" id="send" placeholder="Message" />
        <button id="btn-connect" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  )
}
