export default function FilterBar({
  categories,
  filter,
  setFilter,
  sort,
  setSort,
  status,
  setStatus
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">All Task Types</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">No Sort</option>
        <option value="rating">Sort by Priority</option>
        <option value="year">Sort by Deadline</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
}
