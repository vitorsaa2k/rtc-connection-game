import { createFileRoute } from "@tanstack/react-router";
import { Join } from "../pages/join/join";

export const Route = createFileRoute("/join")({
  component: Join,
});
