import { useState } from "react";
import { CopyIcon } from "../../../../components/icons/copy";
import "./copyLink.css";
import { CheckIcon } from "../../../../components/icons/check";
import { LinkIcon } from "../../../../components/icons/link";

export function CopyLink({ generatedLink }: { generatedLink: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  async function copyLinkToClipboard() {
    try {
      await navigator.clipboard.writeText(generatedLink);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }
  }
  return (
    <div className="copy_link_container">
      <div className="copy_link_top">
        <p className="copy_link_title">Send this link to your friend.</p>
        <div className="copy_link_input_container">
          <LinkIcon
            className="copy_link_input_link_icon"
            viewBox="0 0 256 220"
          />
          <input
            className="copy_link_input"
            type="text"
            value={generatedLink}
            disabled
          />
        </div>
      </div>
      <button className="copy_link_button" onClick={copyLinkToClipboard}>
        {isCopied ? (
          <>
            <CheckIcon className="copy_link_check_icon" /> Copied!
          </>
        ) : (
          <>
            <CopyIcon className="copy_link_copy_icon" />
            Copy link
          </>
        )}
      </button>
    </div>
  );
}
