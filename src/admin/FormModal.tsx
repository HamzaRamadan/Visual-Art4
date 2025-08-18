import React, { useEffect, useState } from "react";
import type{ BaseItem, ColumnDef } from "./types";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: BaseItem) => void;
  columns: ColumnDef[];
  initial?: BaseItem | null;
  title: string;
}

const FormModal: React.FC<Props> = ({ open, onClose, onSubmit, columns, initial, title }) => {
  const [form, setForm] = useState<BaseItem>(initial || { id: "" });

  useEffect(() => {
    setForm(initial || { id: "" });
  }, [initial]);

  if (!open) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (key: string, val: any) => {
    setForm((f) => ({ ...f, [key]: val }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="ap-modal-backdrop" onClick={onClose}>
      <div className="ap-modal" onClick={(e) => e.stopPropagation()}>
        <div className="ap-modal-header">
          <h3>{title}</h3>
          <button className="ap-btn ap-btn-ghost" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={submit} className="ap-modal-body">
          {columns.filter(c => c.editable !== false).map((col) => (
            <div key={col.key} className="ap-field">
              <label>{col.label}</label>
              {col.type === "textarea" ? (
                <textarea
                  value={form[col.key] ?? ""}
                  onChange={(e) => handleChange(col.key, e.target.value)}
                />
              ) : col.type === "select" && col.options ? (
                <select
                  value={form[col.key] ?? ""}
                  onChange={(e) => handleChange(col.key, e.target.value)}
                >
                  <option value="">—</option>
                  {col.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              ) : (
                <input
                  type={col.type || "text"}
                  value={form[col.key] ?? ""}
                  onChange={(e) => handleChange(col.key, e.target.value)}
                />
              )}
            </div>
          ))}
          <div className="ap-modal-footer">
            <button type="button" className="ap-btn ap-btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button className="ap-btn ap-btn-primary" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
