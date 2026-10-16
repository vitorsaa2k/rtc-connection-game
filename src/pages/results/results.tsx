import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useGameState } from "../../hooks/useGameState";
import { questions } from "../../data/questions";
import { Spinner } from "../../components/icons/spinner";
import { CheckIcon } from "../../components/icons/check";
import { XIcon } from "../../components/icons/x";
import "./results.css";

export function Results() {
  const [state] = useGameState();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.totalAnswered < questions.length) {
      navigate({ to: "/game" });
    }
  }, [state.totalAnswered, navigate]);

  if (state.totalAnswered < questions.length) return null;

  if (!state.finished) {
    return (
      <div className="results_waiting">
        <Spinner style={{ width: 32, height: 32 }} />
        <p>Waiting for your friend to finish...</p>
      </div>
    );
  }

  const results = questions.map((question, i) => {
    const ownAnswer = state.answers[i]?.answer ?? "";
    const friendAnswer = state.player2Answers[i]?.answer ?? "";
    return {
      question: question.question,
      ownAnswer,
      friendAnswer,
      matched: ownAnswer === friendAnswer,
    };
  });
  const score = results.filter((result) => result.matched).length;

  return (
    <div className="results_container">
      <div className="results_score_container">
        <p className="results_score">
          {score} / {results.length}
        </p>
        <p className="results_score_label">answers matched</p>
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
                <span className="result_answer_label">You:</span>{" "}
                {result.ownAnswer}
              </p>
              <p className="result_answer">
                <span className="result_answer_label">Friend:</span>{" "}
                {result.friendAnswer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
