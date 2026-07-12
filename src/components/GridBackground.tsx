export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(79,142,247,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(79,142,247,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
