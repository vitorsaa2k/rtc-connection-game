import { useGameState } from "../../hooks/useGameState";
import { Question } from "./components/question/question";
import { ProgressBar } from "./components/progressBar/progressBar";
import "./game.css";

export function Game() {
  const [state] = useGameState();
  console.log(state.answers);
  return (
    <div className="game_container">
      <ProgressBar />
      <Question />
    </div>
  );
}
