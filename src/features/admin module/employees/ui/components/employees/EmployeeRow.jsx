
import { useState } from "react";
import { Eye, Mail, MoreVertical } from "lucide-react";
import StatusBadge from "./StatusBadge";
import EmployeeActions from "./EmployeeActions";

const EmployeeRow = ({ employee, onView, onMore }) => {
  const [showMenu, setShowMenu] = useState(false);

  const name = employee?.name || "Unknown Employee";

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  const handleAction = (actionEmployee, action) => {
    onMore?.({ employee: actionEmployee, action });
    setShowMenu(false);
  };

  return (
    <tr className="border-b border-slate-100 transition hover:bg-slate-50/80">
      {/* Employee */}
      <td className="px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
            {employee?.avatar ? (
              <img
                src={employee.avatar}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              initials
            )}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">
              {name}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              ID: {employee?._id || "N/A"}
            </p>
          </div>
        </div>
      </td>

      {/* Email */}
      <td className="px-5 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Mail size={15} className="shrink-0 text-slate-400" />
          <span className="break-all">{employee?.email || "N/A"}</span>
        </div>
      </td>

      {/* Department */}
      <td className="px-5 py-4">
        <span className="text-sm capitalize text-slate-600">
          {employee?.department || "Unassigned"}
        </span>
      </td>

      {/* Role */}
      <td className="px-5 py-4">
        <span className="inline-flex rounded-lg bg-indigo-50 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
          {employee?.role || "employee"}
        </span>
      </td>

      {/* Status */}
      <td className="px-5 py-4">
        <StatusBadge status={employee?.status} />
      </td>

      {/* Actions */}
      <td className="px-5 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => onView?.(employee)}
            aria-label={`View ${name}`}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Eye size={17} />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setShowMenu((prev) => !prev)}
              aria-label={`More actions for ${name}`}
              aria-expanded={showMenu}
              className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200"
            >
              <MoreVertical size={18} />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-full z-20 mt-2">
                <EmployeeActions
                  employee={employee}
                  onUpdate={(emp) => handleAction(emp, "update")}
                  onInactive={(emp) => handleAction(emp, "inactive")}
                  onDelete={(emp) => handleAction(emp, "delete")}
                />
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default EmployeeRow;
