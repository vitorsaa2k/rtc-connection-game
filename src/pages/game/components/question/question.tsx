import { useState } from "react";
import { questions } from "../../../../data/questions";
import { useGameState } from "../../../../hooks/useGameState";
import { useRTC } from "../../../../hooks/useRTC";
import { Header } from "./header";
import "./question.css";
import { CheckIcon } from "../../../../components/icons/check";
import { RightArrowIcon } from "../../../../components/icons/right";
import { useTranslation } from "react-i18next";

export function Question() {
  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
  const [state, dispatch] = useGameState();
  const rtc = useRTC();
  const currentQuestion = questions[state.totalAnswered];
  function selectAnswer(index: number) {
    setSelectedAnswer(index);
  }
  function submitAnswer() {
    if (selectedAnswer === null) return console.warn("Select an answer first");
    const answer = {
      questionId: currentQuestion.questionId,
      answerIndex: selectedAnswer,
    };
    dispatch({
      type: "ANSWER",
      payload: answer,
    });
    dispatch({ type: "INCREASE_TOTAL_ANSWERED" });
    rtc.sendMessage(JSON.stringify({ type: "answer", answer }));
    if (state.totalAnswered + 1 >= questions.length) {
      rtc.sendMessage(JSON.stringify({ type: "finish" }));
    }
    setSelectedAnswer(null);
  }
  return (
    <div className="question_container">
      <Header className="question_header">
        {t(`questions.${currentQuestion.questionId}.question`)}
      </Header>
      <div className="options_container">
        {Array.from({ length: currentQuestion.optionsCount }, (_, i) => (
          <button
            onClick={() => selectAnswer(i)}
            className={`option_button ${i === selectedAnswer && "selected_option"}`}
            key={`${state.totalAnswered}/${i}`}
          >
            <CheckIcon
              width={20}
              height={20}
              className={`option_check_icon ${i === selectedAnswer && "show_check_icon"}`}
            />
            {t(`questions.${currentQuestion.questionId}.options.${i}`)}
          </button>
        ))}
      </div>
      <button onClick={submitAnswer} className="send_button">
        {t("game.sendButton")} <RightArrowIcon viewBox="0 0 256 256" />
      </button>
    </div>
  );
}
