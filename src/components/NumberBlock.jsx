const stats = [
  {
    value: "3+",
    label: "Selected Projects",
  },
  {
    value: "3+",
    label: "Years of Hands-On Coding",
  },
  {
    value: "100%",
    label: "Responsive Design",
  },
   {
    value: "3+",
    label: "Fluent: English, German, Russian Beginner: Spanisch",
  },
];

export default function NumbersBlock() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">
              EXPERIENCE
            </p>
            </div>
      <div className="mx-auto max-w-[800px] px-4">
        <div className="grid gap-4 md:grid-cols-2">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-5xl font-medium tracking-tight text-primary md:text-6xl">
                {item.value}
              </div>

              <p className="mt-3 text-lg leading-7 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}