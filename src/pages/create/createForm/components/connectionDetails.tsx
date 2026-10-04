import { useRTC } from "../../../../hooks/useRTC";
import "./connectionDetails.css";

export function ConnectionDetails() {
  const rtc = useRTC();
  return (
    <details className="connection_details_container">
      <summary className="connection_details_button">
        Advanced connection details
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
