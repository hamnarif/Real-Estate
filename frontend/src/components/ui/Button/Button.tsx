type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { label?: string };

export default function Button({ label = 'Button', ...props }: ButtonProps) {
  return (
    <button className={"button"} {...props}>
      {label}
    </button>
  );
}


