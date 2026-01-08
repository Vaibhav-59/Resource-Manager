import { Link } from "react-router-dom";

export default function ResourceCard({ resource, onDelete }) {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 focus-within:ring-2 focus-within:ring-indigo-500"
      role="article"
      aria-label={`${resource.type} - ${resource.title}`}
    >
      <span
        className={`text-xs tracking-wide uppercase font-medium text-white px-3 py-1 rounded-full
          ${resource.type === "Article" ? "bg-orange-500" : ""}
          ${resource.type === "Video" ? "bg-blue-500" : ""}
          ${resource.type === "Tutorial" ? "bg-cyan-500" : ""}
        `}
      >
        {resource.type}
      </span>


      <h3 className="text-lg font-semibold mt-3 truncate" title={resource.title}>
        {resource.title}
      </h3>

      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
        {resource.description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/edit/${resource._id}`}
          className="text-indigo-700 border border-indigo-200 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors"
          aria-label={`Edit ${resource.title}`}
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(resource._id)}
          className="text-red-600 border border-red-200 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
          aria-label={`Delete ${resource.title}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
