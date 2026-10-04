import "./createForm.css";
import { CopyLink } from "./components/copyLink";
import { FriendConnection } from "./components/friendConnection";
import { QRCode } from "./components/QRCode";
import { CreateFormTitle } from "./components/title";
import { CopyIcon } from "../../../components/icons/copy";
import { ConnectionDetails } from "./components/connectionDetails";
import { useState } from "react";
import { CheckIcon } from "../../../components/icons/check";

export function CreateForm({ encodedOffer }: { encodedOffer: string }) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  async function copyEncodedOfferToClipboard() {
    try {
      await navigator.clipboard.writeText(encodedOffer);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }
  }
  return (
    <div className="create_form_container">
      <CreateFormTitle />
      <CopyLink
        generatedLink={`${window.location.protocol}//${window.location.host}/join#offer=${encodedOffer}`}
      />
      <QRCode />
      <FriendConnection />
      <button
        className="copy_invite_data_button"
        onClick={copyEncodedOfferToClipboard}
      >
        {isCopied ? (
          <>
            <CheckIcon /> Copied!
          </>
        ) : (
          <>
            <CopyIcon />
            Copy invite data instead
          </>
        )}
      </button>
      <ConnectionDetails />
    </div>
  );
}
