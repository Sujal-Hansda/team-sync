
const StatusBadge = ({ status = "unknown", className = "" }) => {
  const styles = {
    active: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    inactive: "bg-rose-50 text-rose-700 ring-rose-600/20",
    pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
    suspended: "bg-slate-100 text-slate-700 ring-slate-500/20",
    unknown: "bg-gray-50 text-gray-600 ring-gray-500/20",
  };

  const normalizedStatus = String(status).toLowerCase();
  const badgeStyle = styles[normalizedStatus] || styles.unknown;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold capitalize ring-1 ring-inset ${badgeStyle} ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          normalizedStatus === "active"
            ? "bg-emerald-500"
            : normalizedStatus === "inactive"
              ? "bg-rose-500"
              : normalizedStatus === "pending"
                ? "bg-amber-500"
                : "bg-slate-400"
        }`}
      />
      {status || "Unknown"}
    </span>
  );
};

export default StatusBadge;
