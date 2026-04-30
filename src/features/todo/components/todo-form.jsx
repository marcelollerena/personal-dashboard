import { useEffect, useState } from "react";

const EMPTY_FORM_VALUES = {
  title: "",
  description: "",
  imageUrl: "",
};

export function TodoForm({
  initialValues = EMPTY_FORM_VALUES,
  onSubmit,
  submitLabel,
  title,
  description,
  secondaryAction,
}) {
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    setFormValues(initialValues);
  }, [initialValues]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      title: formValues.title,
      description: formValues.description,
      imageUrl: formValues.imageUrl ?? "",
    });

    if (initialValues === EMPTY_FORM_VALUES) {
      setFormValues(EMPTY_FORM_VALUES);
    }
  }

  return (
    <form
      className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-950/30"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Todo Form
        </p>
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-sm leading-6 text-slate-400">{description}</p>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-200">Title</span>
        <input
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          name="title"
          onChange={handleChange}
          placeholder="Finish dashboard layout"
          value={formValues.title}
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-200">Description</span>
        <textarea
          required
          className="min-h-32 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          name="description"
          onChange={handleChange}
          placeholder="Describe the next concrete step for this task."
          value={formValues.description}
        />
      </label>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-200">Image URL</span>
        <input
          className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          name="imageUrl"
          onChange={handleChange}
          placeholder="https://images.example.com/todo-cover.jpg"
          value={formValues.imageUrl}
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          type="submit"
        >
          {submitLabel}
        </button>

        {secondaryAction}
      </div>
    </form>
  );
}
