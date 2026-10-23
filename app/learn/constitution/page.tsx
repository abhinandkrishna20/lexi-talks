
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    number: "01",
    emoji: "🌟",
    title: "Constitutional Basics",
    description: "Discover the Preamble, the making of the Constitution and its key features.",
    articles: "Start here",
    bg: "bg-[#E7EEFF]",
    border: "border-[#D1DEFF]",
    text: "text-[#23478B]",
    tags: ["Preamble", "Constituent Assembly", "Key features"],
  },
  {
    number: "02",
    emoji: "🗽",
    title: "Fundamental Rights",
    description: "Explore the rights protected by Part III of the Constitution.",
    articles: "Articles 12–35",
    bg: "bg-[#DDF5E8]",
    border: "border-[#BFE8D0]",
    text: "text-[#176943]",
    tags: ["Equality", "Freedom", "Constitutional remedies"],
  },
  {
    number: "03",
    emoji: "🤝",
    title: "Directive Principles",
    description: "Understand the principles that guide the State in making policies.",
    articles: "Articles 36–51",
    bg: "bg-[#FFF0D8]",
    border: "border-[#F5DDB3]",
    text: "text-[#8C5410]",
    tags: ["Social justice", "Welfare", "Public policy"],
  },
  {
    number: "04",
    emoji: "🌱",
    title: "Fundamental Duties",
    description: "Learn about the constitutional duties of citizens.",
    articles: "Article 51A",
    bg: "bg-[#F0E5FF]",
    border: "border-[#DFCEFA]",
    text: "text-[#6941A5]",
    tags: ["Citizenship", "Responsibilities", "Civic life"],
  },
  {
    number: "05",
    emoji: "🏛️",
    title: "Union Government",
    description: "Explore Parliament, the President, the Prime Minister and the Union executive.",
    articles: "Parts V and related provisions",
    bg: "bg-[#FFE5E5]",
    border: "border-[#F6CACA]",
    text: "text-[#A23838]",
    tags: ["Parliament", "President", "Executive"],
  },
  {
    number: "06",
    emoji: "🗺️",
    title: "Federalism & States",
    description: "Understand the relationship between the Union and State governments.",
    articles: "Parts XI and related provisions",
    bg: "bg-[#DFF4F7]",
    border: "border-[#BDE8ED]",
    text: "text-[#176B79]",
    tags: ["Federalism", "Governor", "State government"],
  },
];

const articles = [
  {
    number: "Article 14",
    emoji: "⚖️",
    title: "Equality before the law",
    description: "Understand equality before the law and equal protection of the laws.",
    category: "Equality",
    bg: "bg-[#E7EEFF]",
    text: "text-[#23478B]",
  },
  {
    number: "Article 19",
    emoji: "🗣️",
    title: "Certain freedoms",
    description: "Explore specified freedoms guaranteed to citizens, subject to constitutional restrictions.",
    category: "Freedom",
    bg: "bg-[#DDF5E8]",
    text: "text-[#176943]",
  },
  {
    number: "Article 21",
    emoji: "💙",
    title: "Life and personal liberty",
    description: "Learn about the constitutional protection of life and personal liberty.",
    category: "Liberty",
    bg: "bg-[#F0E5FF]",
    text: "text-[#6941A5]",
  },
  {
    number: "Article 32",
    emoji: "🛡️",
    title: "Constitutional remedies",
    description: "Discover the right to approach the Supreme Court to enforce Fundamental Rights.",
    category: "Remedies",
    bg: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
  },
];

const steps = [
  {
    step: "01",
    emoji: "📖",
    title: "Know the basics",
    description: "Start with the Preamble, constitutional structure and key terminology.",
  },
  {
    step: "02",
    emoji: "🗽",
    title: "Explore your rights",
    description: "Learn the meaning and scope of Fundamental Rights.",
  },
  {
    step: "03",
    emoji: "🏛️",
    title: "Understand government",
    description: "Explore Parliament, the executive, courts and federalism.",
  },
  {
    step: "04",
    emoji: "🧠",
    title: "Revise and practise",
    description: "Review key concepts and test your understanding.",
  },
];

export default function ConstitutionPage() {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filteredTopics = topics.filter((topic) =>
    [
      topic.title,
      topic.description,
      topic.articles,
      ...topic.tags,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );

  const filteredArticles = articles.filter((article) =>
    [
      article.number,
      article.title,
      article.description,
      article.category,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#344054]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#DCE5F4] bg-[#EAF0FF]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#C9D9FF]/70 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#23478B]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/learn" className="hover:underline">
              Learn
            </Link>
            <span>/</span>
            <span className="font-semibold">Constitution</span>
          </div>

          <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D1DEFF] bg-white px-4 py-2 text-sm font-semibold text-[#23478B]">
                ⚖️ Your constitutional learning journey
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
                The Constitution,{" "}
                <span className="text-[#4169C9]">made understandable.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                From Fundamental Rights to how Parliament works, explore
                India&apos;s Constitution one concept at a time, with simple
                explanations and practical examples.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#topics"
                  className="rounded-xl bg-[#23478B] px-6 py-3.5 font-semibold text-white transition hover:bg-[#183B56]"
                >
                  Explore topics ↓
                </a>
                <a
                  href="#articles"
                  className="rounded-xl border border-[#C7D6F5] bg-white px-6 py-3.5 font-semibold text-[#23478B] transition hover:border-[#23478B]"
                >
                  Discover key Articles
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 text-sm text-[#23478B]">
                <span>📘 Beginner friendly</span>
                <span>·</span>
                <span>💡 Simple examples</span>
                <span>·</span>
                <span>🔗 Legal references</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#D5E2FF]" />
              <div className="absolute -bottom-4 -left-3 h-24 w-24 rounded-full bg-[#DDF5E8]" />

              <div className="relative rounded-3xl border border-white bg-white p-6 shadow-xl shadow-blue-200/40 sm:p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E7EEFF] text-4xl">
                  🇮🇳
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#4169C9]">
                  Begin your journey
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#183B56]">
                  Start with the Preamble.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Discover the ideals expressed in the opening of the
                  Constitution and the vision behind them.
                </p>
                <div className="mt-5 rounded-xl bg-[#EAF0FF] p-4">
                  <p className="text-sm font-semibold text-[#23478B]">
                    Justice · Liberty · Equality · Fraternity
                  </p>
                </div>
                <a
                  href="#topics"
                  className="mt-5 flex items-center justify-center rounded-xl bg-[#23478B] px-4 py-3 font-semibold text-white transition hover:bg-[#183B56]"
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
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4169C9]">
            Find your topic 🔍
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
            What would you like to understand?
          </h2>
        </div>

        <label htmlFor="constitution-search" className="sr-only">
          Search Constitution topics and Articles
        </label>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm focus-within:border-[#4169C9] focus-within:ring-2 focus-within:ring-[#4169C9]/10">
          <span className="text-xl" aria-hidden="true">🔎</span>
          <input
            id="constitution-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try Article 14, Fundamental Rights, Parliament..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[#183B56] outline-none placeholder:text-slate-400 sm:text-base"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-sm font-semibold text-[#4169C9]"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#4169C9]">
              Choose your path
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
              Explore the Constitution 🧭
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Break a vast subject into smaller concepts that are easier to learn.
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
                  <span className={`rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold ${topic.text}`}>
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
                  <span className={`inline-flex rounded-full bg-white/80 px-3 py-2 text-xs font-bold ${topic.text}`}>
                    📜 {topic.articles}
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
                  href="#articles"
                  className={`mt-7 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold ${topic.text} transition hover:shadow-sm`}
                >
                  Explore key Articles <span>→</span>
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

      {/* Key Articles */}
      <section id="articles" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4169C9]">
                Start with the essentials
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
                Important Articles to know 📜
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Get introduced to some widely studied constitutional provisions.
              </p>
            </div>
            <span className="text-sm text-slate-500">
              {filteredArticles.length} Articles shown
            </span>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {filteredArticles.map((article) => (
                <article
                  key={article.number}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-2xl ${article.bg}`}>
                      {article.emoji}
                    </span>
                    <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${article.bg} ${article.text}`}>
                      {article.category}
                    </span>
                  </div>
                  <p className={`mt-5 text-sm font-bold ${article.text}`}>
                    {article.number}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-6 text-[#183B56]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {article.description}
                  </p>
                  <a
                    href="https://www.indiacode.nic.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#4169C9] hover:underline"
                  >
                    Find official text ↗
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl bg-[#FAF9F6] p-8 text-center text-slate-600">
              No Articles match this search. Try another term.
            </p>
          )}

          <p className="mt-6 text-xs leading-6 text-slate-500">
            These are introductory topic cards, not complete legal commentaries.
            Verify the current constitutional text and applicable judgments
            before relying on any legal interpretation.
          </p>
        </div>
      </section>

      {/* Learning roadmap */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#4169C9]">
          Your learning roadmap 🗺️
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
          One step at a time.
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          A suggested path for beginners. You can explore any topic in whichever
          order makes sense to you.
        </p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.step}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{step.emoji}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7EEFF] text-xs font-bold text-[#23478B]">
                  {step.step}
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

      {/* Friendly CTA */}
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#23478B] px-7 py-12 text-white sm:px-12 sm:py-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#D5E2FF]">
                Keep your curiosity alive 💙
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                The Constitution is easier when we learn together.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Start with a simple concept, explore the official text and
                gradually build a deeper understanding.
              </p>
            </div>
            <a
              href="/learn"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#23478B] transition hover:bg-[#E7EEFF]"
            >
              Explore all subjects →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <a href="/" className="font-bold text-[#183B56]">Lexi Talks</a>
            <p className="mt-1 text-sm text-slate-500">Law, made easier.</p>
          </div>
          <p className="max-w-2xl text-xs leading-6 text-slate-500">
            Educational information only. Consult authoritative legal sources
            and seek appropriate professional advice for individual matters.
          </p>
        </div>
      </footer> */}
    </main>
  );
}
