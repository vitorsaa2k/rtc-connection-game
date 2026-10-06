import { useState } from "react";
import "./create.css";
import { CreateForm } from "./createForm/createForm";
import { useRTC } from "../../hooks/useRTC";
import { base64UrlEncode } from "../../utils/base64";
import { Link } from "@tanstack/react-router";
import { ConnectionState } from "../../components/connectionState/connectionState";

export function Create() {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isGeneratingOffer, setIsGeneratingOffer] = useState<boolean>(false);
  const [encodedOffer, setEncodedOffer] = useState<string>("");
  const rtc = useRTC();

  async function createRoom() {
    setIsGeneratingOffer(true);
    const offer = await rtc.createOffer();
    setIsGeneratingOffer(false);
    const encodedOffer = base64UrlEncode(JSON.stringify(offer));
    setEncodedOffer(encodedOffer);
    setIsCreating(true);
  }

  return (
    <main>
      <div className="outsite_container">
        {isCreating && <ConnectionState />}
        {isCreating ? (
          <div className="game_form_container">
            <CreateForm encodedOffer={encodedOffer} />
          </div>
        ) : (
          <div className="game_form_container">
            <div className="game_title_container">
              <p className="title">Create Game</p>
              <p className="desc">
                We'll set up a private room in your browser and give you a link
                to send to your friend.
              </p>
            </div>
            <button
              onClick={createRoom}
              className="create_room_button"
              disabled={isGeneratingOffer}
            >
              Create Room
            </button>
            <p className="keep_open_warn">
              Keep this tab open while your friend joins.
            </p>
          </div>
        )}
        <Link className="cancel_button" to="/">
          Cancel
        </Link>
      </div>
    </main>
  );
}
