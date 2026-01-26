import { Link } from "react-router-dom";
import RatingBar from "./RaitingBar";

export default function TaskCard({ item, onDelete }) {
  // const { key } = item;
  return (
    <div className="bg-white/70 backdrop-blur border border-gray-300 p-5 rounded-xl shadow-sm hover:shadow-md transition "
    >
      <h3 className="text-xl font-semibold mb-3">{item.title} </h3>

      {item.watched && (
        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mb-2">
          Completed
        </span>
      )}

      <p>Category: {item.category}</p>
      <p>Deadline {item.year}</p>
      <div className="text-yellow-500 text-lg tracking-wide">
        <span>Priority</span>
        <RatingBar rating={item.rating} />
      </div>
      <span>id: {item.id}</span>
      <div className="flex gap-2 mt-3">

        <Link to={`/edit/${item.id}`} className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-800"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
