import React, { useMemo, useState, useLayoutEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DataTable from "./DataTable";
import FormModal from "./FormModal";
import { useLocalStorage } from "./useLocalStorage";
import type { BaseItem, CollectionKey, ColumnDef } from "./types";
import { seedData } from "./mockData";

// *** Admin Panel ***
const AdminPanel: React.FC = () => {
  // state
  const [collapsed, setCollapsed] = useState(false);
  const [collection, setCollection] = useState<CollectionKey>("services");

  // data per collection saved to localStorage
  const [db, setDb] = useLocalStorage<Record<CollectionKey, BaseItem[]>>(
    "ap-db",
    {
      services: seedData.services,
      products: seedData.products,
      logistics: seedData.logistics,
      users: seedData.users,
    }
  );

  const rows = db[collection];

  // columns per collection
  const columns: Record<CollectionKey, ColumnDef[]> = useMemo(
    () => ({
      services: [
        { key: "id", label: "ID", editable: false, width: "120px" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description", type: "textarea" },
        {
          key: "status",
          label: "Status",
          type: "select",
          options: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ],
          width: "120px",
        },
      ],
      products: [
        { key: "id", label: "ID", editable: false, width: "120px" },
        { key: "title", label: "Name" },
        { key: "sku", label: "SKU" },
        { key: "description", label: "Description", type: "textarea" },
        {
          key: "status",
          label: "Status",
          type: "select",
          options: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ],
          width: "120px",
        },
      ],
      logistics: [
        { key: "id", label: "ID", editable: false, width: "120px" },
        { key: "title", label: "Title" },
        { key: "description", label: "Description", type: "textarea" },
        {
          key: "status",
          label: "Status",
          type: "select",
          options: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ],
          width: "120px",
        },
      ],
      users: [
        { key: "id", label: "ID", editable: false, width: "120px" },
        { key: "title", label: "Name" },
        { key: "email", label: "Email", type: "email" },
        {
          key: "role",
          label: "Role",
          type: "select",
          options: [
            { label: "Admin", value: "admin" },
            { label: "Editor", value: "editor" },
            { label: "Viewer", value: "viewer" },
          ],
          width: "140px",
        },
        {
          key: "status",
          label: "Status",
          type: "select",
          options: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ],
          width: "120px",
        },
      ],
    }),
    []
  );

  // modal
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<BaseItem | null>(null);

  // actions
  const addNew = () => {
    setEditing({
      id: generateId(collection),
      status: "active",
    });
    setOpen(true);
  };

  const onEdit = (row: BaseItem) => {
    setEditing(row);
    setOpen(true);
  };

  const onDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    setDb({ ...db, [collection]: rows.filter((r) => r.id !== id) });
  };

  const onSubmit = (data: BaseItem) => {
    const exists = rows.some((r) => r.id === data.id);
    const updated = exists
      ? rows.map((r) => (r.id === data.id ? { ...r, ...data } : r))
      : [{ ...data }, ...rows];
    setDb({ ...db, [collection]: updated });
    setOpen(false);
    setEditing(null);
  };

  const currentColumns = columns[collection];

  // dynamic margin-top for main (auto from header height)
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ap-shell">
      <Sidebar
        current={collection}
        onChange={setCollection}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <main className="ap-main" style={{ marginTop: headerHeight }}>
        <div ref={headerRef}>
          <Header title={`Admin • ${capitalize(collection)}`} />
        </div>

        <div className="ap-toolbar">
          <div className="ap-breadcrumbs">
            <span>Admin</span> <span className="sep">/</span>{" "}
            <strong>{capitalize(collection)}</strong>
          </div>
          <button className="ap-btn ap-btn-primary" onClick={addNew}>
            + Add {capitalize(collection).slice(0, -1)}
          </button>
        </div>

        <DataTable
          rows={rows}
          columns={currentColumns}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </main>

      <FormModal
        open={open}
        onClose={() => {
          setOpen(false);
          setEditing(null);
        }}
        onSubmit={onSubmit}
        columns={currentColumns}
        initial={editing}
        title={
          editing && rows.some((r) => r.id === editing.id)
            ? "Edit Item"
            : "Add Item"
        }
      />

      {/* Styles */}
      <style>{adminStyles}</style>
    </div>
  );
};

export default AdminPanel;

// helpers
function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function generateId(prefix: string) {
  return `${prefix.slice(0, 3)}-${Math.random().toString(36).slice(2, 8)}`;
}

// THEME + STYLES
const adminStyles = `
:root{
  --ap-primary:#0a4d8c;
  --ap-primary-600:#0a4d8c;
  --ap-secondary:#e74c3c;
  --ap-bg:#f5f7fb;
  --ap-card:#fff;
  --ap-text:#334155;
  --ap-muted:#8a99a8;
  --ap-border:rgba(10,77,140,.12);
  --ap-shadow:0 8px 24px rgba(10,77,140,.10);
  --ap-shadow-lg:0 14px 38px rgba(10,77,140,.15);
}

*{box-sizing:border-box}
.ap-shell{display:flex; min-height:100vh; background:var(--ap-bg); color:var(--ap-text);}

/* Sidebar */
.ap-sidebar{
  width:260px; background:#fff; border-right:1px solid var(--ap-border);
  padding:16px; position:sticky; top:0; height:100vh; box-shadow:var(--ap-shadow);
}
.ap-sidebar.collapsed{width:84px; padding:16px 12px;}
.ap-sidebar .ap-sidebar-top{display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;}
.ap-logo{display:flex; align-items:center; gap:10px;}
.ap-logo-square{width:34px; height:34px; border-radius:8px; display:inline-grid; place-items:center; background:var(--ap-primary); color:#fff; font-weight:800;}
.ap-logo-text{font-weight:800; letter-spacing:.3px;}
.ap-toggle{border:none; background:transparent; font-size:20px; cursor:pointer;}
.ap-nav{display:flex; flex-direction:column; gap:6px; margin-top:10px;}
.ap-nav-item{
  display:flex; align-items:center; gap:10px; padding:10px 12px; width:100%;
  border-radius:12px; border:1px solid transparent; background:transparent; cursor:pointer; color:var(--ap-text);
}
.ap-nav-item:hover{background:#f1f5f9;}
.ap-nav-item.active{background:#eef6ff; border-color:rgba(10,77,140,.22); color:var(--ap-primary);}
.ap-sidebar.collapsed .ap-nav-item{justify-content:center;}

/* Main */
.ap-main{flex:1; padding:24px; max-width:100%; transition:margin-top .2s ease;}

/* Header */
.ap-header{display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;}
.ap-header h1{margin:0; font-size:22px;}
.ap-header-actions{display:flex; gap:10px;}

/* Toolbar */
.ap-toolbar{display:flex; align-items:center; justify-content:space-between; margin:14px 0 18px;}
.ap-breadcrumbs{color:var(--ap-muted);}
.ap-breadcrumbs .sep{margin:0 6px; color:#cbd5e1}

/* Card + Table */
.ap-card{background:var(--ap-card); border:1px solid var(--ap-border); border-radius:16px; box-shadow:var(--ap-shadow); overflow:hidden;}
.ap-table-wrapper{width:100%; overflow:auto;}
.ap-table{width:100%; border-collapse:separate; border-spacing:0; font-size:14.5px;}
.ap-table th,.ap-table td{padding:13px 14px; border-bottom:1px solid #eef2f7; text-align:left; white-space:nowrap;}
.ap-table thead th{background:#f8fafc; color:#475569; font-weight:700;}
.ap-empty{text-align:center; padding:30px !important; color:var(--ap-muted);}
.ap-actions{display:flex; gap:8px;}

/* Badges */
.ap-badge{display:inline-block; padding:4px 10px; border-radius:999px; font-size:12px; border:1px solid transparent;}
.ap-badge.success{background:#ecfeff; color:#0ea5b7; border-color:#a5f3fc;}
.ap-badge.muted{background:#f1f5f9; color:#64748b; border-color:#e2e8f0;}

/* Buttons */
.ap-btn{border:1px solid transparent; padding:8px 12px; border-radius:10px; cursor:pointer; font-weight:600;}
.ap-btn-primary{background:var(--ap-primary); color:#fff;}
.ap-btn-primary:hover{filter:brightness(.95);}
.ap-btn-danger{background:#fee2e2; color:#b91c1c; border-color:#fecaca;}
.ap-btn-danger:hover{filter:brightness(.98);}
.ap-btn-ghost{background:#fff; border-color:#e5e7eb; color:#334155;}
.ap-btn-ghost:hover{background:#f8fafc;}

/* Modal */
.ap-modal-backdrop{position:fixed; inset:0; background:rgba(2,6,23,.5); display:grid; place-items:center; z-index:1000; padding:20px;}
.ap-modal{width:100%; max-width:720px; background:#fff; border-radius:18px; border:1px solid var(--ap-border); box-shadow:var(--ap-shadow-lg); overflow:hidden;}
.ap-modal-header{display:flex; align-items:center; justify-content:space-between; padding:16px 18px; border-bottom:1px solid #eef2f7;}
.ap-modal-body{padding:18px; display:grid; grid-template-columns:1fr 1fr; gap:14px;}
.ap-modal-footer{grid-column:1 / -1; display:flex; justify-content:flex-end; gap:10px; margin-top:6px;}
.ap-field{display:flex; flex-direction:column; gap:6px;}
.ap-field label{font-size:13px; color:#64748b;}
.ap-field input,.ap-field textarea,.ap-field select{
  border:1px solid #e2e8f0; border-radius:10px; padding:10px 12px; font-size:14px; outline:none;
}
.ap-field textarea{min-height:96px; resize:vertical;}

/* Responsive */
@media (max-width: 1024px){
  .ap-sidebar{position:fixed; z-index:20; height:100dvh;}
  .ap-main{margin-left:84px;}
  .ap-sidebar:not(.collapsed)+.ap-main{margin-left:260px;}
}
@media (max-width: 720px){
  .ap-modal-body{grid-template-columns:1fr;}
  .ap-main{padding:16px; margin-left:0;}
  .ap-toolbar{flex-direction:column; align-items:stretch; gap:10px;}
}
`;
