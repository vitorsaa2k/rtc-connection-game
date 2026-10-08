import { createFileRoute } from "@tanstack/react-router";
import { Connenct } from "../pages/connect/connect";

export const Route = createFileRoute("/connect")({
  component: Connenct,
});
