import { createFileRoute } from "@tanstack/react-router";
import { Game } from "../pages/game/game";

export const Route = createFileRoute("/game")({
  component: Game,
});
