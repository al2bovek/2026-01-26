import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function TaskForm({ onSubmit, defaultValues }) {
  const { register, handleSubmit, reset } = useForm({ defaultValues });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <label className="flex items-center gap-2">
        Task
        <input
          {...register("title", { required: true })}
          placeholder="Task"
          className="input"
        />
      </label>


      <label className="flex items-center gap-2">
        Category
        <input
          {...register("category")}
          placeholder="Category"
          className="input"
        />
      </label>

      <label className="flex items-center gap-2">
        Deadline
        <input
          type="title"
          {...register("year")}
          placeholder="Deadline"
          className="input"
        />
      </label>

      <label className="flex items-center gap-2">
        Priority
        <input
          type="number"
          min="1"
          max="5"
          {...register("rating")}
          className="input"
        />
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("watched")} />
        Completed
      </label>

      <button className="btn">Save Task</button>
    </form>
  );
}
