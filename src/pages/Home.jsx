import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../api/tasks";
import { Link } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import TaskCard from "../components/TaskCard";

export default function Home() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");
  const [status, setStatus] = useState("all");

  
  async function load() {
    const res = await getItems();
    setItems(res.data);
  }
  
  useEffect(() => {
    load();
  }, []);
  
  async function remove(id) {
    await deleteItem(id);
    load();
  }

  const categories = [...new Set(items.map((i) => i.category))];

  let displayed = items.filter((i) => {
    if (filter !== "all" && i.category !== filter) return false;
    if (status === "completed" && !i.watched) return false;
    if (status === "pending" && i.watched) return false;
    return true;
  });

  if (sort === "rating") displayed.sort((a, b) => b.rating - a.rating);
  if (sort === "year") displayed.sort((a, b) => b.year - a.year);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <FilterBar
        categories={categories}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        status={status}
        setStatus={setStatus}
      />

      {displayed.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No tasks match...
        </p>
      )}

      <div className="grid gap-4 my-6">
        {displayed.map((item) => (
          <TaskCard key={item.id} item={item} onDelete={remove} />
        ))}
      </div>

      <Link
        to="/add"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </Link>

    </div>
  );
}
