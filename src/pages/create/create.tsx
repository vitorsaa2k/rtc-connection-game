import { useState } from "react";
import "./create.css";
import { CreateForm } from "./createForm/createForm";
import { useRTC } from "../../hooks/useRTC";
import { base64UrlEncode } from "../../utils/base64";
import { Link } from "@tanstack/react-router";
import { ConnectionState } from "../../components/connectionState/connectionState";
import { useTranslation } from "react-i18next";

export function Create() {
  const { t } = useTranslation();
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
              <p className="title">{t("create.createInitialTitle")}</p>
              <p className="desc">{t("create.createInitialDesc")}</p>
            </div>
            <button
              onClick={createRoom}
              className="create_room_button"
              disabled={isGeneratingOffer}
            >
              {t("create.createInitialButton")}
            </button>
            <p className="keep_open_warn">
              {t("create.createInitialFooter")}
            </p>
          </div>
        )}
        <Link className="cancel_button" to="/">
          {t("create.createCancelButton")}
        </Link>
      </div>
    </main>
  );
}
