import { useState } from "react";
import { CheckIcon } from "../../../../components/icons/check";
import { CopyIcon } from "../../../../components/icons/copy";
import "./copyAnswer.css";
import { CopyLink } from "./copyLink";
import { CopyAnswerHeader } from "./header";

export function CopyAnswer({ encodedAnswer }: { encodedAnswer: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

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
      <CopyAnswerHeader />
      <CopyLink
        generatedLink={`${window.location.protocol}//${window.location.host}/connect#answer=${encodedAnswer}`}
      />
      <button
        onClick={copyAnswerToClipboard}
        className="copy_answer_data_button"
      >
        {isCopied ? (
          <>
            <CheckIcon className="copy_link_check_icon" /> Data has been copied!
          </>
        ) : (
          <>
            <CopyIcon className="copy_link_copy_icon" />
            Copy answer data
          </>
        )}
      </button>
    </div>
  );
}
