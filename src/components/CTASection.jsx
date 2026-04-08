import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

export default function CTASection() {
  return (
    <section className="w-full bg-gray-900 text-primary py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold mb-6">
  Let’s build something great together.
</h2>

        <p className="text-lg md:text-xl opacity-90 mb-10">
          Have a project in mind? Get in touch — I’d love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          
          {/* <a
            href="tel:+4917622895918"
            className="flex items-center gap-2 border border-primary px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition"
          >
           <AiFillPhone />+49 176 228 959 18
          </a> */}

          <a
            href="mailto:wera.seemann@gmail.com"
            className="flex items-center gap-2 border border-primary px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary transition"
          >
            <AiFillMail />wera.seemann@gmail.com
          </a>

        </div>
      </div>
    </section>
  );
}