type ModalProps = {
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div className={"modal"} role="dialog" aria-modal>
      <div className={"modalContent"}>
        <button aria-label="Close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}


