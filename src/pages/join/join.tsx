import { useEffect, useState } from "react";
import "./join.css";
import { PasteOffer } from "./components/pasteOffer";
import { CopyAnswer } from "./components/copyAnswer/copyAnswer";
import { ConnectionState } from "../../components/connectionState/connectionState";
import { extractSearchParamsFromURL } from "../../utils/extractParamsFromURL";
import { base64UrlDecode, base64UrlEncode } from "../../utils/base64";
import { useRTC } from "../../hooks/useRTC";

export function Join() {
  const [isJoining, setIsJoining] = useState<boolean>(false);
  const [encodedAnswer, setEncodedAnswer] = useState<string>("");
  const rtc = useRTC();

  useEffect(() => {
    if (window.location.hash.includes("offer")) {
      const [offerEncoded] = extractSearchParamsFromURL(window.location.href, [
        "offer",
      ]);
      const offerString = base64UrlDecode(offerEncoded);
      const offer = JSON.parse(offerString) as RTCSessionDescriptionInit;
      rtc.createAnswer(offer).then((data) => {
        setEncodedAnswer(base64UrlEncode(JSON.stringify(data)));
        setIsJoining(true);
      });
    }
  }, [rtc]);
  return (
    <main>
      {isJoining && <ConnectionState />}
      <div className="join_form_container">
        {isJoining ? (
          <CopyAnswer encodedAnswer={encodedAnswer} />
        ) : (
          <PasteOffer
            setEncodedAnswer={setEncodedAnswer}
            setIsJoining={setIsJoining}
          />
        )}
      </div>
    </main>
  );
}
