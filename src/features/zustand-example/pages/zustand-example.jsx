import React from "react";
import { useCounter } from "../store/zustand-example-store";

export function ZustandExamplePage() {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-3xl opacity-85"> {counter}</h1>

      <div className="flex gap-10">
        <button
          onClick={increment}
          className="p-4 rounded-2xl bg-amber-500 text-black"
        >
          Incrementar
        </button>

        <button
          onClick={decrement}
          className="p-4 rounded-2xl bg-red-500 text-black"
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}
