import { useCallback,  useEffect, useRef, useState, type ReactNode } from "react"
import { RTCContext } from "./Context";
import { useMessageHandler } from "../../hooks/useMessageHandler";

const ICE_SERVERS: RTCConfiguration = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' }
  ]
}

interface UseWebRTCDataChannelOptions {
  onIceCandidate?: (candidate: RTCIceCandidate) => void;
  onConnectionStateChange?: (state: RTCPeerConnectionState) => void;
}

export function RTCContextProvider({ options = {}, children }: {options?: UseWebRTCDataChannelOptions, children: ReactNode}) {
  const [messages, setMessages] = useState<string[]>([])
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const messageHandler = useMessageHandler()

  const peerRef = useRef<RTCPeerConnection | null>(null)
  const channelRef = useRef<RTCDataChannel | null>(null)

  const { onIceCandidate, onConnectionStateChange } = options

  const setupDataChannelEvents = useCallback((channel: RTCDataChannel) => {
    channelRef.current = channel

    channel.onopen = () => {
      setIsConnected(true)
    }

    channel.onclose = () => {
      setIsConnected(false)
    }

    channel.onmessage = (event: MessageEvent) => {
      console.log(event.data)
      setMessages(prev => [...prev, event.data])
      messageHandler(event.data)
    }
  }, [messageHandler])

  const createPeerConnection = useCallback(() => {
    if (peerRef.current) return peerRef.current
    const peer = new RTCPeerConnection(ICE_SERVERS)
    console.log(peer)
    peer.onicecandidate = (event) => {
      if (event.candidate && onIceCandidate) {
        onIceCandidate(event.candidate)
      }
    }

    peer.onconnectionstatechange = () => {
      if (onConnectionStateChange) {
        onConnectionStateChange(peer.connectionState)
        console.log(peer.connectionState)
      }
    }

    peer.ondatachannel = (event) => {
      setupDataChannelEvents(event.channel)
    }

    peerRef.current = peer
    return peer
  }, [onIceCandidate, onConnectionStateChange, setupDataChannelEvents])

  const createOffer = useCallback(async () => {
    const peer = createPeerConnection()
    const channel = peer.createDataChannel("chatChannel", { ordered: true })
    setupDataChannelEvents(channel)
    const offer = await peer.createOffer()
    await peer.setLocalDescription(offer)
    if (peer.iceGatheringState === "complete") {
      return peer.localDescription!;
      }
    return new Promise<RTCSessionDescriptionInit>((resolve) => {
        const checkState = async () => {
          if (peer.iceGatheringState === "complete") {
            peer.removeEventListener("icegatheringstatechange", checkState);
            resolve(peer.localDescription!);
          }
        };
        peer.addEventListener("icegatheringstatechange", checkState);
      });
    return offer
  }, [createPeerConnection, setupDataChannelEvents])

  const createAnswer = useCallback(async (remoteOffer: RTCSessionDescriptionInit) => {
    const peer = createPeerConnection()
    await peer.setRemoteDescription(remoteOffer)
    const answer = await peer.createAnswer()
    await peer.setLocalDescription(answer)
    console.log(peer)
    return answer
  }, [createPeerConnection])

  const setRemoteAnswer = useCallback(async (remoteAnswer: RTCSessionDescriptionInit) => {
      const peer = peerRef.current;
      if (peer) {
        await peer.setRemoteDescription(new RTCSessionDescription(remoteAnswer));
    }
    console.log(peer)
    }, []);

  const addIceCandidate = useCallback(async (candidate: RTCIceCandidateInit) => {
      const peer = peerRef.current;
      if (peer) {
        await peer.addIceCandidate(new RTCIceCandidate(candidate));
    }
    console.log(peer)
    }, []);

  const sendMessage = useCallback((message: string) => {
    const channel = channelRef.current
    if (channel && channel.readyState === "open") {
      channel.send(message)
      setMessages(prev => [...prev, message])
    } else {
      console.warn("DataChannel is not open yet.")
    }
    console.log(peerRef.current)
  }, [])

  useEffect(() => {
    return () => {
      channelRef.current?.close()
      peerRef.current?.close()
    }
  }, [])

  return <RTCContext.Provider value={{
    peer: peerRef,
    messages,
    isConnected,
    createOffer,
    createAnswer,
    setRemoteAnswer,
    addIceCandidate,
    sendMessage

  }}>{children}</RTCContext.Provider>
}
