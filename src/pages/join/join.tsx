import { useState } from "react";
import "./join.css";
import { PasteOffer } from "./components/pasteOffer";
import { useRTC } from "../../hooks/useRTC";

export function Join() {
  const [isJoining, setIsJoining] = useState<boolean>(false);
  const [isGeneratingAnswer, setIsGeneratingAnswer] = useState<boolean>(false);
  const [encodedAnswer, setEncodedAnswer] = useState<string>("");
  const rtc = useRTC();
  return (
    <main>
      <div className="join_form_container">
        <PasteOffer />
      </div>
    </main>
  );
}
