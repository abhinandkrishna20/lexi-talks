
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    number: "01",
    emoji: "📘",
    title: "Introduction to BNS",
    description:
      "Understand the Bharatiya Nyaya Sanhita, 2023, its structure and the transition from the IPC.",
    reference: "BNS, 2023",
    tags: ["Overview", "Key definitions", "Commencement"],
    bg: "bg-[#E7EEFF]",
    border: "border-[#D1DEFF]",
    text: "text-[#23478B]",
  },
  {
    number: "02",
    emoji: "🛡️",
    title: "General Exceptions",
    description:
      "Explore circumstances in which criminal liability may be excluded or limited by law.",
    reference: "Chapter III",
    tags: ["Good faith", "Mistake of fact", "Exceptions"],
    bg: "bg-[#DDF5E8]",
    border: "border-[#BFE8D0]",
    text: "text-[#176943]",
  },
  {
    number: "03",
    emoji: "🚨",
    title: "Offences Against the Human Body",
    description:
      "Learn the legal framework for offences involving hurt, grievous hurt and other bodily offences.",
    reference: "Relevant BNS provisions",
    tags: ["Hurt", "Homicide", "Assault"],
    bg: "bg-[#FFE5E5]",
    border: "border-[#F6CACA]",
    text: "text-[#A23838]",
  },
  {
    number: "04",
    emoji: "🔐",
    title: "Offences Against Property",
    description:
      "Understand theft, extortion, robbery, cheating and related property offences.",
    reference: "Relevant BNS provisions",
    tags: ["Theft", "Robbery", "Cheating"],
    bg: "bg-[#FFF0D8]",
    border: "border-[#F5DDB3]",
    text: "text-[#8C5410]",
  },
  {
    number: "05",
    emoji: "🤝",
    title: "Criminal Intimidation",
    description:
      "Explore threats, intentional intimidation and other related concepts under criminal law.",
    reference: "BNS, 2023",
    tags: ["Threats", "Intention", "Defamation"],
    bg: "bg-[#F0E5FF]",
    border: "border-[#DFCEFA]",
    text: "text-[#6941A5]",
  },
  {
    number: "06",
    emoji: "👥",
    title: "Offences Against Women and Children",
    description:
      "Study the statutory framework addressing specified offences against women and children.",
    reference: "Relevant BNS chapters",
    tags: ["Consent", "Safety", "Protection"],
    bg: "bg-[#DFF4F7]",
    border: "border-[#BDE8ED]",
    text: "text-[#176B79]",
  },
];

const provisions = [
  {
    section: "Section 63",
    title: "Rape",
    description:
      "Explore the statutory definition and the provisions that must be read with it.",
    emoji: "📖",
    bg: "bg-[#F0E5FF]",
    text: "text-[#6941A5]",
    category: "Offences against women",
  },
  {
    section: "Section 103",
    title: "Punishment for murder",
    description:
      "Understand the punishment provision and its relationship to the relevant offence definitions.",
    emoji: "⚖️",
    bg: "bg-[#FFE5E5]",
    text: "text-[#A23838]",
    category: "Offences against the human body",
  },
  {
    section: "Section 303",
    title: "Theft",
    description:
      "Learn the statutory ingredients of theft and the importance of dishonest intention.",
    emoji: "🔐",
    bg: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
    category: "Offences against property",
  },
  {
    section: "Section 351",
    title: "Criminal intimidation",
    description:
      "Explore the provision addressing criminal intimidation and its legal ingredients.",
    emoji: "🛡️",
    bg: "bg-[#DDF5E8]",
    text: "text-[#176943]",
    category: "Offences against the person",
  },
];

const roadmap = [
  {
    number: "01",
    emoji: "🧭",
    title: "Learn the foundations",
    description:
      "Start with the purpose, structure, definitions and basic principles of criminal liability.",
  },
  {
    number: "02",
    emoji: "🧠",
    title: "Understand the ingredients",
    description:
      "Study the elements of an offence, intention, knowledge and applicable exceptions.",
  },
  {
    number: "03",
    emoji: "🔎",
    title: "Explore specific offences",
    description:
      "Compare the facts of a problem with the ingredients of the relevant statutory provision.",
  },
  {
    number: "04",
    emoji: "📝",
    title: "Practise and revise",
    description:
      "Use hypothetical examples, case studies and revision questions to test your understanding.",
  },
];

export default function BNSPage() {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filteredTopics = topics.filter((topic) =>
    [
      topic.title,
      topic.description,
      topic.reference,
      ...topic.tags,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );

  const filteredProvisions = provisions.filter((provision) =>
    [
      provision.section,
      provision.title,
      provision.description,
      provision.category,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#344054]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#BFE8D0] bg-[#E6F7EF]">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-60 w-60 rounded-full bg-[#DDF5E8]/80 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#176943]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/learn" className="hover:underline">
              Learn
            </Link>
            <span>/</span>
            <span className="font-semibold">BNS</span>
          </div>

          <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#BFE8D0] bg-white px-4 py-2 text-sm font-semibold text-[#176943]">
                🛡️ Understand criminal law
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
                Criminal law,{" "}
                <span className="text-[#21865C]">made understandable.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore the Bharatiya Nyaya Sanhita through simple explanations,
                relatable examples and important legal concepts. Learn how
                offences are defined and how criminal liability is analysed.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#topics"
                  className="rounded-xl bg-[#176943] px-6 py-3.5 font-semibold text-white transition hover:bg-[#105234]"
                >
                  Explore topics →
                </a>
                <a
                  href="#provisions"
                  className="rounded-xl border border-[#BFE8D0] bg-white px-6 py-3.5 font-semibold text-[#176943] transition hover:border-[#176943]"
                >
                  Important sections
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 text-sm text-[#176943]">
                <span>📘 Beginner friendly</span>
                <span>·</span>
                <span>💡 Practical examples</span>
                <span>·</span>
                <span>📜 Statutory references</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#BFE8D0]" />
              <div className="absolute -bottom-4 -left-3 h-24 w-24 rounded-full bg-[#E7EEFF]" />

              <div className="relative rounded-3xl border border-white bg-white p-6 shadow-xl shadow-emerald-200/40 sm:p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DDF5E8] text-4xl">
                  ⚖️
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#21865C]">
                  Start your journey
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#183B56]">
                  Every offence has legal ingredients.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Understand the facts, identify the applicable provision and
                  examine whether the required legal elements are present.
                </p>
                <div className="mt-5 rounded-xl bg-[#E6F7EF] p-4">
                  <p className="text-sm font-semibold text-[#176943]">
                    Facts → Ingredients → Law → Analysis
                  </p>
                </div>
                <a
                  href="#topics"
                  className="mt-5 flex items-center justify-center rounded-xl bg-[#176943] px-4 py-3 font-semibold text-white transition hover:bg-[#105234]"
                >
                  Begin exploring →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#21865C]">
          Find your topic 🔍
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
          What would you like to understand?
        </h2>

        <label htmlFor="bns-search" className="sr-only">
          Search BNS topics and sections
        </label>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm focus-within:border-[#21865C] focus-within:ring-2 focus-within:ring-[#21865C]/10">
          <span className="text-xl">🔎</span>
          <input
            id="bns-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try theft, murder, criminal intimidation..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[#183B56] outline-none placeholder:text-slate-400 sm:text-base"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-sm font-semibold text-[#176943]"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Topic cards */}
      <section id="topics" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#21865C]">
              Choose your path
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
              Explore the BNS 🧭
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Break criminal law into smaller concepts and build your
              understanding step by step.
            </p>
          </div>
          <span className="text-sm text-slate-500">
            {filteredTopics.length} topic areas
          </span>
        </div>

        {filteredTopics.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTopics.map((topic) => (
              <article
                key={topic.number}
                className={`group relative overflow-hidden rounded-3xl border ${topic.border} ${topic.bg} p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="pointer-events-none absolute -right-7 -top-7 h-28 w-28 rounded-full bg-white/50 transition-transform group-hover:scale-125" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                    {topic.emoji}
                  </span>
                  <span
                    className={`rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold ${topic.text}`}
                  >
                    {topic.number}
                  </span>
                </div>

                <h3 className={`mt-6 text-xl font-bold ${topic.text}`}>
                  {topic.title}
                </h3>
                <p className={`mt-3 text-sm leading-6 ${topic.text} opacity-90`}>
                  {topic.description}
                </p>

                <div className="mt-5">
                  <span
                    className={`inline-flex rounded-full bg-white/80 px-3 py-2 text-xs font-bold ${topic.text}`}
                  >
                    📜 {topic.reference}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-xs ${topic.text}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#provisions"
                  className={`mt-7 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold ${topic.text} transition hover:shadow-sm`}
                >
                  Explore provisions <span>→</span>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-3xl">🔍</p>
            <h3 className="mt-3 font-bold text-[#183B56]">No topics found</h3>
            <p className="mt-2 text-sm text-slate-600">
              Try another search or clear the search field.
            </p>
          </div>
        )}
      </section>

      {/* Important provisions */}
      <section id="provisions" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#21865C]">
            Start with the essentials
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
            Important BNS provisions 📜
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Explore a few widely studied provisions as entry points to further
            learning.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProvisions.map((provision) => (
              <article
                key={provision.section}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-2xl ${provision.bg}`}
                  >
                    {provision.emoji}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${provision.bg} ${provision.text}`}
                  >
                    {provision.section}
                  </span>
                </div>

                <p className={`mt-5 text-xs font-bold ${provision.text}`}>
                  {provision.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-[#183B56]">
                  {provision.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {provision.description}
                </p>

                <a
                  href="https://www.indiacode.nic.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#176943] hover:underline"
                >
                  Find official text ↗
                </a>
              </article>
            ))}
          </div>

          {filteredProvisions.length === 0 && (
            <p className="mt-8 rounded-2xl bg-[#FAF9F6] p-8 text-center text-slate-600">
              No matching provisions. Try another search term.
            </p>
          )}

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Provision references are introductory pointers, not complete legal
            commentary. Check the official statutory text, amendments and
            applicable judgments before relying on a legal proposition.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#21865C]">
          Your learning roadmap 🗺️
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
          Understand criminal law, one step at a time.
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Start with the basics, then move towards specific offences and
          practical legal analysis.
        </p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{step.emoji}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DDF5E8] text-xs font-bold text-[#176943]">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#183B56]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-3xl bg-[#176943] px-7 py-10 text-white sm:px-12 sm:py-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#BFE8D0]">
              Keep your curiosity alive 💚
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Every legal concept becomes clearer with practice.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-emerald-50">
              Explore a legal topic, examine its ingredients and revisit the
              official law whenever you need more detail.
            </p>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-bold text-[#176943] transition hover:bg-[#DDF5E8]"
          >
            Explore case studies →
          </a>
        </div>
      </section>
    </main>
  );
}
