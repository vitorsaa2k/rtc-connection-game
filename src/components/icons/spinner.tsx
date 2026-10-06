import "../../App.css";
import type { SpinnerProps } from "../../types/componentTypes";

export function Spinner(props: SpinnerProps) {
  return <div {...props} className="loader"></div>;
}
