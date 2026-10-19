import { Link } from "@tanstack/react-router";
import "./pasteAnswer.css";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useRTC } from "../../../hooks/useRTC";
import { extractSearchParamsFromURL } from "../../../utils/extractParamsFromURL";
import { base64UrlDecode } from "../../../utils/base64";
import { useTranslation } from "react-i18next";
export function PasteAnswer({
  setIsStarting,
}: {
  setIsStarting: Dispatch<SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();
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
        <p className="connection_form_title">{t("connect.connectTitle")}</p>
        <p className="connection_form_title_desc">
          {t("connect.connectDesc")}
        </p>
      </div>
      <label className="paste_answer_container">
        <p className="paste_answer_label">{t("connect.pasteAnswerLabel")}</p>
        <textarea
          onChange={(e) => setAnswer(e.currentTarget.value)}
          className="paste_answer_input"
          rows={6}
          placeholder={t("connect.pasteAnswerPlaceholder")}
        />
      </label>
      <button onClick={connect} className="connect_button">
        {t("connect.connectButton")}
      </button>
      <Link className="go_back_link" to="/create">
        {t("connect.backToRoom")}
      </Link>
    </div>
  );
}
