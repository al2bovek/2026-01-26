import { addItem } from "../api/tasks";
import TakForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function AddItem() {
  const navigate = useNavigate();

  async function handleAdd(data) {
    await addItem({
      ...data,
      rating: Number(data.rating),
      year: Number(data.year),
      watched: Boolean(data.watched)
    });
    navigate("/");
  }

  return (
    <div p-6 max-w-3xl mx-auto >
      <div className="p-6 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
        <TakForm onSubmit={handleAdd} />
      </div>
      <Link
        to="/"
        className="inline-block ml-72 mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 "
      >
        Home
      </Link>
    </div>
  );
}
