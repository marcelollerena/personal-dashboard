import { useUser } from "../../../common/providers/user-provider/use-user";

export function TodoCard({ todo, onClick, onDelete }) {
  const { user } = useUser();

  function handleDelete(event) {
    event.stopPropagation();
    onDelete(todo.id);
  }

  return (
    <article
      className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 transition hover:-translate-y-1 hover:border-cyan-400/60"
      onClick={onClick}
    >
      {todo.imageUrl ? (
        <div className="h-48 overflow-hidden border-b border-white/10 bg-slate-900">
          <img
            alt={todo.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            src={todo.imageUrl}
          />
        </div>
      ) : null}

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Todo
          </p>
          <h3 className="text-xl font-semibold text-white">{todo.title}</h3>
          <p className="line-clamp-4 text-sm leading-6 text-slate-400">
            {todo.description}
          </p>

          <p className="text-sm opacity-50">created by: {user.name}</p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500">Click to edit</span>

          <button
            className="rounded-full border border-rose-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-200 transition hover:border-rose-300 hover:bg-rose-400/10"
            onClick={handleDelete}
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
