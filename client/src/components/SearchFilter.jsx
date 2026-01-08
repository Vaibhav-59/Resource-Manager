export default function SearchFilter({
  search,
  setSearch,
  type,
  setType,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 focus:border-indigo-600 p-2 rounded-xl w-full"
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border border-gray-300 focus:border-indigo-600 p-2 rounded-xl w-full sm:w-48"
      >
        <option value="">All Types</option>
        <option value="Article">Article</option>
        <option value="Video">Video</option>
        <option value="Tutorial">Tutorial</option>
      </select>
    </div>
  );
}
