import { Link } from "@tanstack/react-router";
import "./pasteAnswer.css";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useRTC } from "../../../hooks/useRTC";
import { extractSearchParamsFromURL } from "../../../utils/extractParamsFromURL";
import { base64UrlDecode } from "../../../utils/base64";
export function PasteAnswer({
  setIsStarting,
}: {
  setIsStarting: Dispatch<SetStateAction<boolean>>;
}) {
  const [answer, setAnswer] = useState<string>("");
  const rtc = useRTC();
  async function connect() {
    let answerString;
    if (answer.includes("http")) {
      const [encodedAnswer] = extractSearchParamsFromURL(answer, ["answer"]);
      answerString = encodedAnswer;
    } else {
      answerString = answer;
    }
    if (rtc.peer.current) {
      await rtc.peer.current.setRemoteDescription(
        JSON.parse(base64UrlDecode(answerString)) as RTCSessionDescriptionInit,
      );
      setIsStarting(true);
    }
  }
  return (
    <div className="connection_form_container">
      <div className="connection_form_title_container">
        <p className="connection_form_title">Connect to your friend</p>
        <p className="connection_form_title_desc">
          Open the answer link your friend sent, or paste their answer below.
        </p>
      </div>
      <label className="paste_answer_container">
        <p className="paste_answer_label">Paste your friend answer here</p>
        <textarea
          onChange={(e) => setAnswer(e.currentTarget.value)}
          className="paste_answer_input"
          rows={6}
          placeholder="Paste the answer link or answer data"
        />
      </label>
      <button onClick={connect} className="connect_button">
        Connect
      </button>
      <Link className="go_back_link" to="/create">
        Back to my room
      </Link>
    </div>
  );
}
