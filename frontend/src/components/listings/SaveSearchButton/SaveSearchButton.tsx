type SaveSearchButtonProps = { onSave?: () => void };

export default function SaveSearchButton({ onSave }: SaveSearchButtonProps) {
  return (
    <button className={"saveSearchButton"} onClick={onSave}>
      Save Search
    </button>
  );
}


