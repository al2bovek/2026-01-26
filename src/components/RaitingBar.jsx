export default function RatingBar({ rating }) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n}>
          {n <= rating ? "⭐" : "☆"}
        </span>
      ))}
    </div>
  );
}
