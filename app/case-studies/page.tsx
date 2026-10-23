
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const cases = [
  {
    id: 1,
    title: "The Equality Question",
    type: "Hypothetical",
    subject: "Constitution",
    emoji: "⚖️",
    color: "bg-[#E7EEFF]",
    text: "text-[#23478B]",
    issue: "Can a public authority treat two similarly situated people differently without a valid reason?",
    tags: ["Article 14", "Equality"],
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "A Dispute Over a Missing Phone",
    type: "Hypothetical",
    subject: "BNS",
    emoji: "📱",
    color: "bg-[#DDF5E8]",
    text: "text-[#176943]",
    issue: "What facts matter when deciding whether taking someone's property amounts to theft?",
    tags: ["Property", "Theft"],
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "What Happens After a Complaint?",
    type: "Hypothetical",
    subject: "BNSS",
    emoji: "🔎",
    color: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
    issue: "How does the legal process begin after information about a possible cognizable offence is given?",
    tags: ["FIR", "Procedure"],
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Can a Message Be Evidence?",
    type: "Hypothetical",
    subject: "BSA",
    emoji: "💻",
    color: "bg-[#F0E5FF]",
    text: "text-[#6941A5]",
    issue: "What questions arise when a screenshot or electronic message is presented in a legal proceeding?",
    tags: ["Electronic records", "Evidence"],
    difficulty: "Intermediate",
  },
  {
    id: 5,
    title: "Freedom of Speech and Its Limits",
    type: "Hypothetical",
    subject: "Constitution",
    emoji: "🗣️",
    color: "bg-[#E7EEFF]",
    text: "text-[#23478B]",
    issue: "How should freedom of speech be understood alongside the restrictions permitted by the Constitution?",
    tags: ["Article 19", "Freedom"],
    difficulty: "Intermediate",
  },
  {
    id: 6,
    title: "Understanding a Bail Decision",
    type: "Hypothetical",
    subject: "BNSS",
    emoji: "🔓",
    color: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
    issue: "What factors and applicable legal provisions may matter when a court considers bail?",
    tags: ["Bail", "Criminal procedure"],
    difficulty: "Intermediate",
  },
];

const filters = ["All", "Constitution", "BNS", "BNSS", "BSA"];

export default function CaseStudiesPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCases = useMemo(() => {
    const query = search.trim().toLowerCase();

    return cases.filter((item) => {
      const matchesFilter =
        activeFilter === "All" || item.subject === activeFilter;

      const searchable = [
        item.title,
        item.subject,
        item.issue,
        item.type,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesFilter && (!query || searchable.includes(query));
    });
  }, [search, activeFilter]);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#344054]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#E4DDF5] bg-[#F0E9FF]">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-[#DDF5E8]/70 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#6941A5]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Case studies</span>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DFCEFA] bg-white px-4 py-2 text-sm font-semibold text-[#6941A5]">
                🧩 Law meets real life
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
                Every case tells{" "}
                <span className="text-[#7954BD]">a story.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore legal questions through facts, applicable laws,
                arguments and reasoning. Understand not just what the law says,
                but how legal problems are analysed.
              </p>

              <a
                href="#explore"
                className="mt-8 inline-flex rounded-xl bg-[#6941A5] px-6 py-3.5 font-semibold text-white transition hover:bg-[#54328A]"
              >
                Explore case studies →
              </a>
            </div>

            <div className="relative rounded-3xl border border-white bg-white p-7 shadow-xl shadow-purple-200/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0E5FF] text-4xl">
                🧠
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#7954BD]">
                Think like a law student
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#183B56]">
                Facts. Issues. Law. Reasoning.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Start with the facts, identify the legal question, find the
                relevant provision and work through the reasoning.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["🔍 Analyse", "📚 Understand", "💡 Apply"].map((item) => (
                  <span key={item} className="rounded-full bg-[#F0E5FF] px-3 py-2 text-xs font-semibold text-[#6941A5]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning framework */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", emoji: "📝", title: "The facts", desc: "What happened?", color: "bg-[#E7EEFF]", text: "text-[#23478B]" },
            { n: "02", emoji: "❓", title: "The issue", desc: "What legal question arises?", color: "bg-[#FFF0D8]", text: "text-[#8C5410]" },
            { n: "03", emoji: "📜", title: "The law", desc: "Which rules apply?", color: "bg-[#DDF5E8]", text: "text-[#176943]" },
            { n: "04", emoji: "💡", title: "The reasoning", desc: "How is the issue analysed?", color: "bg-[#F0E5FF]", text: "text-[#6941A5]" },
          ].map((step) => (
            <article key={step.n} className={`rounded-2xl ${step.color} p-5`}>
              <div className="flex items-center justify-between">
                <span className="text-3xl">{step.emoji}</span>
                <span className={`text-sm font-bold ${step.text}`}>{step.n}</span>
              </div>
              <h2 className={`mt-4 text-lg font-bold ${step.text}`}>{step.title}</h2>
              <p className={`mt-2 text-sm leading-6 ${step.text}`}>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Search and filters */}
      <section id="explore" className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#7954BD]">
          Explore the library
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
          Which legal story interests you? 🔎
        </h2>

        <label htmlFor="case-search" className="sr-only">
          Search case studies
        </label>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm focus-within:border-[#7954BD] focus-within:ring-2 focus-within:ring-[#7954BD]/10">
          <span className="text-xl">🔍</span>
          <input
            id="case-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search a topic, legal issue or subject..."
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-base"
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} className="text-sm font-semibold text-[#6941A5]">
              Clear
            </button>
          )}
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-[#6941A5] bg-[#6941A5] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#6941A5] hover:text-[#6941A5]"
              }`}
            >
              {filter === "All" ? "🌈 All subjects" : filter}
            </button>
          ))}
        </div>
      </section>

      {/* Case cards */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-[#183B56]">
              Cases to explore ✨
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Begin with a question. Build your legal reasoning.
            </p>
          </div>
          <span className="text-sm text-slate-500">
            {filteredCases.length} scenarios
          </span>
        </div>

        {filteredCases.length > 0 ? (
          <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCases.map((item) => (
              <article key={item.id} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#D8C8F3] hover:shadow-lg">
                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${item.color}`}>
                    {item.emoji}
                  </div>
                  <span className="rounded-full bg-[#FFF0D8] px-3 py-1.5 text-xs font-semibold text-[#8C5410]">
                    {item.type}
                  </span>
                </div>

                <p className={`mt-5 text-xs font-bold uppercase tracking-wider ${item.text}`}>
                  {item.subject}
                </p>
                <h3 className="mt-2 text-xl font-bold leading-7 text-[#183B56]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.issue}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`rounded-full px-3 py-1.5 text-xs font-medium ${item.color} ${item.text}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <span>🌱 {item.difficulty}</span>
                  <span>🧩 Practice scenario</span>
                </div>

                <div className="mt-5 rounded-xl bg-[#FAF9F6] p-3 text-xs leading-5 text-slate-600">
                  This is a hypothetical learning scenario, not a report of an actual court decision.
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-7 rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-4xl">🔍</p>
            <h3 className="mt-3 text-xl font-bold text-[#183B56]">No matching scenarios</h3>
            <p className="mt-2 text-sm text-slate-600">Try another search or clear the selected subject.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
              className="mt-5 rounded-xl bg-[#6941A5] px-5 py-3 font-semibold text-white"
            >
              Show all scenarios
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-3xl bg-[#183B56] px-7 py-10 text-white sm:px-12 sm:py-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#D5C2F5]">
              Keep exploring 💜
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Ready to learn the law?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-200">
              Connect legal scenarios with the Constitution, BNS, BNSS and BSA.
              Learn at your own pace, one question at a time.
            </p>
          </div>
          <a href="/learn" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-bold text-[#183B56] hover:bg-[#F0E5FF]">
            Explore learning paths →
          </a>
        </div>
      </section>

      {/* <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <a href="/" className="font-bold text-[#183B56]">Lexi Talks</a>
            <p className="mt-1 text-sm text-slate-500">Law, made easier.</p>
          </div>
          <p className="max-w-2xl text-xs leading-6 text-slate-500">
            Educational information only. Hypothetical scenarios are for learning
            and do not represent actual court decisions or individual legal advice.
          </p>
        </div>
      </footer> */}
    </main>
  );
}
