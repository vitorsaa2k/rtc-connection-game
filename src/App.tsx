import { useState } from 'react'
import './App.css'
import { useRTC } from './hooks/useRTC'
import { useMessageSender } from './hooks/useMessageSender'

function App() {
  const rtcContext = useRTC()
  const sendMessage = useMessageSender()
  const [receivedOffer, setReceivedOffer] = useState('')
  const [generatedAnswer, setGeneratedAnswer] = useState('')
  const [receivedAnswer, setReceivedAnswer] = useState('')
  async function submitPeerOffer() {
    const offer = await JSON.parse(receivedOffer) as RTCSessionDescriptionInit
    const answer = await rtcContext.createAnswer(offer)
    setGeneratedAnswer(JSON.stringify(answer))
  }

  async function createOffer() {
    const offer = await rtcContext.createOffer()
    console.log(JSON.stringify(offer))
    console.log(offer)
  }

  async function submitPeerAnswer() {
    const answer = JSON.parse(receivedAnswer) as RTCSessionDescriptionInit
    await rtcContext.setRemoteAnswer(answer)
  }

  return <main className='container'>
    <button onClick={createOffer}>create offer</button>
    <form>
      <label>
        Receiving offer
        <input value={receivedOffer} type='text' onChange={e => setReceivedOffer(e.currentTarget.value)} />
      </label>
      <button onClick={submitPeerOffer} type='button'>submit offer</button>
    </form>
    <div className='generated_container'>
      Generated Answer
      <p>{ generatedAnswer }</p>
    </div>

    <form>
      <label>
        Receiving Answer
        <input value={receivedAnswer} type='text' onChange={e => setReceivedAnswer(e.currentTarget.value)} />
      </label>
      <button onClick={submitPeerAnswer} type='button'>submit answer</button>
    </form>
    <p>Status: { rtcContext.isConnected ? "Connected" : "Disconnected"}</p>
    <button onClick={() => sendMessage({type: "start"})}>Send message</button>
  </main>
}

export default App
