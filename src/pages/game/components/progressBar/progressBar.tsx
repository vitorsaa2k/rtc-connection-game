import { questions } from "../../../../data/questions";
import { useGameState } from "../../../../hooks/useGameState";
import "./progressBar.css";
import { useTranslation } from "react-i18next";

export function ProgressBar() {
  const { t } = useTranslation();
  const [state] = useGameState();
  const totalQuestions = questions.length;
  const currentQuestion = state.totalAnswered + 1;
  const progress = (state.totalAnswered / totalQuestions) * 100;

  return (
    <div className="progress_bar_container">
      <p className="progress_text">
        {t("game.progressText", {
          current: currentQuestion,
          total: totalQuestions,
        })}
      </p>
      <div className="progress_bar_track">
        <div className="progress_bar_fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}