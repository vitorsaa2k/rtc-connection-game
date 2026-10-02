import "./connectionDetails.css";

export function ConnectionDetails() {
  return (
    <details className="connection_details_container">
      <summary className="connection_details_button">
        Advanced connection details
      </summary>
      <dl className="details_list">
        <div className="details_item">
          <dt>connectionState</dt>
          <dd>new</dd>
        </div>
        <div className="details_item">
          <dt>iceConnectionState</dt>
          <dd>new</dd>
        </div>
        <div className="details_item">
          <dt>iceGatheringState</dt>
          <dd>new</dd>
        </div>
        <div className="details_item">
          <dt>signalingState</dt>
          <dd>new</dd>
        </div>
        <div className="details_item">
          <dt>dataChannel</dt>
          <dd>new</dd>
        </div>
        <div className="details_item">
          <dt>localCandidates</dt>
          <dd>new</dd>
        </div>
      </dl>
    </details>
  );
}
