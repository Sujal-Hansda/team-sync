import { CircleCheck, Building2, ShieldCheck } from "lucide-react";
import StatCard from "./components/StatCard";

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
  <StatCard
    title="Account Status"
    value={employee.status}
    description="Current account status"
    icon={CircleCheck}
    color="emerald"
  />

  <StatCard
    title="Department"
    value={employee.department}
    description="Assigned department"
    icon={Building2}
    color="indigo"
  />

  <StatCard
    title="Access Level"
    value={employee.role}
    description="Employee permissions"
    icon={ShieldCheck}
    color="violet"
  />
</div>