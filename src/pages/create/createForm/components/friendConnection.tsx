import { RightArrowIcon } from "../../../../components/icons/right";
import "./friendConnection.css";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export function FriendConnection() {
  const { t } = useTranslation();
  return (
    <div className="friend_connection_container">
      <div className="friend_connection_header">
        <p className="friend_connection_title">
          {t("createForm.friendConnectionTitle")}
        </p>
        <p className="friend_connection_desc">
          {t("createForm.friendConnectionDesc")}
        </p>
      </div>
      <Link to="/connect" className="friend_connection_button">
        {t("createForm.friendConnectionButton")}
        <RightArrowIcon />
      </Link>
    </div>
  );
}
