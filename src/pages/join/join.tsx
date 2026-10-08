import { useState } from "react";
import "./join.css";
import { PasteOffer } from "./components/pasteOffer";
import { CopyAnswer } from "./components/copyAnswer/copyAnswer";
import { ConnectionState } from "../../components/connectionState/connectionState";

export function Join() {
  const [isJoining, setIsJoining] = useState<boolean>(false);
  const [encodedAnswer, setEncodedAnswer] = useState<string>("");
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
