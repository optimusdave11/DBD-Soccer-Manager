import Modal from "../Modal/Modal";
import FMButton from "../FMButton/FMButton";

import "./ConfirmDialog.css";

interface Props {
  open: boolean;
  title: string;
  message: string;

  confirmText?: string;
  cancelText?: string;

  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  open,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: Props) {
  return (
    <Modal
      open={open}
      title={title}
    >
      <p className="confirm-message">
        {message}
      </p>

      <div className="confirm-actions">

        <FMButton
          text={cancelText}
          onClick={onCancel}
        />

        <FMButton
          text={confirmText}
          onClick={onConfirm}
        />

      </div>

    </Modal>
  );
}