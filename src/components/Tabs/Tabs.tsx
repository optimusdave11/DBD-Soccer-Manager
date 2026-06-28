import "./Tabs.css";

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export default function Tabs({
  tabs,
  activeTab,
  onChange,
}: Props) {
  return (
    <div className="tabs">

      {tabs.map((tab) => (

        <button
          key={tab.id}
          className={`tab ${
            activeTab === tab.id ? "active" : ""
          }`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>

      ))}

    </div>
  );
}