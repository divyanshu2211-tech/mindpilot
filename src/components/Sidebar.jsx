import { LayoutDashboard, Target, MessagesSquare, BriefcaseBusiness, Wallet, Globe2, ChartNoAxesCombined, Settings, Menu, X, SquareCheck, Timer } from "lucide-react";

const icons = { "layout-dashboard": LayoutDashboard, target: Target, timer: Timer, "square-check": SquareCheck, "messages-square": MessagesSquare, "briefcase-business": BriefcaseBusiness, wallet: Wallet, "globe-2": Globe2, "chart-no-axes-combined": ChartNoAxesCombined };
const items = [
  ["Overview", "layout-dashboard"], ["Daily tasks", "square-check"], ["Focus timer", "timer"], ["Daily missions", "target"],
  ["English & communication", "messages-square"], ["Career & business", "briefcase-business"],
  ["Money & savings", "wallet"], ["Global opportunities", "globe-2"],
  ["Progress review", "chart-no-axes-combined"]
];

export default function Sidebar({ active, onNavigate, open, onClose }) {
  return <>
    {open && <button className="mobile-scrim" aria-label="Close navigation" onClick={onClose} />}
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="brand"><div className="brand-mark"><img src="/brand/mindpilot-wordmark.png" alt="" aria-hidden="true"/></div><div><strong>mindpilot</strong><small>YOUR PERSONAL GROWTH OS</small></div><button className="close-nav" onClick={onClose} aria-label="Close menu"><X size={18}/></button></div>
      <div className="nav-caption">WORKSPACE</div>
      <nav>{items.map(([label, key]) => { const Icon = icons[key]; return <button key={label} className={`nav-link ${active === label ? "active" : ""}`} onClick={() => { onNavigate(label); onClose(); }}><Icon size={18}/><span>{label}</span>{active === label && <i/>}</button>; })}</nav>
      <div className="sidebar-bottom"><div className="focus-note"><div className="focus-icon">âœ¦</div><strong>Small steps, real change.</strong><p>Your next chapter is built one intentional day at a time.</p></div><div className="sidebar-foot"><span className="status-dot"/> Local-first Â· Your data stays here</div></div>
    </aside>
  </>;
}

