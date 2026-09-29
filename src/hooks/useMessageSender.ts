import { useRTC } from "./useRTC"

export const useMessageSender = () => {
  const rtc = useRTC()
  return function sender(message: Message) {
    rtc.sendMessage(JSON.stringify(message))
  }
}

type Message =
  | { type: "answer", answer: { questionId: number, answer: string } }
  | { type: "start" }
  | { type: "finish" }
