import { Link } from "@tanstack/react-router";
import "./index.css";
import { Card } from "./card";
import { ShieldIcon } from "../../components/icons/shield";
import { LinkIcon } from "../../components/icons/link";
import { UsersIcon } from "../../components/icons/users";
import { useTranslation } from "react-i18next";

export function Index() {
  const { t } = useTranslation();
  return (
    <main>
      <div className="home_container">
        <div className="home_title_container">
          <p className="home_title">{t("home.homeTitle")}</p>
          <p className="home_desc">{t("home.homeDesc")}</p>
        </div>
        <div className="initial_game_buttons_container">
          <Link to="/create" className="create_game_button">
            {t("home.homeCreateButton")}
          </Link>
          <Link to="/join" className="join_game_button">
            {t("home.homeJoinButton")}
          </Link>
        </div>
        <div className="cards_container">
          <Card
            icon={<ShieldIcon />}
            title={t("home.noAccountCardTitle")}
            description={t("home.noAccountCardDesc")}
          />
          <Card
            icon={<LinkIcon className="card_icon" />}
            title={t("home.justLinkCardTitle")}
            description={t("home.justLinkCardDesc")}
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
