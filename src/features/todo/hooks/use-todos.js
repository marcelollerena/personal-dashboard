import { useEffect, useState } from "react";

import { buildTodo, mergeTodo, readTodos, writeTodos } from "../lib/todo-storage";

export function useTodos() {
  const [todos, setTodos] = useState(() => readTodos());

  useEffect(() => {
    writeTodos(todos);
  }, [todos]);

  useEffect(() => {
    function syncTodos(event) {
      if (event.key && event.key !== "personal-dashboard.todos") {
        return;
      }

      setTodos(readTodos());
    }

    window.addEventListener("storage", syncTodos);

    return () => {
      window.removeEventListener("storage", syncTodos);
    };
  }, []);

  function createTodo(payload) {
    const nextTodo = buildTodo(payload);

    setTodos((currentTodos) => [nextTodo, ...currentTodos]);

    return nextTodo;
  }

  function deleteTodo(todoId) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== todoId));
  }

  function updateTodo(todoId, payload) {
    let updatedTodo = null;

    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        updatedTodo = mergeTodo(todo, payload);

        return updatedTodo;
      }),
    );

    return updatedTodo;
  }

  function getTodoById(todoId) {
    return todos.find((todo) => todo.id === todoId) ?? null;
  }

  return {
    todos,
    createTodo,
    deleteTodo,
    updateTodo,
    getTodoById,
  };
}
