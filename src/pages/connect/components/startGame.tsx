import { useNavigate } from "@tanstack/react-router";
import { useRTC } from "../../../hooks/useRTC";
import "./startGame.css";
import { useGameState } from "../../../hooks/useGameState";

export function StartGame() {
  const [, dispatch] = useGameState();
  const navigate = useNavigate();
  const rtc = useRTC();
  async function start() {
    dispatch({ type: "START" });
    rtc.sendMessage(JSON.stringify({ type: "start" }));
    await navigate({
      to: "/game",
    });
  }
  return (
    <div className="start_game_container">
      <div className="start_game_header">
        <p className="start_game_title">You're connected! 🎉</p>
        <p className="start_game_desc">
          Both browsers are talking directly to each other. Let's play.
        </p>
      </div>
      <button onClick={start} className="start_game_button">
        Start Game
      </button>
    </div>
  );
}
