interface ImportModalProps {
  open: boolean;
  onClose: () => void;
}

export function ImportModal({ open, onClose }: ImportModalProps) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Import data guide">
      <div className="modal glass">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <span className="eyebrow"><span /> Data pipeline</span>
        <h2>Safe way to make it “every car”.</h2>
        <p>
          The UI is ready for a big database. Do not copy full datasets from other commercial sites. Use licensed datasets, your own CSV/JSON, or public APIs like NHTSA vPIC for makes/models/VIN decoding.
        </p>
        <div className="code-card">
          <code>pnpm install</code>
          <code>pnpm import:vpic --year 2024 --makes Opel,Volkswagen,BMW</code>
          <code>pnpm dev</code>
        </div>
        <p className="muted">
          The importer writes JSON to <strong>public/imports/vpic-models.json</strong>. You can then map that into the richer schema in <strong>src/types.ts</strong>.
        </p>
      </div>
    </div>
  );
}
