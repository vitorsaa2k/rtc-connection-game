import { createFileRoute } from "@tanstack/react-router";
import { Create } from "../pages/create/create";

export const Route = createFileRoute("/createGame")({
  component: RouteComponent,
});

// eslint-disable-next-line  react-refresh/only-export-components
function RouteComponent() {
  return <Create />;
}
