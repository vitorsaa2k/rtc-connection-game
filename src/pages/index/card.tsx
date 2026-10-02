import type { ReactNode } from "react";

export function Card({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card">
      <div className="card_title_container">
        {icon}
        <p className="card_title">{title}</p>
      </div>
      {description}
    </div>
  );
}
