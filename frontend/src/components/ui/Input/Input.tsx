type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className={"input"}>
      {label && <span>{label}</span>}
      <input {...props} />
    </label>
  );
}


