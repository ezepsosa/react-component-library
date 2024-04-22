import "../components.scss";

export default function Badge({
  isSquared,
  text,
  color,
}: {
  isSquared: boolean;
  text: string;
  color: string;
}) {
  color = ["warning", "danger", "success", "info"].includes(color)
    ? color
    : `custom-${color}`;
  const badgeclasses = isSquared
    ? `badge-${color} badge-pill`
    : `badge-${color}`;

  return <span className={badgeclasses}>{text}</span>;
}
