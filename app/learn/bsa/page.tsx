
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    number: "01",
    icon: "📚",
    title: "Introduction to BSA",
    description:
      "Understand the purpose of evidence law and how it helps courts determine facts.",
    tags: ["Basics", "Evidence law"],
  },
  {
    number: "02",
    icon: "🗣️",
    title: "Oral and Documentary Evidence",
    description:
      "Learn how witness statements, documents and records can be presented as evidence.",
    tags: ["Oral evidence", "Documents"],
  },
  {
    number: "03",
    icon: "💻",
    title: "Electronic and Digital Evidence",
    description:
      "Explore electronic records, digital communications and their role in legal proceedings.",
    tags: ["Digital evidence", "Technology"],
  },
  {
    number: "04",
    icon: "⚖️",
    title: "Burden of Proof",
    description:
      "Understand who must prove a fact and how the burden of proof operates.",
    tags: ["Proof", "Legal principles"],
  },
  {
    number: "05",
    icon: "👨‍⚖️",
    title: "Witnesses and Examination",
    description:
      "Discover witness competency, examination, cross-examination and related concepts.",
    tags: ["Witnesses", "Trial"],
  },
  {
    number: "06",
    icon: "🔍",
    title: "Relevancy of Facts",
    description:
      "Learn why some facts matter in a case and how courts assess their relevance.",
    tags: ["Relevant facts", "Court"],
  },
];

const provisions = [
  {
    section: "Section 3",
    title: "Evidence may be given of facts in issue and relevant facts",
    description:
      "Introduces the central rule governing which facts may be proved through evidence.",
    tag: "Relevancy",
  },
  {
    section: "Section 22",
    title: "Confession caused by inducement, threat, coercion or promise",
    description:
      "Learn about the circumstances in which a confession may become irrelevant in a criminal proceeding.",
    tag: "Confessions",
  },
  {
    section: "Section 26",
    title: "Cases in which statements relating to facts of a relevant fact are relevant",
    description:
      "Explore specified circumstances in which statements by persons who cannot be called as witnesses may be relevant.",
    tag: "Statements",
  },
  {
    section: "Section 61",
    title: "Electronic or digital record",
    description:
      "Understand the statutory recognition of electronic and digital records as documentary evidence.",
    tag: "Digital evidence",
  },
];

const roadmap = [
  {
    step: "01",
    title: "Build the foundation",
    description:
      "Start with the purpose of evidence law, important definitions and relevancy of facts.",
  },
  {
    step: "02",
    title: "Understand evidence",
    description:
      "Study oral evidence, documentary evidence, electronic records and admissions.",
  },
  {
    step: "03",
    title: "Learn proof and witnesses",
    description:
      "Explore burden of proof, presumptions, witness examination and related principles.",
  },
  {
    step: "04",
    title: "Revise and practise",
    description:
      "Review key concepts, solve MCQs and connect the rules to practical case studies.",
  },
];

const officialUrl =
  "https://www.indiacode.nic.in/";

export default function BSAPage() {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filteredTopics = topics.filter((topic) =>
    [
      topic.title,
      topic.description,
      ...topic.tags,
      topic.number,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  const filteredProvisions = provisions.filter((provision) =>
    [
      provision.section,
      provision.title,
      provision.description,
      provision.tag,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#344054]">
      {/* Hero */}
      <section className="border-b border-[#E7DDF5] bg-[#F0E5FF]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-[#6941A5]">
              📖 Learning Library
            </span>
            <span className="rounded-full bg-[#E3D2FF] px-3 py-1 text-sm font-medium text-[#57358C]">
              Evidence Law
            </span>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#6941A5]">
                Bharatiya Sakshya Adhiniyam, 2023
              </p>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
                Evidence law, made easier. 💜
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#52566A] sm:text-lg">
                What makes evidence relevant? How do courts evaluate digital
                records? Explore the rules of evidence through simple
                explanations and practical examples.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#topics"
                  className="inline-flex items-center rounded-xl bg-[#6941A5] px-6 py-3 font-semibold text-white transition hover:bg-[#57358C]"
                >
                  Explore topics <span className="ml-2">→</span>
                </a>

                <a
                  href={officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl border border-[#C9B5E8] bg-white px-6 py-3 font-semibold text-[#6941A5] transition hover:bg-[#FAF7FF]"
                >
                  Official legal text ↗
                </a>
              </div>
            </div>

            <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-[2.5rem] border border-white/80 bg-white/70 shadow-sm sm:h-64 sm:w-64">
              <div className="text-center">
                <div className="text-7xl">⚖️</div>
                <p className="mt-4 text-sm font-bold text-[#6941A5]">
                  FACTS · PROOF · EVIDENCE
                </p>
                <p className="mt-2 text-xs text-[#77708A]">
                  Learn one concept at a time
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { value: "01", label: "Understand the basics" },
              { value: "02", label: "Explore key concepts" },
              { value: "03", label: "Practise and revise" },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/80 bg-white/60 p-4"
              >
                <p className="text-2xl font-extrabold text-[#6941A5]">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-medium text-[#52566A]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8">
        <label
          htmlFor="bsa-search"
          className="mb-3 block text-sm font-bold text-[#344054]"
        >
          What would you like to learn today?
        </label>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-lg"
          >
            🔎
          </span>
          <input
            id="bsa-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search topics, digital evidence, burden of proof..."
            className="w-full rounded-2xl border border-[#E2D8F0] bg-white py-4 pl-12 pr-4 outline-none transition placeholder:text-[#98A2B3] focus:border-[#6941A5] focus:ring-4 focus:ring-[#6941A5]/10"
          />
        </div>
      </section>

      {/* Topics */}
      <section
        id="topics"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8"
      >
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#6941A5]">
              Start here
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#183B56]">
              Explore the topics
            </h2>
            <p className="mt-2 text-[#667085]">
              Break complex legal concepts into manageable lessons.
            </p>
          </div>

          <span className="rounded-full bg-[#F0E5FF] px-3 py-1.5 text-sm font-semibold text-[#6941A5]">
            {filteredTopics.length} topics
          </span>
        </div>

        {filteredTopics.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTopics.map((topic) => (
              <article
                key={topic.number}
                className="group rounded-3xl border border-[#E9DDF7] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#C9B5E8] hover:shadow-lg hover:shadow-[#6941A5]/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0E5FF] text-3xl">
                    {topic.icon}
                  </div>
                  <span className="text-sm font-bold text-[#B9A4D8]">
                    {topic.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#183B56]">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#667085]">
                  {topic.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#F7F2FD] px-3 py-1 text-xs font-medium text-[#6941A5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-[#F0EAF7] pt-4">
                  <span className="text-sm font-bold text-[#6941A5]">
                    Learning guide <span className="ml-1">→</span>
                  </span>
                  <p className="mt-1 text-xs text-[#98A2B3]">
                    Lesson content coming soon
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#D8C8EB] bg-white p-10 text-center">
            <p className="text-3xl">🔎</p>
            <h3 className="mt-3 font-bold text-[#183B56]">
              No topics found
            </h3>
            <p className="mt-2 text-sm text-[#667085]">
              Try another keyword or clear your search.
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-4 rounded-xl bg-[#6941A5] px-4 py-2 font-semibold text-white hover:bg-[#57358C]"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      {/* Key provisions */}
      <section className="border-y border-[#E9DDF7] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#6941A5]">
              Quick reference
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#183B56]">
              Key provisions to explore
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[#667085]">
              Use these as starting points for revision. Always check the
              current official statutory text for the full wording and
              context.
            </p>
          </div>

          {filteredProvisions.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredProvisions.map((provision) => (
                <article
                  key={provision.section}
                  className="rounded-2xl border border-[#E9DDF7] bg-[#FCFAFF] p-5 transition hover:border-[#C9B5E8]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-lg bg-[#E9DDF7] px-3 py-1.5 text-sm font-extrabold text-[#6941A5]">
                      {provision.section}
                    </span>
                    <span className="text-xs font-semibold text-[#8B79A6]">
                      {provision.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-7 text-[#183B56]">
                    {provision.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#667085]">
                    {provision.description}
                  </p>

                  <a
                    href={officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-bold text-[#6941A5] hover:underline"
                  >
                    Verify official text ↗
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-xl bg-[#FCFAFF] p-6 text-sm text-[#667085]">
              No provisions match this search. Try a section number or another
              keyword.
            </p>
          )}
        </div>
      </section>

      {/* Learning roadmap */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#6941A5]">
            Your learning path
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#183B56]">
            Learn BSA step by step
          </h2>
          <p className="mt-3 text-[#667085]">
            Build your understanding first, then move to revision and practice.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((item) => (
            <article
              key={item.step}
              className="rounded-2xl border border-[#E9DDF7] bg-white p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0E5FF] font-extrabold text-[#6941A5]">
                {item.step}
              </span>
              <h3 className="mt-5 text-lg font-bold text-[#183B56]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#667085]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Next step */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#6941A5] px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="grid items-center gap-7 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#E4D5FF]">
                Put knowledge into context
              </p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Law becomes clearer through examples. 💜
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#F0E8FF]">
                Explore practical case studies to connect legal concepts with
                real-world situations.
              </p>
            </div>

            <Link
              href="/case-studies"
              className="inline-flex w-fit items-center rounded-xl bg-white px-6 py-3 font-bold text-[#6941A5] transition hover:bg-[#F0E5FF]"
            >
              Explore case studies →
            </Link>
          </div>
        </div>
      </section>

      <p className="mx-auto max-w-7xl px-5 pb-8 text-xs leading-6 text-[#98A2B3] sm:px-8">
        Educational resource only; not legal advice. Statutory provisions and
        their interpretation should be checked against the official text and
        relevant judicial decisions.
      </p>
    </main>
  );
}
