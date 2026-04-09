const timeline = [
     {
    year: "Jan 2026 - now",
    title: "Junior Frontend Web Developer",
    text: "Dinamika UG, remote, part-time",
  },
  {
    year: "Oct 2025 - now",
    title: "Master Studies: Web Development & IT Solutions",
    text: "Mastering my knowledge at Kufstein University of Applied Sciences",
  },
    {
    year: "Oct 2023 - Jan 2026",
    title: "Junior Frontend Web Developer",
    text: "Freelance projects",
  },
  {
    year: "Oct 2023 - Nov 2024",
    title: "Certification: Full-Stack Web Developer",
    text: "Getting a hands-on experience and a certification as a Full-Stack Web Developer.",
  },

];

export default function BioSection() {
  return (
    <section id="bio" className="scroll-mt-24 py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-primary">
              Bio
            </p>

            <h2 className="mt-4 text-5xl font-medium tracking-tight text-gray-900 md:text-7xl">
              Building clear and thoughtful interfaces
            </h2>

            
            <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">
              In November 2024 I successfully completed the Full-Stack Web Development course, marking a significant milestone in my journey as a developer. I also hold a Diploma in Business Administration with a focus on Logistics and Marketing.
              As an explorer by nature, I have a curious and ever-learning mindset, always ready to dive into new challenges. Surrounded by inspiring, multicultural people, I’ve cultivated a unique blend of creative thinking and a logistics-oriented mindset. Now equipped with robust programming skills, I’m actively designing a life that aligns with my aspirations—where innovation, problem-solving, and creativity converge.
            </p>

            <h2 className="mt-4 text-5xl font-medium tracking-tight text-gray-900 md:text-7xl">
              Professional goals
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">
               <ul className="mt-4 space-y-3 text-lg text-gray-600 md:text-xl">
                    {[
                        "Securing a full-time role as a Full-Stack Web Developer",
                        "Building scalable e-commerce and SaaS applications",
                        "Crafting seamless user experiences",
                        "Developing robust backend systems",
                        "Continuously developing my skills",
                    ].map((goal, i) => (
                        <li key={i} className="flex items-center gap-3">
                        <input type="checkbox"  checked readOnly className="mt-1 h-5 w-5 accent-primary/90" />
                        {goal}
                        </li>
                    ))}
                    </ul>
                </p>
          </div>

          {/* RIGHT SIDE*/}
          <div className="space-y-6 ">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="rounded-[28px]  border border-gray-200 bg-[#f5f5f7] p-6 shadow-sm md:p-7"
              >
                <div className="gap-3 md:flex-row md:gap-6">
                  <div className="mb-6 min-w-[60px] text-sm font-medium uppercase tracking-[0.18em] text-gray-400">
                    {item.year}
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-lg leading-8 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}