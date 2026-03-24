import { Link, useLocation } from "react-router-dom"
import clsx from "clsx"

const links = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Resume Builder", path: "/resume-builder" },
  { label: "Resume Analyzer", path: "/resume-analyzer" },
  { label: "Career Suggestions", path: "/career" },
  { label: "Profile", path: "/profile" }
]

function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-full md:w-72 bg-white border-r border-slate-200 min-h-full p-4 rounded-2xl">
      <h2 className="text-2xl font-bold gradient-text mb-6">NextMove</h2>

      <div className="space-y-2">
        {links.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              "block px-4 py-3 rounded-xl font-medium transition",
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-slate-700 hover:bg-slate-100"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar