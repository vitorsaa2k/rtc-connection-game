import { useNavigate } from "@tanstack/react-router";
import { useGameState } from "./useGameState";

export const useMessageHandler = () => {
  const navigate = useNavigate();
  const [, dispatch] = useGameState();
  return function handler(message: string) {
    const parsedMessage = JSON.parse(message) as Message;
    switch (parsedMessage.type) {
      case "start":
        console.log("received start message");
        dispatch({ type: "START" });
        navigate({
          to: "/game",
        });
        break;
      case "finish":
        console.log("received finish message");
        dispatch({ type: "FINISH" });
        break;
      case "answer":
        console.log("received answer message");
        dispatch({ type: "INCREASE_PLAYER2_TOTAL_ANSWERED" });
        dispatch({ type: "PLAYER2_ANSWER", payload: parsedMessage.answer });
        break;
      default:
        console.error("Unknown message type");
        break;
    }
  };
};

type Message =
  | { type: "answer"; answer: { questionId: number; answer: string } }
  | { type: "start" }
  | { type: "finish" };
