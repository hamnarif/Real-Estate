import { useState } from 'react';

type Tab = { id: string; label: string; content: React.ReactNode };
type TabsProps = { tabs: Tab[]; initialId?: string };

export default function Tabs({ tabs, initialId }: TabsProps) {
  const [active, setActive] = useState(initialId ?? tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === active);
  return (
    <div className={"tabs"}>
      <div className={"tablist"} role="tablist">
        {tabs.map((t) => (
          <button key={t.id} role="tab" aria-selected={t.id === active} onClick={() => setActive(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{activeTab?.content}</div>
    </div>
  );
}


