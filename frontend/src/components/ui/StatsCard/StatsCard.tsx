type StatsCardProps = { title: string; value: string | number; subtitle?: string };

export default function StatsCard({ title, value, subtitle }: StatsCardProps) {
  return (
    <section className={"statsCard"}>
      <h3>{title}</h3>
      <strong>{value}</strong>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}


