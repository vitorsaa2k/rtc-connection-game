import { Link } from "@tanstack/react-router";
import "./pasteOffer.css";

export function PasteOffer() {
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
        className="paste_offer_input"
        placeholder="Paste your friend's invite link here"
        rows={6}
      />
      <button className="paste_offer_button">Continue</button>
      <Link className="paste_offer_back_button" to="/">
        Back to start
      </Link>
    </div>
  );
}
