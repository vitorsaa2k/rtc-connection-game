import { createFileRoute } from "@tanstack/react-router";
import { Game } from "../pages/game/game";
import { GameGuard } from "../pages/game/components/gameGuard/gameGuard";

export const Route = createFileRoute("/game")({
  component: () => (
    <GameGuard>
      <Game />
    </GameGuard>
  ),
});
