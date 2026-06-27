import "./NavigationDrawer.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

const sections = [
  "Dashboard",
  "Inbox",
  "Squad",
  "Schedule",
  "Tactics",
  "Transfers",
  "Scouting",
  "Finances",
  "Club",
  "Competitions",
  "Manager",
  "Settings",
];

export default function NavigationDrawer({
  open,
  onClose,
}: Props) {
  return (
    <>
      {open && (
        <div
          className="drawer-overlay"
          onClick={onClose}
        />
      )}

      <aside
        className={`navigation-drawer ${
          open ? "open" : ""
        }`}
      >
        <h2>Menu</h2>

        <nav>
          {sections.map((section) => (
            <button
              key={section}
              className="drawer-item"
            >
              {section}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}