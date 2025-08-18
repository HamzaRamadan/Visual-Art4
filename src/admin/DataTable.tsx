import React from "react";
import type{ BaseItem, ColumnDef } from "./types";

interface Props {
  rows: BaseItem[];
  columns: ColumnDef[];
  onEdit: (row: BaseItem) => void;
  onDelete: (id: string) => void;
}

const DataTable: React.FC<Props> = ({ rows, columns, onEdit, onDelete }) => {
  return (
    <div className="ap-card">
      <div className="ap-table-wrapper">
        <table className="ap-table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key} style={c.width ? { width: c.width } : undefined}>{c.label}</th>
              ))}
              <th style={{width: 120}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="ap-empty">No data</td>
              </tr>
            )}
            {rows.map((row) => (
              <tr key={row.id}>
                {columns.map((c) => (
                  <td key={c.key}>
                    {c.key === "status"
                      ? <span className={`ap-badge ${row.status === "active" ? "success" : "muted"}`}>
                          {row.status || "—"}
                        </span>
                      : (row[c.key] ?? "—")}
                  </td>
                ))}
                <td>
                  <div className="ap-actions">
                    <button className="ap-btn ap-btn-ghost" onClick={() => onEdit(row)}>Edit</button>
                    <button className="ap-btn ap-btn-danger" onClick={() => onDelete(row.id)}>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
