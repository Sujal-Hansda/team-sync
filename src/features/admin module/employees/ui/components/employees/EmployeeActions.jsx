import React from "react";
import { Pencil, Trash2, UserX } from "lucide-react";

const EmployeeActions = ({ employee, onUpdate, onDelete, onInactive ,setShowMenu}) => {
  return (
    <div className="w-40 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
      <button
        type="button"
        onClick={() => onUpdate?.(employee)}
        className="flex w-full items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
      >
        <Pencil size={16} />
        Update
      </button>

{
  employee.status === "active"?
        <button
        type="button"
        onClick={() => {
          onInactive?.(employee)
          setShowMenu(false);
        }}
        className="flex w-full items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
      >
        <UserX size={16} />
        Inactive
      </button>:
      <button
        type="button"
        onClick={() => {
          onInactive?.(employee)
          setShowMenu(false)
        }}
        className="flex w-full items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
      >
        <UserX size={16} />
        Active
      </button>
}

      <button
        type="button"
        onClick={() => {
          onDelete?.(employee);
          setShowMenu(false)
        }}
        className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
      >
        <Trash2 size={16} />
        Delete
      </button>
    </div>
  );
};

export default EmployeeActions;