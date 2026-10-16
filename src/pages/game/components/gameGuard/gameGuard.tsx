import { useGameState } from "../../../../hooks/useGameState";
import { useRTC } from "../../../../hooks/useRTC";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Spinner } from "../../../../components/icons/spinner";
import "./gameGuard.css";

export function GameGuard({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useGameState();
  const { isConnected, closeConnection } = useRTC();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      dispatch({ type: "RESET" });
      closeConnection();
      navigate({ to: "/create" });
    }
  }, [isConnected, navigate, dispatch, closeConnection]);

  if (!isConnected) {
    return null;
  }

  if (!state.started) {
    return (
      <div className="game_guard_waiting">
        <Spinner style={{ width: 32, height: 32 }} />
        <p>Waiting for host to start...</p>
      </div>
    );
  }

  return <>{children}</>;
}
