
const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
  color = "indigo",
}) => {
  const colorStyles = {
    emerald: {
      background: "bg-emerald-100",
      text: "text-emerald-600",
    },
    indigo: {
      background: "bg-indigo-100",
      text: "text-indigo-600",
    },
    violet: {
      background: "bg-violet-100",
      text: "text-violet-600",
    },
  };

  const styles = colorStyles[color] || colorStyles.indigo;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold capitalize text-gray-900">
            {value}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>

        <div className={`shrink-0 rounded-lg p-3 ${styles.background}`}>
          {Icon && <Icon size={22} className={styles.text} />}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
