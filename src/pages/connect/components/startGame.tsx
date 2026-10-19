import { useNavigate } from "@tanstack/react-router";
import { useRTC } from "../../../hooks/useRTC";
import "./startGame.css";
import { useGameState } from "../../../hooks/useGameState";
import { useTranslation } from "react-i18next";

export function StartGame() {
  const { t } = useTranslation();
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
        <p className="start_game_title">{t("connect.startGameTitle")}</p>
        <p className="start_game_desc">{t("connect.startGameDesc")}</p>
      </div>
      <button onClick={start} className="start_game_button">
        {t("connect.startGameButton")}
      </button>
    </div>
  );
}
