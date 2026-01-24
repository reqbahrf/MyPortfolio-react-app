export default function WarpViewport({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id='warp-viewport'
      style={{
        position: 'fixed',
        inset: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
        zIndex: 0,
      }}
    >
      {children}
    </div>
  );
}
