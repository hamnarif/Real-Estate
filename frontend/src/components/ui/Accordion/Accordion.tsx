import { useState } from 'react';

type AccordionProps = { title: string; children?: React.ReactNode };

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  return (
    <section className={"accordion"}>
      <button onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {title}
      </button>
      {open && <div className={"panel"}>{children}</div>}
    </section>
  );
}


