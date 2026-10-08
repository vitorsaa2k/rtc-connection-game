import "./copyLink.css";
import { LinkIcon } from "../../../../components/icons/link";
import { CopyIcon } from "../../../../components/icons/copy";

export function CopyLink({ generatedLink }: { generatedLink: string }) {
  return (
    <div className="copy_link_container">
      <div className="copy_link">
        <p className="copy_link_title">Send this answer back to your friend.</p>
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
      <button className="copy_link_button">
        <CopyIcon className="copy_link_copy_icon" /> Copy link
      </button>
      <button className="copy_answer_data_button">
        <CopyIcon className="copy_link_copy_icon" />
        Copy answer data
      </button>
    </div>
  );
}
