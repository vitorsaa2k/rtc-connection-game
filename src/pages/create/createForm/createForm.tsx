import "./createForm.css";
import { CopyLink } from "./components/copyLink";
import { FriendConnection } from "./components/friendConnection";
import { QRCode } from "./components/QRCode";
import { CreateFormTitle } from "./components/title";
import { CopyIcon } from "../../../components/icons/copy";
import { ConnectionDetails } from "./components/connectionDetails";
import { useState } from "react";
import { CheckIcon } from "../../../components/icons/check";
import { useTranslation } from "react-i18next";

export function CreateForm({ encodedOffer }: { encodedOffer: string }) {
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const offerLink = `${window.location.protocol}//${window.location.host}/join#offer=${encodedOffer}`;

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
      <CopyLink generatedLink={offerLink} />
      <QRCode offerLink={offerLink} />
      <FriendConnection />
      <button
        className="copy_invite_data_button"
        onClick={copyEncodedOfferToClipboard}
      >
        {isCopied ? (
          <>
            <CheckIcon className="copy_invite_data_check_icon" />{" "}
            {t("common.copied")}
          </>
        ) : (
          <>
            <CopyIcon className="copy_invite_data_copy_icon" />
            {t("createForm.copyInviteDataButton")}
          </>
        )}
      </button>
      <ConnectionDetails />
    </div>
  );
}
