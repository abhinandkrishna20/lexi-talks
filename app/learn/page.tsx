
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const subjects = [
  {
    id: "constitution",
    short: "Constitution",
    title: "Constitution of India",
    emoji: "⚖️",
    description:
      "Understand fundamental rights, equality, liberty and how India is governed.",
    bg: "bg-[#E7EEFF]",
    text: "text-[#23478B]",
    border: "border-[#D1DEFF]",
    badge: "bg-[#D5E2FF]",
    topics: ["Fundamental Rights", "Article 14", "Article 21", "Parliament"],
    level: "Beginner friendly",
    count: "Explore core concepts",
  },
  {
    id: "bns",
    short: "BNS",
    title: "Bharatiya Nyaya Sanhita",
    emoji: "🛡️",
    description:
      "Explore criminal offences, punishments and the principles of criminal law.",
    bg: "bg-[#DDF5E8]",
    text: "text-[#176943]",
    border: "border-[#BFE8D0]",
    badge: "bg-[#C7EED8]",
    topics: ["Theft", "Cheating", "Criminal Intimidation", "General Exceptions"],
    level: "Criminal law",
    count: "Explore core concepts",
  },
  {
    id: "bnss",
    short: "BNSS",
    title: "Bharatiya Nagarik Suraksha Sanhita",
    emoji: "🔎",
    description:
      "Learn how criminal cases move through investigation, bail and trial.",
    bg: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
    border: "border-[#F5DDB3]",
    badge: "bg-[#FFE5BA]",
    topics: ["FIR", "Arrest", "Bail", "Criminal Trial"],
    level: "Criminal procedure",
    count: "Explore core concepts",
  },
  {
    id: "bsa",
    short: "BSA",
    title: "Bharatiya Sakshya Adhiniyam",
    emoji: "📚",
    description:
      "Discover how evidence, witnesses, documents and electronic records are considered.",
    bg: "bg-[#F0E5FF]",
    text: "text-[#6941A5]",
    border: "border-[#DFCEFA]",
    badge: "bg-[#E6D7FF]",
    topics: ["Electronic Evidence", "Witnesses", "Admissions", "Burden of Proof"],
    level: "Law of evidence",
    count: "Explore core concepts",
  },
];

const lessons = [
  {
    title: "What are Fundamental Rights?",
    subject: "Constitution",
    emoji: "🗽",
    description:
      "Discover the basic rights protected by Part III of the Constitution.",
    level: "Beginner",
    time: "6 min read",
    color: "bg-[#E7EEFF]",
    text: "text-[#23478B]",
    tags: ["Rights", "Constitution"],
  },
  {
    title: "Understanding Article 14",
    subject: "Constitution",
    emoji: "⚖️",
    description:
      "Learn the meaning of equality before the law and equal protection of the laws.",
    level: "Beginner",
    time: "5 min read",
    color: "bg-[#E7EEFF]",
    text: "text-[#23478B]",
    tags: ["Equality", "Article 14"],
  },
  {
    title: "What happens after an FIR?",
    subject: "BNSS",
    emoji: "🔎",
    description:
      "Understand the basics of reporting information about a cognizable offence.",
    level: "Beginner",
    time: "7 min read",
    color: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
    tags: ["FIR", "Investigation"],
  },
  {
    title: "What is theft under the BNS?",
    subject: "BNS",
    emoji: "🛡️",
    description:
      "Explore the essential elements of theft under the Bharatiya Nyaya Sanhita.",
    level: "Beginner",
    time: "6 min read",
    color: "bg-[#DDF5E8]",
    text: "text-[#176943]",
    tags: ["Theft", "Offences"],
  },
  {
    title: "Understanding electronic evidence",
    subject: "BSA",
    emoji: "💻",
    description:
      "Get introduced to electronic records and their role in legal proceedings.",
    level: "Beginner",
    time: "8 min read",
    color: "bg-[#F0E5FF]",
    text: "text-[#6941A5]",
    tags: ["Digital", "Evidence"],
  },
  {
    title: "Bail: the basic idea",
    subject: "BNSS",
    emoji: "🔓",
    description:
      "Learn what bail means and why the applicable legal provisions matter.",
    level: "Beginner",
    time: "6 min read",
    color: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
    tags: ["Bail", "Procedure"],
  },
];

const popularTopics = [
  { label: "Fundamental Rights", emoji: "🗽", subject: "Constitution" },
  { label: "Article 14", emoji: "⚖️", subject: "Constitution" },
  { label: "FIR", emoji: "🔎", subject: "BNSS" },
  { label: "Bail", emoji: "🔓", subject: "BNSS" },
  { label: "Theft", emoji: "🛡️", subject: "BNS" },
  { label: "Electronic Evidence", emoji: "💻", subject: "BSA" },
];

type SubjectFilter =
  | "All"
  | "Constitution"
  | "BNS"
  | "BNSS"
  | "BSA";

export default function LearnPage() {
  const [search, setSearch] = useState("");
  const [activeSubject, setActiveSubject] =
    useState<SubjectFilter>("All");

  const filteredLessons = useMemo(() => {
    const query = search.trim().toLowerCase();

    return lessons.filter((lesson) => {
      const matchesSubject =
        activeSubject === "All" || lesson.subject === activeSubject;

      const searchableText = [
        lesson.title,
        lesson.subject,
        lesson.description,
        ...lesson.tags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesSubject && (!query || searchableText.includes(query));
    });
  }, [search, activeSubject]);

  function chooseTopic(topic: string, subject: string) {
    setSearch(topic);
    setActiveSubject(subject as SubjectFilter);
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#344054]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#F0F6F5]">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D5EDE6] opacity-70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-[#E7EEFF] opacity-80 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
          <Link
            href="/"   
       
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#167D78] hover:underline"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C8E5DF] bg-white px-4 py-2 text-sm font-medium text-[#167D78]">
                ✨ Your learning journey starts here
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
                Find your starting point{" "}
                <span className="text-[#167D78]">in law.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Big legal concepts. Simple explanations. Real-world examples.
                Pick a subject, follow your curiosity and learn at your own pace.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                  📖 Easy explanations
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                  💡 Practical examples
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-2">
                  🎯 Self-paced learning
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-white bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5F5F2] text-3xl">
                💬
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[#167D78]">
                Start with a question
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#183B56]">
                What are you curious about?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                From fundamental rights to bail, discover the basics without
                getting lost in legal jargon.
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-[#FAF9F6] px-4 py-3">
                <p className="text-xs text-slate-500">Try exploring</p>
                <p className="mt-1 font-medium text-[#183B56]">
                  Article 14, FIR, bail...
                </p>
              </div>

              <a
                href="#lessons"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#183B56] px-4 py-3 font-semibold text-white transition hover:bg-[#245573]"
              >
                Explore lessons <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="mx-auto max-w-7xl px-5 pt-12 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#167D78]">
              Explore the library
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
              What would you like to learn?
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            Explore four core areas of Indian law.
          </p>
        </div>

        <label
          htmlFor="lesson-search"
          className="sr-only"
        >
          Search lessons, laws and topics
        </label>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition focus-within:border-[#167D78] focus-within:ring-2 focus-within:ring-[#167D78]/10">
          <span className="text-xl" aria-hidden="true">🔍</span>
          <input
            id="lesson-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search a law, article, section or topic..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[#183B56] outline-none placeholder:text-slate-400 sm:text-base"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[#167D78] hover:bg-[#E5F5F2]"
            >
              Clear
            </button>
          )}
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {(["All", "Constitution", "BNS", "BNSS", "BSA"] as const).map(
            (filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveSubject(filter)}
                aria-pressed={activeSubject === filter}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  activeSubject === filter
                    ? "border-[#183B56] bg-[#183B56] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#167D78] hover:text-[#167D78]"
                }`}
              >
                {filter === "All" ? "🌈 All topics" : filter}
              </button>
            ),
          )}
        </div>
      </section>

      {/* Subject cards */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold text-[#183B56] sm:text-3xl">
              Your four learning paths 🧭
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              Each subject has its own story. Choose where yours begins.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {subjects.map((subject, index) => (
            <article
              key={subject.id}
              className={`group relative overflow-hidden rounded-3xl border ${subject.border} ${subject.bg} p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/50 transition-transform duration-300 group-hover:scale-125" />

              <div className="relative flex items-start justify-between gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm">
                  {subject.emoji}
                </div>
                <span className={`rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold ${subject.text}`}>
                  0{index + 1}
                </span>
              </div>

              <p className={`mt-6 text-xs font-bold uppercase tracking-widest ${subject.text}`}>
                {subject.short}
              </p>
              <h3 className={`mt-2 text-xl font-bold leading-7 ${subject.text}`}>
                {subject.title}
              </h3>
              <p className={`mt-3 text-sm leading-6 ${subject.text} opacity-90`}>
                {subject.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {subject.topics.slice(0, 2).map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => chooseTopic(topic, subject.short)}
                    className={`rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium ${subject.text} transition hover:bg-white`}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveSubject(subject.short as SubjectFilter);
                  setSearch("");
                  document.getElementById("lessons")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={`mt-7 flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold ${subject.text} transition hover:shadow-sm`}
              >
                Explore subject <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Popular topics */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#167D78]">
            Curiosity starts small
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
            Popular topics to explore 🔥
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Not sure where to start? Pick a familiar term and explore its legal meaning.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {popularTopics.map((topic) => (
              <button
                key={topic.label}
                type="button"
                onClick={() => chooseTopic(topic.label, topic.subject)}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 py-3 text-sm font-semibold text-[#183B56] transition hover:border-[#167D78] hover:bg-[#E5F5F2]"
              >
                <span>{topic.emoji}</span>
                {topic.label}
                <span className="text-[#167D78]">↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson list */}
      <section id="lessons" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#167D78]">
              Learn at your pace
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
              {search ? `Results for "${search}"` : "Lessons worth exploring ✨"}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {filteredLessons.length} sample{" "}
              {filteredLessons.length === 1 ? "lesson" : "lessons"} shown
            </p>
          </div>
        </div>

        {filteredLessons.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredLessons.map((lesson) => (
              <article
                key={lesson.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${lesson.color}`}>
                    {lesson.emoji}
                  </div>
                  <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${lesson.color} ${lesson.text}`}>
                    {lesson.subject}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold leading-7 text-[#183B56] transition group-hover:text-[#167D78]">
                  {lesson.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {lesson.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <span>🌱 {lesson.level}</span>
                  <span>·</span>
                  <span>⏱️ {lesson.time}</span>
                </div>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#167D78]">
                  Lesson page coming next <span>→</span>
                </span>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <div className="text-4xl">🔎</div>
            <h3 className="mt-4 text-xl font-bold text-[#183B56]">
              No matching topics yet
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Try another search term or clear the current filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveSubject("All");
              }}
              className="mt-5 rounded-xl bg-[#183B56] px-5 py-3 font-semibold text-white transition hover:bg-[#245573]"
            >
              Show all lessons
            </button>
          </div>
        )}
      </section>

      {/* Friendly CTA */}
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#183B56] px-7 py-12 text-white sm:px-12 sm:py-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#BDE9DF]">
                Your questions matter
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Law is easier when we learn together. 💚
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                Build your understanding one question at a time. Our community
                learning features will be introduced in a later development step.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#183B56] transition hover:bg-[#E5F5F2]"
            >
              Back to home <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
