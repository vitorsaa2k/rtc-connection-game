import { useRTC } from "../../../../hooks/useRTC";
import "./connectionDetails.css";
import { useTranslation } from "react-i18next";

export function ConnectionDetails() {
  const { t } = useTranslation();
  const rtc = useRTC();
  return (
    <details className="connection_details_container">
      <summary className="connection_details_button">
        {t("createForm.advancedConnectionDetails")}
      </summary>
      <dl className="details_list">
        <div className="details_item">
          <dt>connectionState</dt>
          <dd>{rtc.peer.current?.connectionState}</dd>
        </div>
        <div className="details_item">
          <dt>iceConnectionState</dt>
          <dd>{rtc.peer.current?.iceConnectionState}</dd>
        </div>
        <div className="details_item">
          <dt>iceGatheringState</dt>
          <dd>{rtc.peer.current?.iceGatheringState}</dd>
        </div>
        <div className="details_item">
          <dt>signalingState</dt>
          <dd>{rtc.peer.current?.signalingState}</dd>
        </div>
      </dl>
    </details>
  );
}
