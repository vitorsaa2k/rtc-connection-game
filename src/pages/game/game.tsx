import { useGameState } from "../../hooks/useGameState";
import { Question } from "./components/question/question";
import "./game.css";

export function Game() {
  const [state] = useGameState();
  console.log(state.answers);
  return (
    <div className="game_container">
      <Question />
    </div>
  );
}
