import { useEffect, useState } from "react";
import { getItem, updateItem } from "../api/tasks";
import { useNavigate, useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm";

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);


  async function load() {
    const res = await getItem(id);
    setItem(res.data);
  }

 useEffect(() => {
   load();
  }, []);

  async function handleUpdate(data) {
    await updateItem(id, {
      ...data,
      rating: Number(data.rating),
      year: Number(data.year),
      watched: Boolean(data.watched)
    });
    navigate("/");
  }

  if (!item) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
      <TaskForm onSubmit={handleUpdate} defaultValues={item} />
    </div>
  );
}
