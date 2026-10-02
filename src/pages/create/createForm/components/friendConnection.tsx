import { RightArrowIcon } from "../../../../components/icons/right";
import "./friendConnection.css";
import { Link } from "@tanstack/react-router";

export function FriendConnection() {
  return (
    <div className="friend_connection_container">
      <div className="friend_connection_header">
        <p className="friend_connection_title">
          Waiting for your friend to connect...
        </p>
        <p className="friend_connection_desc">
          When they send their answer back, open it or paste it on the connect
          screen
        </p>
      </div>
      <Link to="/" className="friend_connection_button">
        I have my friend's answer
        <RightArrowIcon />
      </Link>
    </div>
  );
}
