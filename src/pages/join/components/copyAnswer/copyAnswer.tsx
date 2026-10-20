import { useState } from "react";
import { CheckIcon } from "../../../../components/icons/check";
import { CopyIcon } from "../../../../components/icons/copy";
import "./copyAnswer.css";
import { CopyLink } from "./copyLink";
import { CopyAnswerHeader } from "./header";
import { useRTC } from "../../../../hooks/useRTC";
import { useTranslation } from "react-i18next";

export function CopyAnswer({ encodedAnswer }: { encodedAnswer: string }) {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const rtc = useRTC();

  async function copyAnswerToClipboard() {
    try {
      await navigator.clipboard.writeText(encodedAnswer);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }
  }
  return (
    <div className="copy_answer_container">
      {rtc.isConnected ? (
        <div className="awaiting_header">
          <h1>{t("join.copyAnswerAllSetTitle")}</h1>
          <p>{t("join.copyAnswerAllSetDesc")}</p>
        </div>
      ) : (
        <>
          <CopyAnswerHeader />
          <CopyLink
            generatedLink={`${window.location.protocol}//${window.location.host}/${window.location.href.includes("rtc-connection-game") && "rtc-connection-game/"}connect#answer=${encodedAnswer}`}
          />
          <button
            onClick={copyAnswerToClipboard}
            className="copy_answer_data_button"
          >
            {isCopied ? (
              <>
                <CheckIcon className="copy_link_check_icon" />{" "}
                {t("join.dataCopied")}
              </>
            ) : (
              <>
                <CopyIcon className="copy_link_copy_icon" />
                {t("join.copyAnswerDataButton")}
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}
