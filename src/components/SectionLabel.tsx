interface Props {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: Props) {
  return (
    <p className="section-label font-mono-custom text-xs text-brand-cyan tracking-widest uppercase mb-3">
      {number} — {label}
    </p>
  );
}
