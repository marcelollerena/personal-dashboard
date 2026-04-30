import { useNavigate } from "react-router";

import { TodoCard } from "../components/todo-card";
import { TodoForm } from "../components/todo-form";
import { useTodos } from "../hooks/use-todos";

export function TodoView() {
  const navigate = useNavigate();
  const { todos, createTodo, deleteTodo } = useTodos();

  function handleCreateTodo(payload) {
    createTodo(payload);
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Todo Feature
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Manage your tasks locally
        </h1>
        <p className="max-w-3xl text-base leading-7 text-slate-400">
          Create todos with title, description and an optional image. Every item
          is stored in localStorage and can be edited from its dedicated route.
        </p>
      </header>

      <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <TodoForm
          description="Create a new todo and keep it persisted in the browser."
          onSubmit={handleCreateTodo}
          submitLabel="Create Todo"
          title="New Todo"
        />

        <section className="space-y-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Stored Todos
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                {todos.length} {todos.length === 1 ? "task" : "tasks"}
              </h2>
            </div>
          </div>

          {todos.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/10 bg-slate-950/40 p-10 text-center text-slate-400">
              No todos yet. Create the first one from the form.
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {todos.map((todo) => (
                <TodoCard
                  key={todo.id}
                  onClick={() => navigate(`/todos/${todo.id}`)}
                  onDelete={deleteTodo}
                  todo={todo}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
