import React from "react";

const AddEmployeeHeader = () => {
  return (
    <div>
      <p className="mb-1 text-xs text-slate-500">
        Team <span className="mx-1">›</span> Add New Employee
      </p>

      <h1 className="text-2xl font-bold text-slate-900">
        Add Employee
      </h1>

      <p className="mt-1 text-sm text-slate-500">
        Configure the new team member's workspace profile and permissions.
      </p>
    </div>
  );
};

export default AddEmployeeHeader;