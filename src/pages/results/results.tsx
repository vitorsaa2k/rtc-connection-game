import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useGameState } from "../../hooks/useGameState";
import { useRTC } from "../../hooks/useRTC";
import { questions } from "../../data/questions";
import { Spinner } from "../../components/icons/spinner";
import { CheckIcon } from "../../components/icons/check";
import { XIcon } from "../../components/icons/x";
import "./results.css";
import { useTranslation } from "react-i18next";

export function Results() {
  const { t } = useTranslation();
  const [state, dispatch] = useGameState();
  const navigate = useNavigate();
  const { isConnected, closeConnection } = useRTC();

  useEffect(() => {
    if (isConnected && state.totalAnswered < questions.length) {
      navigate({ to: "/game" });
    }
  }, [isConnected, state.totalAnswered, navigate]);

  async function goHome() {
    await navigate({ to: "/" });
    closeConnection();
    dispatch({ type: "RESET" });
  }

  if (state.totalAnswered < questions.length) return null;

  if (!state.finished) {
    return (
      <div className="results_waiting">
        <Spinner style={{ width: 32, height: 32 }} />
        <p>{t("results.resultsWaiting")}</p>
      </div>
    );
  }

  const results = questions.map((question, i) => {
    const ownAnswerIndex = state.answers[i]?.answerIndex;
    const friendAnswerIndex = state.player2Answers[i]?.answerIndex;
    const ownAnswer =
      ownAnswerIndex === undefined
        ? ""
        : t(`questions.${question.questionId}.options.${ownAnswerIndex}`);
    const friendAnswer =
      friendAnswerIndex === undefined
        ? ""
        : t(`questions.${question.questionId}.options.${friendAnswerIndex}`);
    return {
      question: t(`questions.${question.questionId}.question`),
      ownAnswer,
      friendAnswer,
      matched:
        ownAnswerIndex !== undefined && ownAnswerIndex === friendAnswerIndex,
    };
  });
  const score = results.filter((result) => result.matched).length;

  return (
    <div className="results_container">
      <div className="results_score_container">
        <p className="results_score">
          {score} / {results.length}
        </p>
        <p className="results_score_label">{t("results.answersMatched")}</p>
        <button onClick={goHome} className="home_button">
          {t("results.homeButton")}
        </button>
      </div>
      <div className="results_list">
        {results.map((result, i) => (
          <div
            key={`${result.question}/${i}`}
            className={`result_card ${result.matched ? "matched_result" : "mismatched_result"}`}
          >
            {result.matched ? (
              <CheckIcon width={20} height={20} className="result_icon" />
            ) : (
              <XIcon width={20} height={20} className="result_icon" />
            )}
            <p className="result_question">{result.question}</p>
            <div className="result_answers">
              <p className="result_answer">
                <span className="result_answer_label">
                  {t("results.youLabel")}
                </span>{" "}
                {result.ownAnswer}
              </p>
              <p className="result_answer">
                <span className="result_answer_label">
                  {t("results.friendLabel")}
                </span>{" "}
                {result.friendAnswer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
