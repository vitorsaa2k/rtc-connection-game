import { useGameState } from "../../hooks/useGameState";
import { Question } from "./components/question/question";
import { ProgressBar } from "./components/progressBar/progressBar";
import "./game.css";
import { questions } from "../../data/questions";

export function Game() {
  const [state] = useGameState();
  console.log(state.answers);
  if (state.totalAnswered >= questions.length) return <div></div>;
  return (
    <div className="game_container">
      <ProgressBar />
      <Question />
    </div>
  );
}
