
import { Users } from "lucide-react";
import EmployeeRow from "./EmployeeRow";
const EmployeeTable = ({
  employees = [],
  onView,
  onMore,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Table header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-5 sm:px-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Employee Directory
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage and view employee information.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700">
          <Users size={17} />
          {employees.length} Employees
        </div>
      </div>

      {/* Table */}
      {employees.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-slate-50">
              <tr className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-5 py-4">Employee</th>
                <th className="px-5 py-4">Email</th>
                <th className="px-5 py-4">Department</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <EmployeeRow
                  key={employee._id}
                  employee={employee}
                  onView={onView}
                  onMore={onMore}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
          <div className="rounded-2xl bg-slate-100 p-4 text-slate-400">
            <Users size={28} />
          </div>

          <h3 className="mt-4 text-base font-semibold text-slate-800">
            No employees found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Employee records will appear here when available.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
