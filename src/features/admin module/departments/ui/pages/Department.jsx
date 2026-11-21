import { createDepartment } from "../../api/departmentApi";
import { useState } from "react";
import {
  Building2,
  Plus,
  Users,
  UserRound,
  FileText,
  X,
  BriefcaseBusiness,
  ChevronDown,
} from "lucide-react";
import { useEmployee } from "../../../employees/hooks/UseEmployees";

const Department = () => {
  let { data, isPending } = useEmployee();
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedManager, setSelectedManager] = useState("")
  console.log("Data", data);
  const manager = data?.employees?.find(
  (emp) => emp._id === selectedManager
);
  if (isPending) return <h1>Loading Employees</h1>;
  let handleDeparmentSubmit = async(e)=>
  {
    e.preventDefault();
      const formData = new FormData(e.target);
      const departmentData = {
      manager:formData.get("manager"),
      name:formData.get("name"),
      description:formData.get("description"),
      employees:selectedEmployees.map((emp)=>emp._id)
    }
    let response = await createDepartment(departmentData);
    console.log(response);
    
    
  }

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] p-4 md:p-8">
     <form onSubmit={handleDeparmentSubmit}>
              {/* HEADER */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-2">
          <Building2 size={16} />
          <span>Admin</span>
          <span>/</span>
          <span>Departments</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold">
          Department Management
        </h1>

        <p className="text-sm text-[var(--text-muted)] mt-2">
          Create and manage your organization's departments.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="max-w-4xl mx-auto bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl shadow-[var(--shadow-md)] overflow-hidden">
        {/* CARD HEADER */}
        <div className="p-5 md:p-6 border-b border-[var(--border-color)] flex items-center gap-3">
          <div className="p-3 rounded-lg bg-[var(--bg-card)] text-[var(--tertiary)]">
            <Plus size={22} />
          </div>

          <div>
            <h2 className="text-lg font-semibold">Create New Department</h2>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Add department details and assign employees.
            </p>
          </div>
        </div>

        <div className="p-5 md:p-6 space-y-8">
          {/* BASIC INFORMATION */}
          <section>
            <div className="flex items-center gap-2 mb-5">
              <FileText size={19} className="text-[var(--tertiary)]" />
              <h3 className="font-semibold">Basic Information</h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Department Name{" "}
                  <span className="text-[var(--danger)]">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Engineering"
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--tertiary)] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Description
                </label>

                <textarea
                  rows={4}
                  name="description"
                  placeholder="Describe the department's responsibilities..."
                  className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--tertiary)] resize-none transition"
                />
              </div>
            </div>
          </section>

          <div className="border-t border-[var(--border-color)]" />

          {/* MANAGER */}
          <section>
            <div className="flex items-center gap-2 mb-5">
              <UserRound size={19} className="text-[var(--tertiary)]" />
              <h3 className="font-semibold">Department Manager</h3>
            </div>

            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              Select Manager
            </label>

            <div className="relative">
              <select
              name="manager"
                value={selectedManager}
                onChange={(e) => setSelectedManager(e.target.value)}
                className="appearance-none w-full px-4 py-3 pr-10 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] outline-none focus:border-[var(--tertiary)] transition"
              >
                <option value="">Choose a manager</option>

                {data?.employees?.map((employee) => (
                  <option key={employee._id} value={employee._id}>
                    {employee.name} - {employee.email}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
              />
            </div>

            <p className="text-xs text-[var(--text-muted)] mt-2">
              Select the employee responsible for managing this department.
            </p>

            {/* SELECTED MANAGER PREVIEW */}
            <div className="mt-4 flex items-center justify-between gap-3 p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
              <div className="flex items-center gap-3">
  <div className="p-2 rounded-lg bg-[var(--bg-hover)]">
    <UserRound size={19} className="text-[var(--tertiary)]" />
  </div>

  <div>
    {manager ? (
      <>
        <p className="text-sm font-medium">{manager.name}</p>
        <p className="text-xs text-[var(--text-muted)]">
          {manager.email}
        </p>
      </>
    ) : (
      <p className="text-sm text-[var(--text-muted)]">
        No manager selected yet
      </p>
    )}
  </div>
</div>

              <span className="text-xs px-3 py-1 rounded-full bg-[var(--bg-hover)] text-[var(--tertiary)]">
                Manager
              </span>
            </div>
          </section>

          <div className="border-t border-[var(--border-color)]" />

          {/* EMPLOYEES */}
          <section>
            <div className="flex items-center gap-2 mb-5">
              <Users size={19} className="text-[var(--tertiary)]" />
              <h3 className="font-semibold">Assign Employees</h3>
            </div>

            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
              Select Employees
            </label>

            <div className="relative">
  <select
    defaultValue=""
    onChange={(e) => {
      const employee = data?.employees?.find(
        (emp) => emp._id === e.target.value,
      );

      if (employee) {
        setSelectedEmployees((prev) => {
          // Prevent duplicate employees
          if (prev.some((emp) => emp._id === employee._id)) {
            return prev;
          }

          return [...prev, employee];
        });
      }

      e.target.value = "";
    }}
    className="appearance-none w-full px-4 py-3 pr-10 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] outline-none focus:border-[var(--tertiary)] transition"
  >
    <option value="" disabled>
      Choose an employee to add
    </option>

    {data?.employees?.map((employee) => (
      <option key={employee._id} value={employee._id}>
        {employee.name} - {employee.email}
      </option>
    ))}
  </select>

  <ChevronDown
    size={18}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none"
  />
</div>

            <p className="text-xs text-[var(--text-muted)] mt-2">
              Choose employees to assign them to this department.
            </p>

            {/* SELECTED EMPLOYEES */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-[var(--text-secondary)]">
                  Selected Employees
                </h4>

                <span className="text-xs px-3 py-1 rounded-full bg-[var(--bg-card)] text-[var(--tertiary)]">
                  {selectedEmployees.length} Employees
                </span>
              </div>

              <div className="space-y-2">
                {selectedEmployees.map((employee) => (
                  <div
                    key={employee._id}
                    className="flex items-center justify-between gap-3 p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-2 rounded-lg bg-[var(--bg-hover)]">
                        <UserRound
                          size={18}
                          className="text-[var(--tertiary)]"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-medium">{employee.name}</p>

                        <p className="text-xs text-[var(--text-muted)] truncate">
                          {employee.email}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedEmployees((prev) =>
                          prev.filter((emp) => emp._id !== employee._id),
                        );
                      }}
                      className="p-2 rounded-lg text-[var(--text-muted)] hover:bg-[var(--danger)] hover:text-white transition"
                    >
                      <X size={17} />
                    </button>
                  </div>
                ))}
                {selectedEmployees.length === 0 && (
                  <p className="text-sm text-[var(--text-muted)] py-4 text-center">
                    No employees selected.
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* ACTIONS */}
          <div className="border-t border-[var(--border-color)] pt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
            <button
              type="reset"
              onClick={()=>{
                setSelectedManager("")
                setSelectedEmployees([])
              }}
                            className="px-6 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition"
            >
              Reset
            </button>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--tertiary)] text-white font-semibold hover:opacity-90 transition"
            >
              <Plus size={18} />
              Create Department
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER INFO */}
      <div className="max-w-4xl mx-auto mt-5 flex items-start gap-3 p-4 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)]">
        <BriefcaseBusiness
          size={19}
          className="text-[var(--tertiary)] shrink-0 mt-0.5"
        />

        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          Assign a department manager and add employees to organize your team's
          responsibilities effectively.
        </p>
      </div>
     </form>

    </div>
  );
};

export default Department;
