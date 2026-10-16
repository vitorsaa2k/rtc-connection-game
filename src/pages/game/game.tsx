import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useGameState } from "../../hooks/useGameState";
import { Question } from "./components/question/question";
import { ProgressBar } from "./components/progressBar/progressBar";
import "./game.css";
import { questions } from "../../data/questions";

export function Game() {
  const [state] = useGameState();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.totalAnswered >= questions.length) {
      navigate({ to: "/results" });
    }
  }, [state.totalAnswered, navigate]);

  if (state.totalAnswered >= questions.length) return null;
  return (
    <div className="game_container">
      <ProgressBar />
      <Question />
    </div>
  );
}
