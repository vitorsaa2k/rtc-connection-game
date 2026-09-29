import { createContext } from "react";

export interface RTCContextI {
  peer: React.RefObject<RTCPeerConnection | null>;
  messages: string[]
  isConnected: boolean
  createOffer: () => Promise<RTCSessionDescriptionInit>
  createAnswer: (remmoteOffer: RTCSessionDescriptionInit) => Promise<RTCSessionDescriptionInit>
  setRemoteAnswer: (remmoteAnswer: RTCSessionDescriptionInit) => Promise<void>
  addIceCandidate: (candidate: RTCIceCandidateInit) => Promise<void>
  sendMessage: (message: string) => void
}


export const RTCContext = createContext<RTCContextI | null>(null)
