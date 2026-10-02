import { Link } from "@tanstack/react-router";
import "./index.css";
import { Card } from "./card";
import { ShieldIcon } from "../../components/icons/shield";
import { LinkIcon } from "../../components/icons/link";
import { UsersIcon } from "../../components/icons/users";

export function Index() {
  return (
    <main>
      <div className="home_container">
        <div className="home_title_container">
          <p className="home_title">How well do you know your friend?</p>
          <p className="home_desc">
            One answer the questions honestly, the other try to guess what the
            other one picked. The score tells the truth.
          </p>
        </div>
        <div className="initial_game_buttons_container">
          <Link to="/createGame" className="create_game_button">
            Create Game
          </Link>
          <Link to="/about" className="join_game_button">
            Join Game
          </Link>
        </div>
        <div className="cards_container">
          <Card
            icon={<ShieldIcon />}
            title="No account"
            description="Nothing to sign up for, nothing stored anywhere."
          />
          <Card
            icon={<LinkIcon />}
            title="Just a link"
            description="Create a game and send the link to your friend."
          />
          <Card
            icon={<UsersIcon />}
            title="Peer-to-peer"
            description="Your two browsers talk directly to each other."
          />
        </div>
        <p className="home_footer_text">
          This game runs entirely in your browsers over a direct peer-to-peer
          connection. No server keeps your answers.
        </p>
      </div>
    </main>
  );
}
