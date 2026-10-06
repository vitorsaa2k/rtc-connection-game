import "./connectionState.css";
import { useRTC } from "../../hooks/useRTC";
import { WifiIcon } from "../icons/wifi";
import { Spinner } from "../icons/spinner";

export function ConnectionState() {
  const rtc = useRTC();
  return (
    <div className="connection_state_container">
      <div className="connection_state">
        {rtc.isConnected ? (
          <>
            <WifiIcon className="connection_state_wifi_icon" /> <p>Connected</p>
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
            <p>Waiting for your friend</p>
          </>
        )}
      </div>
    </div>
  );
}
