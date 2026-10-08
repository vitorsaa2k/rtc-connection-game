import { useState } from "react";
import { ConnectionState } from "../../components/connectionState/connectionState";
import { PasteAnswer } from "./components/pasteAnswer";
import { StartGame } from "./components/startGame";
import "./connect.css";

export function Connenct() {
  const [isStarting, setIsStarting] = useState<boolean>(false);
  return (
    <main>
      <ConnectionState />
      {isStarting ? (
        <div className="connection_form_container">
          <StartGame />
        </div>
      ) : (
        <PasteAnswer setIsStarting={setIsStarting} />
      )}
    </main>
  );
}
