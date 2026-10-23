
const subjects = [
  {
    title: "Constitution of India",
    short: "Constitution",
    description: "Understand fundamental rights, equality, liberty and how our government works.",
    icon: "⚖️",
    color: "bg-blue-50",
  },
  {
    title: "Bharatiya Nyaya Sanhita",
    short: "BNS",
    description: "Explore criminal offences, penalties and the principles behind criminal law.",
    icon: "🛡️",
    color: "bg-emerald-50",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita",
    short: "BNSS",
    description: "Learn about FIRs, arrests, bail, investigations and criminal trials.",
    icon: "🔎",
    color: "bg-amber-50",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam",
    short: "BSA",
    description: "Discover evidence, witnesses, admissions and electronic records.",
    icon: "📚",
    color: "bg-purple-50",
  },
];

const features = [
  {
    title: "Learn through examples",
    description: "Understand legal concepts through simple explanations and relatable situations.",
    icon: "💡",
  },
  {
    title: "Explore case studies",
    description: "Discover the facts, legal issues and reasoning behind important cases.",
    icon: "📖",
  },
  {
    title: "Revise with confidence",
    description: "Review key concepts, short notes and practice questions.",
    icon: "✍️",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#344054]">
      {/* <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#183B56] text-xl text-white">
              L
            </span>
            <span className="text-xl font-bold tracking-tight text-[#183B56]">
              Lexi Talks
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#learn" className="transition hover:text-[#167D78]">Learn</a>
            <a href="#cases" className="transition hover:text-[#167D78]">Case studies</a>
            <a href="#revision" className="transition hover:text-[#167D78]">Revision</a>
            <a href="#community" className="transition hover:text-[#167D78]">Community</a>
          </nav>

          <a
            href="#learn"
            className="rounded-xl bg-[#183B56] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#245573]"
          >
            Start learning
          </a>
        </div>
      </header> */}

      <section className="overflow-hidden border-b border-[#E4E7EC] bg-[#F0F6F5]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C8E5DF] bg-white px-4 py-2 text-sm font-medium text-[#167D78]">
              <span className="h-2 w-2 rounded-full bg-[#167D78]" />
              Your friendly guide to Indian law
            </span>

            <h1 className="mt-7 max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
              Law doesn&apos;t have to be complicated.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Understand Indian law through simple explanations, relatable
              examples and conversations with a learning community.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#learn"
                className="rounded-xl bg-[#183B56] px-6 py-3.5 font-semibold text-white transition hover:bg-[#245573]"
              >
                Explore the law →
              </a>
              <a
                href="#community"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-[#183B56] transition hover:border-[#167D78]"
              >
                Join the conversation
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Start with the basics. Ask freely. Learn at your own pace.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#D8EEE8]" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#DDE7F5]" />

            <div className="relative rounded-3xl border border-white bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5F5F2] text-2xl">
                  💬
                </div>
                <div>
                  <p className="font-semibold text-[#183B56]">Let&apos;s talk law</p>
                  <p className="text-sm text-slate-500">What are you curious about?</p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 bg-[#FAF9F6] p-4">
                <p className="text-sm leading-6 text-slate-600">
                  What is Article 14? How does an FIR work? What does bail mean?
                </p>
                <div className="mt-4 flex justify-end">
                  <a
                    href="#learn"
                    aria-label="Explore legal topics"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#183B56] text-xl text-white"
                  >
                    →
                  </a>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Fundamental rights", "FIR", "Bail", "Evidence"].map((topic) => (
                  <a
                    key={topic}
                    href="#learn"
                    className="rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-[#167D78] hover:text-[#167D78]"
                  >
                    {topic}
                  </a>
                ))}
              </div>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-[#183B56]">
                  Legal knowledge belongs to everyone.
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  One concept at a time, one question at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#167D78]">
              Start exploring
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#183B56] sm:text-4xl">
              Start with the basics
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Four important areas of Indian law, explained in a way that makes sense.
            </p>
          </div>
          <span className="text-sm font-medium text-[#167D78]">4 learning areas</span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject) => (
            <article
              key={subject.short}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#A7D7CE] hover:shadow-lg hover:shadow-slate-200/50"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${subject.color}`}>
                {subject.icon}
              </div>
              <p className="mt-5 text-sm font-semibold text-[#167D78]">
                {subject.short}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-7 text-[#183B56]">
                {subject.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {subject.description}
              </p>
              <a
                href="#features"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#183B56] transition group-hover:text-[#167D78]"
              >
                Explore subject <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#167D78]">
              Learning made simple
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#183B56] sm:text-4xl">
              More than reading a law book.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Learn what the law says, see how it applies and revisit what matters.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-2xl bg-[#FAF9F6] p-7">
                <span className="text-3xl" aria-hidden="true">{feature.icon}</span>
                <h3 className="mt-5 text-xl font-bold text-[#183B56]">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="rounded-3xl bg-[#E5F5F2] p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#167D78]">
            Law in real life
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[#183B56]">
            Understand the story behind the law.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Explore case studies that connect legal provisions with facts,
            questions before the court and judicial reasoning.
          </p>
          <a
            href="#learn"
            className="mt-7 inline-flex rounded-xl bg-[#183B56] px-5 py-3 font-semibold text-white transition hover:bg-[#245573]"
          >
            Explore learning topics →
          </a>
        </div>
      </section>

      <section id="revision" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
            <span className="text-3xl" aria-hidden="true">✍️</span>
            <h2 className="mt-4 text-2xl font-bold text-[#183B56]">Quick revision</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Refresh key terms, review concise notes and practise with questions
              that explain why an answer is correct.
            </p>
            <a href="#learn" className="mt-5 inline-block font-semibold text-[#167D78]">
              Explore learning areas →
            </a>
          </article>

          <article id="community" className="rounded-2xl bg-[#183B56] p-7 text-white sm:p-9">
            <span className="text-3xl" aria-hidden="true">💬</span>
            <h2 className="mt-4 text-2xl font-bold">No question is too basic.</h2>
            <p className="mt-3 leading-7 text-slate-200">
              A welcoming learning community where people can ask questions,
              share explanations and learn from one another.
            </p>
            <p className="mt-5 text-sm font-medium text-[#BDE9DF]">
              Community Q&A — coming in a later development step.
            </p>
          </article>
        </div>
      </section>

      {/* <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <p className="font-bold text-[#183B56]">Lexi Talks</p>
            <p className="mt-1 text-sm text-slate-500">Law, made easier.</p>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Educational information only. Content should be checked against
            authoritative legal sources and is not a substitute for advice on
            individual circumstances.
          </p>
        </div>
      </footer> */}
    </main>
  );
}
