import "./connectionState.css";
import { useRTC } from "../../hooks/useRTC";
import { WifiIcon } from "../icons/wifi";
import { Spinner } from "../icons/spinner";
import { useTranslation } from "react-i18next";

export function ConnectionState() {
  const { t } = useTranslation();
  const rtc = useRTC();
  return (
    <div className="connection_state_container">
      <div className="connection_state">
        {rtc.isConnected ? (
          <>
            <WifiIcon className="connection_state_wifi_icon" />{" "}
            <p>{t("connectionState.connected")}</p>
          </>
        ) : (
          <>
            <Spinner
              style={{
                width: 10,
                padding: 3,
                background: "var(--foreground-color)",
              }}
            />
            <p>{t("connectionState.connectionStateWaiting")}</p>
          </>
        )}
      </div>
    </div>
  );
}
