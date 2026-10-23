import React from "react";
import Button from "../Button"
import { useNavigate } from "react-router";

const EmployeeHeader = () => {
  let navigate = useNavigate();

  
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Employees
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your organization's employees.
        </p>
      </div>

      <Button
      handleClick={()=>navigate("/home/add-employee")}
        type="button"
        className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
      >
        + Add Employee
      </Button>
    </div>
  );
};

export default EmployeeHeader;