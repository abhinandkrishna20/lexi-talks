
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const initialQuestions = [
  {
    id: 1,
    title: "Can a person approach the High Court directly for a Fundamental Rights violation?",
    body: "I am trying to understand the difference between Articles 32 and 226. When can someone approach the High Court instead of the Supreme Court?",
    subject: "Constitution",
    tags: ["Article 32", "Article 226", "Writs"],
    author: "Curious Learner",
    time: "Recently",
    answers: 3,
    votes: 18,
    emoji: "⚖️",
    color: "bg-[#E7EEFF]",
    text: "text-[#23478B]",
    accepted: true,
  },
  {
    id: 2,
    title: "What is the difference between a cognizable and a non-cognizable offence?",
    body: "Could someone explain the difference in simple words, especially how it affects the police investigation process?",
    subject: "BNSS",
    tags: ["Criminal procedure", "Police"],
    author: "Law Beginner",
    time: "Recently",
    answers: 5,
    votes: 24,
    emoji: "🔎",
    color: "bg-[#FFF0D8]",
    text: "text-[#8C5410]",
    accepted: true,
  },
  {
    id: 3,
    title: "Are screenshots of WhatsApp messages admissible as evidence?",
    body: "I want to understand what the law says about electronic records and what requirements may apply when using screenshots in court.",
    subject: "BSA",
    tags: ["Electronic evidence", "Digital records"],
    author: "Digital Learner",
    time: "Recently",
    answers: 2,
    votes: 11,
    emoji: "💻",
    color: "bg-[#F0E5FF]",
    text: "text-[#6941A5]",
    accepted: false,
  },
  {
    id: 4,
    title: "What are the essential elements of theft under the BNS?",
    body: "I understand that intention matters, but I am confused about possession, consent and movement of property.",
    subject: "BNS",
    tags: ["Theft", "Property offences"],
    author: "Student Corner",
    time: "Recently",
    answers: 4,
    votes: 15,
    emoji: "🛡️",
    color: "bg-[#DDF5E8]",
    text: "text-[#176943]",
    accepted: true,
  },
  {
    id: 5,
    title: "Does Article 19 apply to every person in India?",
    body: "Some Fundamental Rights apply to all persons while others are specifically guaranteed to citizens. How does Article 19 fit in?",
    subject: "Constitution",
    tags: ["Article 19", "Fundamental Rights"],
    author: "Constitution Explorer",
    time: "Recently",
    answers: 1,
    votes: 8,
    emoji: "🗣️",
    color: "bg-[#E7EEFF]",
    text: "text-[#23478B]",
    accepted: false,
  },
];

const subjects = ["All", "Constitution", "BNS", "BNSS", "BSA"] as const;
type Subject = (typeof subjects)[number];

const subjectStyles: Record<string, { color: string; text: string; emoji: string }> = {
  Constitution: { color: "bg-[#E7EEFF]", text: "text-[#23478B]", emoji: "⚖️" },
  BNS: { color: "bg-[#DDF5E8]", text: "text-[#176943]", emoji: "🛡️" },
  BNSS: { color: "bg-[#FFF0D8]", text: "text-[#8C5410]", emoji: "🔎" },
  BSA: { color: "bg-[#F0E5FF]", text: "text-[#6941A5]", emoji: "📚" },
};

type Question = {
  id: number;
  title: string;
  body: string;
  subject: string;
  tags: string[];
  author: string;
  time: string;
  answers: number;
  votes: number;
  emoji: string;
  color: string;
  text: string;
  accepted: boolean;
};

export default function CommunityPage() {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [search, setSearch] = useState("");
  const [activeSubject, setActiveSubject] = useState<Subject>("All");
  const [sort, setSort] = useState<"popular" | "newest" | "unanswered">("popular");
  const [voted, setVoted] = useState<number[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState<Exclude<Subject, "All">>("Constitution");
  const [tagsInput, setTagsInput] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const filteredQuestions = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = questions.filter((question) => {
      const matchesSubject =
        activeSubject === "All" || question.subject === activeSubject;

      const searchable = [
        question.title,
        question.body,
        question.subject,
        question.author,
        ...question.tags,
      ].join(" ").toLowerCase();

      return matchesSubject && (!query || searchable.includes(query));
    });

    return [...result].sort((a, b) => {
      if (sort === "unanswered") {
        return a.answers - b.answers;
      }
      if (sort === "newest") {
        return b.id - a.id;
      }
      return b.votes - a.votes;
    });
  }, [questions, search, activeSubject, sort]);

  function submitQuestion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanTitle = title.trim();
    const cleanBody = body.trim();

    if (!cleanTitle || !cleanBody) return;

    const style = subjectStyles[subject];
    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
      .slice(0, 5);

    const newQuestion: Question = {
      id: Date.now(),
      title: cleanTitle,
      body: cleanBody,
      subject,
      tags: tags.length ? tags : [subject],
      author: "You · Demo",
      time: "Just now",
      answers: 0,
      votes: 0,
      emoji: style.emoji,
      color: style.color,
      text: style.text,
      accepted: false,
    };

    setQuestions((previous) => [newQuestion, ...previous]);
    setActiveSubject("All");
    setSort("newest");
    setSearch("");
    setTitle("");
    setBody("");
    setTagsInput("");
    setShowForm(false);
    setSubmittedMessage("Your demo question has been added to this page.");
  }

  function toggleVote(id: number) {
    const hasVoted = voted.includes(id);

    setVoted((previous) =>
      hasVoted ? previous.filter((item) => item !== id) : [...previous, id],
    );

    setQuestions((previous) =>
      previous.map((question) =>
        question.id === id
          ? { ...question, votes: question.votes + (hasVoted ? -1 : 1) }
          : question,
      ),
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#344054]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#BFE8D0] bg-[#E6F7EF]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/70 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-[#E7EEFF]/80 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#176943]">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Community</span>
          </div>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_340px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#BFE8D0] bg-white px-4 py-2 text-sm font-semibold text-[#176943]">
                💬 Welcome to the conversation
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#183B56] sm:text-5xl lg:text-6xl">
                No question is{" "}
                <span className="text-[#21865C]">too basic.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Ask what you have always wanted to know about Indian law.
                Learn from different perspectives and help make legal knowledge
                easier for everyone.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="rounded-xl bg-[#176943] px-6 py-3.5 font-semibold text-white transition hover:bg-[#105234]"
                >
                  ✍️ Ask a question
                </button>
                <a href="#questions" className="rounded-xl border border-[#BFE8D0] bg-white px-6 py-3.5 font-semibold text-[#176943] transition hover:border-[#176943]">
                  Explore discussions ↓
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 text-sm text-[#176943]">
                <span>🤝 Learn together</span>
                <span>·</span>
                <span>🌱 Be respectful</span>
                <span>·</span>
                <span>📚 Check legal sources</span>
              </div>
            </div>

            <div className="relative rounded-3xl border border-white bg-white p-7 shadow-xl shadow-emerald-200/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DDF5E8] text-4xl">
                💬
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#21865C]">
                How we learn together
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#183B56]">
                Ask. Explain. Understand.
              </h2>
              <div className="mt-5 space-y-4">
                {[
                  ["🙋", "Ask freely", "Every genuine learning question is welcome."],
                  ["💡", "Share knowledge", "Explain ideas clearly and respectfully."],
                  ["🔎", "Verify the law", "Use reliable sources for legal claims."],
                ].map(([emoji, heading, description]) => (
                  <div key={heading} className="flex gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F7EF] text-xl">
                      {emoji}
                    </span>
                    <div>
                      <p className="font-bold text-[#183B56]">{heading}</p>
                      <p className="mt-1 text-sm leading-5 text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community guidelines */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { emoji: "🌈", title: "Everyone can learn", desc: "No prior legal knowledge required.", color: "bg-[#E7EEFF]", text: "text-[#23478B]" },
            { emoji: "🤝", title: "Respect each other", desc: "Discuss ideas, not personal attacks.", color: "bg-[#DDF5E8]", text: "text-[#176943]" },
            { emoji: "📖", title: "Sources matter", desc: "Share provisions and reliable references.", color: "bg-[#F0E5FF]", text: "text-[#6941A5]" },
          ].map((item) => (
            <article key={item.title} className={`rounded-2xl ${item.color} p-5`}>
              <span className="text-2xl">{item.emoji}</span>
              <h2 className={`mt-3 font-bold ${item.text}`}>{item.title}</h2>
              <p className={`mt-1 text-sm leading-6 ${item.text}`}>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Question feed */}
      <section id="questions" className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#21865C]">
              The learning community
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#183B56] sm:text-3xl">
              Let&#39;s talk law 💭
            </h2>
            <p className="mt-3 text-slate-600">
              Explore questions from fellow learners.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center rounded-xl bg-[#176943] px-5 py-3 font-semibold text-white transition hover:bg-[#105234]"
          >
            + Ask a question
          </button>
        </div>

        {submittedMessage && (
          <div role="status" className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-[#BFE8D0] bg-[#E6F7EF] p-4 text-sm text-[#176943]">
            <span>🎉 {submittedMessage}</span>
            <button type="button" onClick={() => setSubmittedMessage("")} aria-label="Dismiss message">✕</button>
          </div>
        )}

        <label htmlFor="community-search" className="sr-only">Search community questions</label>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm focus-within:border-[#21865C] focus-within:ring-2 focus-within:ring-[#21865C]/10">
          <span className="text-xl">🔍</span>
          <input
            id="community-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search questions, topics or keywords..."
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-base"
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} className="text-sm font-semibold text-[#176943]">
              Clear
            </button>
          )}
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {subjects.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeSubject === filter}
              onClick={() => setActiveSubject(filter)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                activeSubject === filter
                  ? "border-[#176943] bg-[#176943] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#176943] hover:text-[#176943]"
              }`}
            >
              {filter === "All" ? "🌈 All topics" : `${subjectStyles[filter].emoji} ${filter}`}
            </button>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            Showing <strong className="text-[#183B56]">{filteredQuestions.length}</strong> discussions
          </p>
          <label className="flex items-center gap-2 text-sm text-slate-600">
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as typeof sort)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 font-semibold text-[#183B56] outline-none focus:border-[#21865C]"
            >
              <option value="popular">Most helpful</option>
              <option value="newest">Newest</option>
              <option value="unanswered">Needs answers</option>
            </select>
          </label>
        </div>

        <div className="mt-5 space-y-4">
          {filteredQuestions.map((question) => (
            <article key={question.id} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-[#BFE8D0] hover:shadow-md sm:p-6">
              <div className="flex gap-4">
                <div className="hidden shrink-0 flex-col items-center gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={() => toggleVote(question.id)}
                    aria-label={voted.includes(question.id) ? "Remove helpful vote" : "Mark as helpful"}
                    aria-pressed={voted.includes(question.id)}
                    className={`flex h-11 w-12 flex-col items-center justify-center rounded-xl border text-sm font-bold transition ${
                      voted.includes(question.id)
                        ? "border-[#176943] bg-[#DDF5E8] text-[#176943]"
                        : "border-slate-200 bg-[#FAF9F6] text-slate-600 hover:border-[#176943]"
                    }`}
                  >
                    <span>▲</span>
                    <span>{question.votes}</span>
                  </button>
                  <span className="text-[10px] text-slate-400">helpful</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-1.5 text-xs font-semibold ${subjectStyles[question.subject].color} ${subjectStyles[question.subject].text}`}>
                      {subjectStyles[question.subject].emoji} {question.subject}
                    </span>
                    {question.accepted && (
                      <span className="rounded-full bg-[#DDF5E8] px-3 py-1.5 text-xs font-semibold text-[#176943]">
                        ✓ Helpful answer marked
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-7 text-[#183B56] sm:text-xl">
                    {question.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{question.body}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {question.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#F3F4F6] px-3 py-1.5 text-xs text-slate-600">
                        #{tag.replaceAll(" ", "")}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span>👤 {question.author}</span>
                      <span>·</span>
                      <span>{question.time}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => toggleVote(question.id)}
                        aria-pressed={voted.includes(question.id)}
                        className="text-xs font-semibold text-[#176943] hover:underline sm:hidden"
                      >
                        ▲ {question.votes} helpful
                      </button>
                      <span className="text-sm font-semibold text-slate-600">
                        💬 {question.answers} {question.answers === 1 ? "answer" : "answers"}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSubmittedMessage("Individual discussion pages will be connected in the next development phase.")}
                        className="text-sm font-bold text-[#176943] hover:underline"
                      >
                        View discussion →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {filteredQuestions.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p className="text-4xl">💬</p>
              <h3 className="mt-3 text-xl font-bold text-[#183B56]">No questions found</h3>
              <p className="mt-2 text-sm text-slate-600">Try another search or ask the first question on this topic.</p>
              <button
                type="button"
                onClick={() => setShowForm(true)}
                className="mt-5 rounded-xl bg-[#176943] px-5 py-3 font-semibold text-white"
              >
                Ask a question →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Friendly CTA */}
      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-3xl bg-[#183B56] px-7 py-10 text-white sm:px-12 sm:py-12 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#BFE8D0]">
              Your questions matter 💚
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Law is easier when we learn together.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-200">
              Ask clearly, listen respectfully and help everyone build a better
              understanding of the law.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="rounded-xl bg-white px-6 py-3.5 font-bold text-[#183B56] transition hover:bg-[#DDF5E8]"
          >
            Start a conversation →
          </button>
        </div>
      </section>

      {/* Ask-question modal */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#102A43]/60 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowForm(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="ask-title"
            className="my-auto w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-3xl">🙋</span>
                <h2 id="ask-title" className="mt-3 text-2xl font-bold text-[#183B56]">
                  Ask your question
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tell the community what you&#39;re trying to understand. Clear
                  questions help others give useful answers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                aria-label="Close question form"
                className="rounded-xl bg-slate-100 px-3 py-2 text-slate-600 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <form onSubmit={submitQuestion} className="mt-7 space-y-5">
              <div>
                <label htmlFor="question-title" className="mb-2 block text-sm font-bold text-[#183B56]">
                  Question title *
                </label>
                <input
                  id="question-title"
                  required
                  minLength={10}
                  maxLength={160}
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="e.g. How does Article 14 protect equality?"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#176943] focus:ring-2 focus:ring-[#176943]/10"
                />
                <p className="mt-1 text-xs text-slate-400">Use at least 10 characters.</p>
              </div>

              <div>
                <label htmlFor="question-body" className="mb-2 block text-sm font-bold text-[#183B56]">
                  Explain what you want to know *
                </label>
                <textarea
                  id="question-body"
                  required
                  minLength={15}
                  maxLength={2000}
                  rows={5}
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                  placeholder="Share the context, what you've understood so far and where you're confused..."
                  className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 outline-none focus:border-[#176943] focus:ring-2 focus:ring-[#176943]/10"
                />
              </div>

              <div>
                <label htmlFor="question-subject" className="mb-2 block text-sm font-bold text-[#183B56]">
                  Choose a subject *
                </label>
                <select
                  id="question-subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value as Exclude<Subject, "All">)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#176943]"
                >
                  {subjects.filter((item) => item !== "All").map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="question-tags" className="mb-2 block text-sm font-bold text-[#183B56]">
                  Topic tags <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <input
                  id="question-tags"
                  value={tagsInput}
                  onChange={(event) => setTagsInput(event.target.value)}
                  placeholder="Article 14, Equality, Fundamental Rights"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#176943]"
                />
                <p className="mt-1 text-xs text-slate-400">Separate tags with commas; up to 5 are used.</p>
              </div>

              <div className="rounded-xl bg-[#FFF3DE] p-4 text-xs leading-5 text-[#8C5410]">
                🔒 Demo mode: this question will exist only in the current page
                state. Don&#39;t include confidential personal details or sensitive
                information about a real legal matter.
              </div>

              <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#176943] px-6 py-3 font-semibold text-white transition hover:bg-[#105234]"
                >
                  Add demo question →
                </button>
              </div>
            </form>
          </section>
        </div>
      )}

      
    </main>
  );
}
