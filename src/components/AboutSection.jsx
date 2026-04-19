import { services } from "../data/services";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">ME</p>

        <h1 className="mt-4 text-5xl font-medium tracking-tight text-gray-900 md:text-7xl">
          About
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
          I am Wera Seemann, a frontend developer focused on creating clean,
          responsive, and user-friendly digital experiences. With a background in
          marketing and logistics, I bring structure, clarity, and strong
          attention to user experience in every project.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-2xl font-semibold">
                  {Icon && <Icon className="shrink-0 text-primary" />}
                  <span>{item.title}</span>
                </div>

                <div className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}