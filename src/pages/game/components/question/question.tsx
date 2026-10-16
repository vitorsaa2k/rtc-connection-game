import { useState } from "react";
import { questions } from "../../../../data/questions";
import { useGameState } from "../../../../hooks/useGameState";
import { useRTC } from "../../../../hooks/useRTC";
import { Header } from "./header";
import "./question.css";
import { CheckIcon } from "../../../../components/icons/check";
import { RightArrowIcon } from "../../../../components/icons/right";

export function Question() {
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
  const [state, dispatch] = useGameState();
  const rtc = useRTC();
  function selectAnswer(index: number) {
    setSelectedAnswer(index);
  }
  function submitAnswer() {
    if (selectedAnswer === null) return console.warn("Select an answer first");
    const selectedOption =
      questions[state.totalAnswered].options[selectedAnswer];
    const answer = {
      questionId: state.totalAnswered + 1,
      answer: selectedOption,
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
        {questions[state.totalAnswered].question}
      </Header>
      <div className="options_container">
        {questions[state.totalAnswered].options.map((option, i) => (
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
            {option}
          </button>
        ))}
      </div>
      <button onClick={submitAnswer} className="send_button">
        Send <RightArrowIcon viewBox="0 0 256 256" />
      </button>
    </div>
  );
}
