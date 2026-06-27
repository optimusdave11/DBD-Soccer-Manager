import "./Modal.css";

interface Props {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

export default function Modal({
  open,
  title,
  children,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        {title && <h2>{title}</h2>}

        <div className="modal-content">
          {children}
        </div>

        {onClose && (
          <button
            className="modal-close"
            onClick={onClose}
          >
            Close
          </button>
        )}

      </div>

    </div>
  );
}