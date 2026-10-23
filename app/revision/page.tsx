
"use client";

import { useMemo, useState } from "react";

const subjects = [
  { name: "Constitution", emoji: "⚖️", color: "bg-[#E7EEFF]", text: "text-[#23478B]", border: "border-[#D1DEFF]" },
  { name: "BNS", emoji: "🛡️", color: "bg-[#DDF5E8]", text: "text-[#176943]", border: "border-[#BFE8D0]" },
  { name: "BNSS", emoji: "🔎", color: "bg-[#FFF0D8]", text: "text-[#8C5410]", border: "border-[#F5DDB3]" },
  { name: "BSA", emoji: "📚", color: "bg-[#F0E5FF]", text: "text-[#6941A5]", border: "border-[#DFCEFA]" },
];

const notes = [
  {
    id: 1,
    title: "Fundamental Rights",
    subject: "Constitution",
    emoji: "🗽",
    description: "Revise the rights guaranteed under Part III of the Constitution.",
    tags: ["Part III", "Articles 12–35"],
    time: "5 min",
    points: [
      "Part III of the Constitution deals with Fundamental Rights.",
      "Article 14 concerns equality before the law and equal protection of the laws.",
      "Article 21 protects life and personal liberty, subject to the constitutional and legal framework.",
      "Article 32 provides a remedy before the Supreme Court for enforcement of Fundamental Rights.",
    ],
  },
  {
    id: 2,
    title: "Theft under the BNS",
    subject: "BNS",
    emoji: "🛡️",
    description: "Review the basic ingredients of theft and the relevant statutory provision.",
    tags: ["Property offences", "Section 303"],
    time: "4 min",
    points: [
      "Section 303 of the Bharatiya Nyaya Sanhita, 2023 addresses theft.",
      "The statutory definition concerns dishonest movement of movable property out of another person's possession without consent.",
      "The required intention, movement and circumstances must be assessed against the statutory language.",
      "The complete provision and applicable exceptions should be checked before analysing a problem.",
    ],
  },
  {
    id: 3,
    title: "Information about cognizable offences",
    subject: "BNSS",
    emoji: "🔎",
    description: "Review the provision concerning information in cognizable cases.",
    tags: ["Section 173", "FIR"],
    time: "5 min",
    points: [
      "Section 173 of the BNSS deals with information relating to the commission of cognizable offences.",
      "The provision addresses how such information may be given to the officer in charge of a police station.",
      "The statutory text includes procedural requirements and specific safeguards.",
      "The applicable procedure depends on the facts and the current statutory framework.",
    ],
  },
  {
    id: 4,
    title: "Electronic and digital records",
    subject: "BSA",
    emoji: "💻",
    description: "Revisit how electronic records are addressed by the law of evidence.",
    tags: ["Electronic records", "Evidence"],
    time: "5 min",
    points: [
      "The Bharatiya Sakshya Adhiniyam, 2023 addresses electronic and digital records.",
      "Whether a record is relevant and admissible depends on the applicable legal requirements.",
      "Special statutory requirements may apply to electronic records and their proof.",
      "Authenticity, context and the applicable certificate or procedural requirements may matter.",
    ],
  },
  {
    id: 5,
    title: "Equality before the law",
    subject: "Constitution",
    emoji: "⚖️",
    description: "Quickly review the core idea behind Article 14.",
    tags: ["Article 14", "Equality"],
    time: "3 min",
    points: [
      "Article 14 guarantees equality before the law and equal protection of the laws.",
      "It applies to persons, not only citizens.",
      "The constitutional equality principle does not mean every distinction is automatically unlawful.",
      "A legal assessment depends on the nature and justification of the classification and applicable doctrine.",
    ],
  },
  {
    id: 6,
    title: "Understanding bail",
    subject: "BNSS",
    emoji: "🔓",
    description: "Review the concept of bail and why the applicable provision matters.",
    tags: ["Bail", "Criminal procedure"],
    time: "4 min",
    points: [
      "Bail concerns release from custody subject to the applicable legal framework and conditions.",
      "The rules may differ depending on whether an offence is bailable or non-bailable.",
      "The court or authority must apply the relevant statutory provisions and legal principles.",
      "The outcome depends on the facts, offence and applicable law; release is not automatic in every case.",
    ],
  },
];

const quizzes = [
  {
    id: 1,
    subject: "Constitution",
    emoji: "⚖️",
    question: "Which Article guarantees equality before the law and equal protection of the laws?",
    options: ["Article 12", "Article 14", "Article 19", "Article 32"],
    answer: 1,
    explanation: "Article 14 provides equality before the law and equal protection of the laws.",
  },
  {
    id: 2,
    subject: "BNS",
    emoji: "🛡️",
    question: "Which provision of the BNS addresses theft?",
    options: ["Section 103", "Section 173", "Section 303", "Section 356"],
    answer: 2,
    explanation: "Section 303 of the Bharatiya Nyaya Sanhita, 2023 addresses theft.",
  },
  {
    id: 3,
    subject: "BNSS",
    emoji: "🔎",
    question: "Which BNSS provision deals with information relating to cognizable offences?",
    options: ["Section 35", "Section 173", "Section 303", "Section 356"],
    answer: 1,
    explanation: "Section 173 of the BNSS deals with information relating to the commission of cognizable offences.",
  },
  {
    id: 4,
    subject: "BSA",
    emoji: "📚",
    question: "What should be checked when an electronic record is offered as evidence?",
    options: [
      "Only the file name",
      "Only the device colour",
      "Relevance and applicable legal requirements for proof",
      "Nothing beyond the screenshot",
    ],
    answer: 2,
    explanation: "Relevance, authenticity and applicable statutory requirements all need consideration.",
  },
];

type SubjectFilter = "All" | "Constitution" | "BNS" | "BNSS" | "BSA";

export default function RevisionPage() {
  const [activeSubject, setActiveSubject] = useState<SubjectFilter>("All");
  const [search, setSearch] = useState("");
  const [expandedNote, setExpandedNote] = useState<number | null>(null);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState<Record<number, number>>({});

  const filteredNotes = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notes.filter((note) => {
      const matchesSubject =
        activeSubject === "All" || note.subject === activeSubject;

      const searchable = [
        note.title,
        note.subject,
        note.description,
        ...note.tags,
        ...note.points,
      ].join(" ").toLowerCase();

      return matchesSubject && (!query || searchable.includes(query));
    });
  }, [activeSubject, search]);

  const quiz = quizzes[quizIndex];
  const quizFinished = selectedAnswer !== null;
  const score = Object.entries(answered).filter(
    ([id, answer]) => quizzes.find((item) => item.id === Number(id))?.answer === answer,
  ).length;

  function nextQuestion() {
    setQuizIndex((current) => (current + 1) % quizzes.length);
    setSelectedAnswer(null);
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#344054]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#F5DDB3] bg-[#FFF3DE]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-52 w-52 rounded-full bg-[#E7EEFF]/80 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#8C5410]">
            <a href="/" className="hover:underline">Home</a>
            <span>/</span>
            <span>Revision</span>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F5DDB3] bg-white px-4 py-2 text-sm font-semibold text-[#8C5410]">
                🎯 Small steps, stronger recall
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
                Learn it today.{" "}
                <span className="text-[#B7791F]">Remember it tomorrow.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Quick revision notes, important concepts and practice questions
                to help you revisit Indian law at your own pace.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#notes" className="rounded-xl bg-[#8C5410] px-6 py-3.5 font-semibold text-white transition hover:bg-[#70410C]">
                  Explore revision notes →
                </a>
                <a href="#quiz" className="rounded-xl border border-[#E8D0A7] bg-white px-6 py-3.5 font-semibold text-[#8C5410] transition hover:border-[#8C5410]">
                  Try a quick quiz 🧠
                </a>
              </div>
            </div>

            <div className="relative rounded-3xl border border-white bg-white p-7 shadow-xl shadow-amber-200/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFF0D8] text-4xl">
                🧠
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#B7791F]">
                Your revision corner
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#183B56]">
                Little reviews add up.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Revisit a concept, check what you remember and read the
                explanation behind each answer.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#FFF3DE] p-4">
                  <p className="text-2xl font-bold text-[#8C5410]">{notes.length}</p>
                  <p className="mt-1 text-xs text-[#8C5410]">Sample notes</p>
                </div>
                <div className="rounded-xl bg-[#E7EEFF] p-4">
                  <p className="text-2xl font-bold text-[#23478B]">{quizzes.length}</p>
                  <p className="mt-1 text-xs text-[#23478B]">Practice questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subject overview */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#B7791F]">
          Four subjects · One learning journey
        </p>
        <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
          Pick your revision path 📚
        </h2>

        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {subjects.map((subject) => (
            <button
              key={subject.name}
              type="button"
              onClick={() => {
                setActiveSubject(subject.name as SubjectFilter);
                document.getElementById("notes")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`rounded-2xl border ${subject.border} ${subject.color} p-5 text-left transition hover:-translate-y-1 hover:shadow-md`}
            >
              <span className="text-3xl">{subject.emoji}</span>
              <p className={`mt-4 font-bold ${subject.text}`}>{subject.name}</p>
              <p className={`mt-1 text-xs ${subject.text}`}>Explore revision →</p>
            </button>
          ))}
        </div>
      </section>

      {/* Notes library */}
      <section id="notes" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#B7791F]">
              Your quick-reference library
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
              Revision notes ✨
            </h2>
            <p className="mt-3 text-slate-600">
              Short summaries to revisit key legal concepts.
            </p>
          </div>

          <label htmlFor="revision-search" className="sr-only">Search revision notes</label>
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#FAF9F6] px-4 py-4 focus-within:border-[#B7791F] focus-within:ring-2 focus-within:ring-[#B7791F]/10">
            <span className="text-xl">🔍</span>
            <input
              id="revision-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search a concept, section or keyword..."
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-base"
            />
            {search && (
              <button type="button" onClick={() => setSearch("")} className="text-sm font-semibold text-[#8C5410]">
                Clear
              </button>
            )}
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {(["All", "Constitution", "BNS", "BNSS", "BSA"] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                aria-pressed={activeSubject === filter}
                onClick={() => setActiveSubject(filter)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  activeSubject === filter
                    ? "border-[#8C5410] bg-[#8C5410] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#B7791F]"
                }`}
              >
                {filter === "All" ? "🌈 All subjects" : filter}
              </button>
            ))}
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredNotes.map((note) => {
              const subject = subjects.find((item) => item.name === note.subject)!;
              const expanded = expandedNote === note.id;

              return (
                <article key={note.id} className={`flex flex-col rounded-2xl border ${subject.border} bg-white p-6 transition hover:shadow-lg`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${subject.color}`}>
                      {note.emoji}
                    </div>
                    <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${subject.color} ${subject.text}`}>
                      {note.subject}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#183B56]">{note.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{note.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <span key={tag} className={`rounded-full px-3 py-1.5 text-xs font-medium ${subject.color} ${subject.text}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {expanded && (
                    <div className="mt-5 rounded-xl bg-[#FAF9F6] p-4">
                      <p className="font-semibold text-[#183B56]">Key points to remember</p>
                      <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                        {note.points.map((point, index) => (
                          <li key={point} className="flex gap-2">
                            <span className={`font-bold ${subject.text}`}>{index + 1}.</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-xs leading-5 text-slate-500">
                        Revision aid only. Check the current statutory text and applicable legal authorities.
                      </p>
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 mt-5">
                    <span className="text-xs text-slate-500">⏱️ {note.time} review</span>
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setExpandedNote(expanded ? null : note.id)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-bold ${subject.color} ${subject.text} transition hover:opacity-80`}
                    >
                      {expanded ? "Show less ↑" : "Revise now →"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredNotes.length === 0 && (
            <div className="mt-7 rounded-2xl border border-dashed border-slate-300 p-10 text-center">
              <p className="text-4xl">🔎</p>
              <h3 className="mt-3 text-xl font-bold text-[#183B56]">No notes found</h3>
              <p className="mt-2 text-sm text-slate-600">Try another search or change the subject filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveSubject("All");
                }}
                className="mt-5 rounded-xl bg-[#183B56] px-5 py-3 font-semibold text-white"
              >
                Show all notes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive quiz */}
      <section id="quiz" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#B7791F]">
              Test your understanding
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#183B56] sm:text-4xl">
              A little quiz. A little progress. 🧠
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Choose an answer, read the explanation and check what you remember.
              This is a small demonstration quiz, not an exam assessment.
            </p>
            <div className="mt-6 rounded-2xl bg-[#FFF0D8] p-5">
              <p className="text-sm font-semibold text-[#8C5410]">Your quiz score</p>
              <p className="mt-2 text-3xl font-bold text-[#8C5410]">
                {score} / {Object.keys(answered).length}
              </p>
              <p className="mt-1 text-xs text-[#8C5410]">Correct answers among questions attempted</p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#F5DDB3] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-[#FFF0D8] px-3 py-2 text-xs font-bold text-[#8C5410]">
                {quiz.emoji} {quiz.subject}
              </span>
              <span className="text-sm text-slate-500">
                Question {quizIndex + 1} of {quizzes.length}
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold leading-7 text-[#183B56]">
              {quiz.question}
            </h3>

            <div className="mt-6 space-y-3">
              {quiz.options.map((option, index) => {
                const isCorrect = index === quiz.answer;
                const isSelected = selectedAnswer === index;

                let optionStyle = "border-slate-200 bg-white text-slate-700 hover:border-[#B7791F]";

                if (quizFinished && isCorrect) {
                  optionStyle = "border-emerald-300 bg-emerald-50 text-emerald-800";
                } else if (quizFinished && isSelected && !isCorrect) {
                  optionStyle = "border-rose-300 bg-rose-50 text-rose-800";
                } else if (isSelected) {
                  optionStyle = "border-[#B7791F] bg-[#FFF3DE] text-[#8C5410]";
                }

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={quizFinished}
                    onClick={() => {
                      setSelectedAnswer(index);
                      setAnswered((previous) => ({ ...previous, [quiz.id]: index }));
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm font-medium transition disabled:cursor-default ${optionStyle}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {quizFinished && isCorrect && <span className="ml-auto">✓</span>}
                    {quizFinished && isSelected && !isCorrect && <span className="ml-auto">✕</span>}
                  </button>
                );
              })}
            </div>

            {quizFinished && (
              <div className="mt-5 rounded-xl bg-[#FAF9F6] p-4">
                <p className={`font-bold ${selectedAnswer === quiz.answer ? "text-emerald-700" : "text-[#8C5410]"}`}>
                  {selectedAnswer === quiz.answer ? "🎉 Correct answer!" : "💡 Let's learn from this."}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{quiz.explanation}</p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
              <span className="text-xs text-slate-500">📝 Practice and learn</span>
              <button
                type="button"
                onClick={nextQuestion}
                className="rounded-xl bg-[#8C5410] px-5 py-3 font-semibold text-white transition hover:bg-[#70410C]"
              >
                {quizFinished ? "Next question →" : "Skip question →"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-3xl bg-[#183B56] px-7 py-10 text-white sm:px-12 sm:py-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F5DDB3]">
              Keep learning 💛
            </p>
            <h2 className="mt-3 text-3xl font-bold">Understanding grows with practice.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-200">
              Explore the law, revisit important concepts and keep asking questions.
            </p>
          </div>
          <a href="/learn" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-bold text-[#183B56] transition hover:bg-[#FFF3DE]">
            Back to learning →
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            <a href="/" className="font-bold text-[#183B56]">Lexi Talks</a>
            <p className="mt-1 text-sm text-slate-500">Law, made easier.</p>
          </div>
          <p className="max-w-2xl text-xs leading-6 text-slate-500">
            Educational revision material only. Check the current law and
            authoritative legal sources before relying on any legal proposition.
          </p>
        </div>
      </footer>
    </main>
  );
}
