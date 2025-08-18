import React from "react";
import type{ CollectionKey } from "./types";

interface Props {
  current: CollectionKey;
  onChange: (key: CollectionKey) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ current, onChange, collapsed, setCollapsed }) => {
  const items: { key: CollectionKey; label: string; icon: string }[] = [
    { key: "services", label: "Services", icon: "fa-clipboard-list" },
    { key: "products", label: "Products", icon: "fa-box" },
    { key: "logistics", label: "Logistics", icon: "fa-truck" },
    { key: "users", label: "Users", icon: "fa-user" },
  ];

  return (
    <aside className={`ap-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="ap-sidebar-top">
        <div className="ap-logo">
          <span className="ap-logo-square">A</span>
          {!collapsed && <span className="ap-logo-text">Admin</span>}
        </div>
        <button className="ap-toggle" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle Sidebar">
          ☰
        </button>
      </div>

      <nav className="ap-nav">
        {items.map((it) => (
          <button
            key={it.key}
            className={`ap-nav-item ${current === it.key ? "active" : ""}`}
            onClick={() => onChange(it.key)}
          >
            <i className={`fas ${it.icon}`} aria-hidden="true"></i>
            {!collapsed && <span>{it.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
