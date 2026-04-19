export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <p className="text-sm uppercase tracking-[0.22em] text-primary">
          CONTACT
        </p>

        <h2 className="mt-4 text-5xl font-medium tracking-tight text-gray-900 md:text-7xl">
          Direct Message
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600 md:text-2xl">
          Let&apos;s build something great together...
        </p>

        <form
          action="https://formspree.io/f/xvgkvnkw"
          method="POST"
          className="mt-8 max-w-md space-y-3"
        >
          <input
            className="w-full rounded-lg border p-3 text-lg leading-8 text-gray-600 md:text-xl"
            placeholder="Email"
            type="email"
            name="email"
          />

          <textarea
            className="w-full rounded-lg border p-3 text-lg leading-8 text-gray-600 md:text-xl"
            rows={4}
            placeholder="Message"
            name="message"
          />

          <button className="rounded-full bg-primary px-5 py-3 text-black hover:opacity-90">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}