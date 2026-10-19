import { Link } from "@tanstack/react-router";
import "./pasteOffer.css";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useRTC } from "../../../hooks/useRTC";
import { extractSearchParamsFromURL } from "../../../utils/extractParamsFromURL";
import { base64UrlDecode, base64UrlEncode } from "../../../utils/base64";
import { useTranslation } from "react-i18next";

export function PasteOffer({
  setIsJoining,
  setEncodedAnswer,
}: {
  setIsJoining: Dispatch<SetStateAction<boolean>>;
  setEncodedAnswer: Dispatch<SetStateAction<string>>;
}) {
  const { t } = useTranslation();
  const [receivedOffer, setReceivedOffer] = useState<string>("");
  const [isGeneratingAnswer, setIsGeneratingAnswer] = useState<boolean>(false);

  const rtc = useRTC();

  async function submitOffer() {
    let offerString;
    if (receivedOffer.includes("http")) {
      const [offer] = extractSearchParamsFromURL(receivedOffer, ["offer"]);
      offerString = base64UrlDecode(offer);
    } else {
      offerString = base64UrlDecode(receivedOffer);
    }

    setIsGeneratingAnswer(true);
    const answer = await rtc.createAnswer(
      JSON.parse(offerString) as RTCSessionDescriptionInit,
    );
    setEncodedAnswer(base64UrlEncode(JSON.stringify(answer)));
    setIsGeneratingAnswer(false);
    setIsJoining(true);
  }
  return (
    <div className="paste_offer_container">
      <div className="paste_offer_header">
        <h1>{t("join.pasteOfferTitle")}</h1>
        <p className="paste_offer_desc">{t("join.pasteOfferDesc")}</p>
      </div>
      <textarea
        onChange={(e) => setReceivedOffer(e.currentTarget.value)}
        className="paste_offer_input"
        placeholder={t("join.pasteOfferPlaceholder")}
        rows={6}
      />
      <button
        onClick={submitOffer}
        className="paste_offer_button"
        disabled={isGeneratingAnswer}
      >
        {t("join.pasteOfferButton")}
      </button>
      <Link className="paste_offer_back_button" to="/">
        {t("join.backToStart")}
      </Link>
    </div>
  );
}
