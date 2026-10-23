
import { Search, X } from "lucide-react";

const SearchFilter = ({
  filters,
  handleSearchFilter,
  placeholder = "Search employees...",
}) => {
  const search = filters?.search || "";
  const role = filters?.role || "all";
  const department = filters?.department || "all";
  const status = filters?.status || "all";

  const clearFilters = () => {
    handleSearchFilter("search", "");
    handleSearchFilter("role", "");
    handleSearchFilter("department", "");
    handleSearchFilter("status", "");
  };

  const selectClass =
    "w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      {/* Search */}
      <div className="relative w-full">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            handleSearchFilter("search", e.target.value)
          }
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
        />

        {search && (
          <button
            type="button"
            onClick={() => handleSearchFilter("search", "")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {/* Role */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-500">
            Role
          </label>

          <select
            value={role}
            onChange={(e) =>
              handleSearchFilter(
                "role",
                e.target.value === "all" ? "" : e.target.value
              )
            }
            className={selectClass}
          >
            <option value="all">All roles</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        {/* Department */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-500">
            Department
          </label>

          <select
            value={department}
            onChange={(e) =>
              handleSearchFilter(
                "department",
                e.target.value === "all" ? "" : e.target.value
              )
            }
            className={selectClass}
          >
            <option value="all">All departments</option>
            <option value="developer">Developer</option>
            <option value="administrative">Administrative</option>
            <option value="security">Security</option>
            <option value="management">Management</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-500">
            Status
          </label>

          <select
            value={status}
            onChange={(e) =>
              handleSearchFilter(
                "status",
                e.target.value === "all" ? "" : e.target.value
              )
            }
            className={selectClass}
          >
            <option value="all">All statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={clearFilters}
            disabled={!search && !role && !department && !status}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <X size={16} />
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
