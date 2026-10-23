
import { Users, UserCheck, Building2, UserPlus } from "lucide-react";
import StatCard from "./StatCard";
const EmployeeStats = ({ employees = [] }) => {
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status?.toLowerCase() === "active"
  ).length;

  const departments = new Set(
    employees
      .map((employee) => employee.department)
      .filter(
        (department) =>
          department && department.toLowerCase() !== "common"
      )
  ).size;

  const newHires = employees.filter((employee) => {
    if (!employee.createdAt) return false;

    const createdDate = new Date(employee.createdAt);
    const today = new Date();
    const thirtyDaysAgo = new Date();

    thirtyDaysAgo.setDate(today.getDate() - 30);

    return createdDate >= thirtyDaysAgo && createdDate <= today;
  }).length;

  const stats = [
    {
      title: "Total Employees",
      value: totalEmployees,
      description: "All registered employees",
      icon: Users,
      color: "indigo",
    },
    {
      title: "Active Now",
      value: activeEmployees,
      description: "Active employee accounts",
      icon: UserCheck,
      color: "emerald",
    },
    {
      title: "Departments",
      value: departments,
      description: "Departments represented",
      icon: Building2,
      color: "violet",
    },
    {
      title: "New Hires",
      value: newHires,
      description: "Joined in the last 30 days",
      icon: UserPlus,
      color: "indigo",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </section>
  );
};

export default EmployeeStats;
