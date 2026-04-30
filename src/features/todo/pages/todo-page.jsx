import { useNavigate, useParams } from "react-router";

import { TodoForm } from "../components/todo-form";
import { useTodos } from "../hooks/use-todos";

export function TodoPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { getTodoById, updateTodo } = useTodos();
  const todo = getTodoById(id);

  function handleUpdateTodo(payload) {
    updateTodo(id, payload);
    navigate("/todos");
  }

  if (!todo) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Todo not found
        </p>
        <h1 className="text-3xl font-semibold text-white">
          This task does not exist anymore
        </h1>
        <p className="max-w-xl text-slate-400">
          The item may have been deleted from localStorage. Go back to the list
          and select another todo.
        </p>
        <button
          className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          onClick={() => navigate("/todos")}
          type="button"
        >
          Back to todos
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Todo Detail
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Edit todo
        </h1>
        <p className="text-base leading-7 text-slate-400">
          Update the fields and save to return to the list.
        </p>
      </header>

      <TodoForm
        description="Edit the selected todo and persist the changes in localStorage."
        initialValues={{
          title: todo.title,
          description: todo.description,
          imageUrl: todo.imageUrl,
        }}
        onSubmit={handleUpdateTodo}
        secondaryAction={
          <button
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30"
            onClick={() => navigate("/todos")}
            type="button"
          >
            Cancel
          </button>
        }
        submitLabel="Save Todo"
        title={`Editing: ${todo.title}`}
      />
    </div>
  );
}
