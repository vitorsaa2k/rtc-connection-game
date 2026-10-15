import type { ComponentProps } from "react";

export function Header(props: ComponentProps<"div">) {
  return (
    <div>
      <p className="question_title">{props.children}</p>
    </div>
  );
}
