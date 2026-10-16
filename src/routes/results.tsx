import { createFileRoute } from "@tanstack/react-router";
import { Results } from "../pages/results/results";
import { GameGuard } from "../pages/game/components/gameGuard/gameGuard";

export const Route = createFileRoute("/results")({
  component: () => (
    <GameGuard>
      <Results />
    </GameGuard>
  ),
});
