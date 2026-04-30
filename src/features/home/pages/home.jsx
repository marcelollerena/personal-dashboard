import { useCounter } from "../../zustand-example/store/zustand-example-store";

export function HomePage() {
  const { counter } = useCounter();

  return <div>Hola desde home, este es el valor del counter: {counter}</div>;
}
