export default function HeroSection() {
  const heroText =
    "- Frontend Developer to help you showcase yourself with clarity and confidence -";

  return (
    <section id="home" className="scroll-mt-24 pt-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-center">
            <h2
              className="shine-text mt-4 mb-20 max-w-[40rem] text-3xl font-poppins text-gray-600 md:text-5xl"
              data-text={heroText}
            >
              {heroText}
            </h2>
          </div>
          <div />
        </div>
      </div>

      <div className="w-full">
        <img
          src="/hero-neutral.png"
          alt="hero"
          className="block h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}