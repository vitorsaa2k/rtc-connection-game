import { CopyIcon } from "../../../../components/icons/copy";
import "./copyLink.css";
import { LinkIcon } from "./linkIcon";

export function CopyLink({ generatedLink }: { generatedLink: string }) {
  return (
    <div className="copy_link_container">
      <p className="copy_link_title">Send this link to your friend.</p>
      <div className="copy_link_input_container">
        <LinkIcon />
        <input
          className="copy_link_input"
          type="text"
          value={generatedLink}
          disabled
        />
      </div>
      <button className="copy_link_button">
        <CopyIcon />
        Copy link
      </button>
    </div>
  );
}
