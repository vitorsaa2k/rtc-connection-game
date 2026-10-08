import { Link } from "@tanstack/react-router";
import "./pasteOffer.css";
import { useState, type Dispatch, type SetStateAction } from "react";
import { useRTC } from "../../../hooks/useRTC";
import { extractSearchParamsFromURL } from "../../../utils/extractParamsFromURL";
import { base64UrlDecode, base64UrlEncode } from "../../../utils/base64";

export function PasteOffer({
  setIsJoining,
  setEncodedAnswer,
}: {
  setIsJoining: Dispatch<SetStateAction<boolean>>;
  setEncodedAnswer: Dispatch<SetStateAction<string>>;
}) {
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
        <h1>Got an invite link?</h1>
        <p className="paste_offer_desc">
          Open the link your friend sent you, or paste it below to join their
          game.
        </p>
      </div>
      <textarea
        onChange={(e) => setReceivedOffer(e.currentTarget.value)}
        className="paste_offer_input"
        placeholder="Paste your friend's invite link here"
        rows={6}
      />
      <button
        onClick={submitOffer}
        className="paste_offer_button"
        disabled={isGeneratingAnswer}
      >
        Continue
      </button>
      <Link className="paste_offer_back_button" to="/">
        Back to start
      </Link>
    </div>
  );
}
