const TODOS_STORAGE_KEY = "personal-dashboard.todos";

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function normalizeTodo(todo) {
  return {
    id: String(todo.id),
    title: typeof todo.title === "string" ? todo.title : "",
    description: typeof todo.description === "string" ? todo.description : "",
    imageUrl: typeof todo.imageUrl === "string" ? todo.imageUrl : "",
    createdAt: typeof todo.createdAt === "string" ? todo.createdAt : new Date().toISOString(),
    updatedAt: typeof todo.updatedAt === "string" ? todo.updatedAt : new Date().toISOString(),
  };
}

export function readTodos() {
  if (!canUseStorage()) {
    return [];
  }

  try {
    const rawTodos = window.localStorage.getItem(TODOS_STORAGE_KEY);

    if (!rawTodos) {
      return [];
    }

    const parsedTodos = JSON.parse(rawTodos);

    if (!Array.isArray(parsedTodos)) {
      return [];
    }

    return parsedTodos.map(normalizeTodo);
  } catch {
    return [];
  }
}

export function writeTodos(todos) {
  if (!canUseStorage()) {
    return;
  }

  window.localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}

export function buildTodo(payload) {
  const timestamp = new Date().toISOString();

  return {
    id:
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title: payload.title.trim(),
    description: payload.description.trim(),
    imageUrl: payload.imageUrl.trim(),
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export function mergeTodo(todo, payload) {
  return {
    ...todo,
    title: payload.title.trim(),
    description: payload.description.trim(),
    imageUrl: payload.imageUrl.trim(),
    updatedAt: new Date().toISOString(),
  };
}
