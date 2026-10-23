
"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    number: "01",
    emoji: "🧭",
    title: "Introduction to BNSS",
    description:
      "Understand the Bharatiya Nagarik Suraksha Sanhita, 2023 and its role in criminal procedure.",
    reference: "Overview",
    tags: ["Structure", "Definitions", "Procedure"],
    bg: "bg-[#E7EEFF]",
    border: "border-[#D1DEFF]",
    text: "text-[#23478B]",
  },
  {
    number: "02",
    emoji: "🚨",
    title: "FIR and Police Information",
    description:
      "Learn how information about cognizable offences is recorded and understand the basic procedural framework.",
    reference: "Section 173",
    tags: ["FIR", "Cognizable offences", "Information"],
    bg: "bg-[#FFF0D8]",
    border: "border-[#F5DDB3]",
    text: "text-[#8C5410]",
  },
  {
    number: "03",
    emoji: "👮",
    title: "Arrest and Rights",
    description:
      "Explore arrest-related provisions, safeguards and the legal requirements that apply to police action.",
    reference: "Relevant BNSS provisions",
    tags: ["Arrest", "Safeguards", "Rights"],
    bg: "bg-[#DDF5E8]",
    border: "border-[#BFE8D0]",
    text: "text-[#176943]",
  },
  {
    number: "04",
    emoji: "🔎",
    title: "Investigation",
    description:
      "Follow the procedural stages involved in investigating an alleged criminal offence.",
    reference: "Investigation provisions",
    tags: ["Evidence collection", "Police report", "Inquiry"],
    bg: "bg-[#F0E5FF]",
    border: "border-[#DFCEFA]",
    text: "text-[#6941A5]",
  },
  {
    number: "05",
    emoji: "🔓",
    title: "Bail and Bonds",
    description:
      "Understand the difference between bailable and non-bailable offences and the basic bail framework.",
    reference: "Relevant BNSS provisions",
    tags: ["Bail", "Bonds", "Court"],
    bg: "bg-[#DFF4F7]",
    border: "border-[#BDE8ED]",
    text: "text-[#176B79]",
  },
  {
    number: "06",
    emoji: "🏛️",
    title: "Trials and Court Procedure",
    description:
      "Explore the broad stages of criminal proceedings, from court processes to judgment.",
    reference: "Trial provisions",
    tags: ["Trial", "Judgment", "Appeal"],
    bg: "bg-[#FFE5E5]",
    border: "border-[#F6CACA]",
    text: "text-[#A23838]",
  },
];

const provisions = [
  {
    section: "Section 35",
    title: "Arrest without warrant",
    description:
      "Study the circumstances and statutory conditions governing arrest without a warrant by police.",
    emoji: "👮",
    bg: "bg-[#DDF5E8]",
    text: "text-[#176943]",
    category: "Arrest",
  },
  {
    section: "Section 173",
    title: "Information in cognizable cases",
    description:
      "Explore the provision concerning information relating to the commission of cognizable offences.",
    emoji: "🚨",
    bg: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
    category: "FIR and police information",
  },
  {
    section: "Section 187",
    title: "Procedure when investigation cannot be completed in 24 hours",
    description:
      "Understand the statutory framework relating to remand when investigation cannot be completed within the specified period.",
    emoji: "⏳",
    bg: "bg-[#F0E5FF]",
    text: "text-[#6941A5]",
    category: "Investigation and remand",
  },
  {
    section: "Section 479",
    title: "Maximum period for which an undertrial prisoner can be detained",
    description:
      "Explore the statutory framework governing the maximum period of detention for undertrial prisoners, subject to applicable conditions.",
    emoji: "🔓",
    bg: "bg-[#DFF4F7]",
    text: "text-[#176B79]",
    category: "Undertrial detention",
  },
];

const roadmap = [
  {
    number: "01",
    emoji: "🧭",
    title: "Understand the process",
    description:
      "Start with the purpose of criminal procedure, court structure and important definitions.",
  },
  {
    number: "02",
    emoji: "🚨",
    title: "Learn the first steps",
    description:
      "Explore information to police, FIR-related procedure and the commencement of investigation.",
  },
  {
    number: "03",
    emoji: "⚖️",
    title: "Follow the proceedings",
    description:
      "Study arrest, remand, bail, investigation, trial and other procedural stages.",
  },
  {
    number: "04",
    emoji: "📝",
    title: "Apply and revise",
    description:
      "Use case studies and revision questions to understand how procedural rules work in context.",
  },
];

export default function BNSSPage() {
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
      <section className="relative overflow-hidden border-b border-[#F5DDB3] bg-[#FFF3DE]">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-60 w-60 rounded-full bg-[#FFE5E5]/70 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#8C5410]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/learn" className="hover:underline">
              Learn
            </Link>
            <span>/</span>
            <span className="font-semibold">BNSS</span>
          </div>

          <div className="mt-9 grid items-center gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5DDB3] bg-white px-4 py-2 text-sm font-semibold text-[#8C5410]">
                🔎 Understand criminal procedure
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
                Criminal procedure,{" "}
                <span className="text-[#B7791F]">step by step.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore the Bharatiya Nagarik Suraksha Sanhita through simple
                explanations, procedural examples and important statutory
                references. Understand how criminal proceedings move through
                the legal system.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#topics"
                  className="rounded-xl bg-[#8C5410] px-6 py-3.5 font-semibold text-white transition hover:bg-[#70410C]"
                >
                  Explore topics →
                </a>
                <a
                  href="#provisions"
                  className="rounded-xl border border-[#F5DDB3] bg-white px-6 py-3.5 font-semibold text-[#8C5410] transition hover:border-[#8C5410]"
                >
                  Important sections
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 text-sm text-[#8C5410]">
                <span>📘 Beginner friendly</span>
                <span>·</span>
                <span>🔎 Procedural examples</span>
                <span>·</span>
                <span>📜 Statutory references</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-[#F5DDB3]" />
              <div className="absolute -bottom-4 -left-3 h-24 w-24 rounded-full bg-[#E7EEFF]" />

              <div className="relative rounded-3xl border border-white bg-white p-6 shadow-xl shadow-amber-200/40 sm:p-7">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF0D8] text-4xl">
                  🏛️
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#B7791F]">
                  Follow the legal process
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#183B56]">
                  Every step has a procedure.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Learn how police procedure, courts, bail and trials fit into
                  the broader criminal justice system.
                </p>
                <div className="mt-5 rounded-xl bg-[#FFF3DE] p-4">
                  <p className="text-sm font-semibold text-[#8C5410]">
                    Information → Investigation → Court proceedings
                  </p>
                </div>
                <a
                  href="#topics"
                  className="mt-5 flex items-center justify-center rounded-xl bg-[#8C5410] px-4 py-3 font-semibold text-white transition hover:bg-[#70410C]"
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
        <p className="text-sm font-semibold uppercase tracking-widest text-[#B7791F]">
          Find your topic 🔍
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
          What would you like to understand?
        </h2>

        <label htmlFor="bnss-search" className="sr-only">
          Search BNSS topics and sections
        </label>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm focus-within:border-[#B7791F] focus-within:ring-2 focus-within:ring-[#B7791F]/10">
          <span className="text-xl">🔎</span>
          <input
            id="bnss-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Try FIR, arrest, bail, investigation..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[#183B56] outline-none placeholder:text-slate-400 sm:text-base"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="text-sm font-semibold text-[#8C5410]"
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
            <p className="text-sm font-semibold uppercase tracking-widest text-[#B7791F]">
              Choose your path
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
              Explore the BNSS 🧭
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Learn the criminal procedure framework in manageable stages,
              from initial police information to court proceedings.
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
          <p className="text-sm font-semibold uppercase tracking-widest text-[#B7791F]">
            Start with the essentials
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
            Important BNSS provisions 📜
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Explore selected procedural provisions as starting points for
            further study.
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
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8C5410] hover:underline"
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
        <p className="text-sm font-semibold uppercase tracking-widest text-[#B7791F]">
          Your learning roadmap 🗺️
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
          Follow the process, one step at a time.
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Build a foundation in criminal procedure before exploring individual
          provisions and practical scenarios.
        </p>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{step.emoji}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF0D8] text-xs font-bold text-[#8C5410]">
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
        <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-3xl bg-[#8C5410] px-7 py-10 text-white sm:px-12 sm:py-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5DDB3]">
              Keep exploring 🧡
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Understand the process behind criminal justice.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-amber-50">
              Connect procedural rules with statutory provisions, case studies
              and revision notes.
            </p>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-bold text-[#8C5410] transition hover:bg-[#FFF3DE]"
          >
            Explore case studies →
          </a>
        </div>
      </section>
    </main>
  );
}
