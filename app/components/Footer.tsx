
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-[#183B56]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#183B56] text-sm text-white">
                L
              </span>
              Lexi Talks
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Law, made easier. Learn Indian law through simple explanations,
              relatable examples and conversations.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold text-[#183B56]">Explore</h2>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-600">
              <li><Link className="hover:text-[#176943]" href="/learn">Learning library</Link></li>
              <li><Link className="hover:text-[#176943]" href="/case-studies">Case studies</Link></li>
              <li><Link className="hover:text-[#176943]" href="/revision">Revision resources</Link></li>
              <li><Link className="hover:text-[#176943]" href="/community">Community Q&amp;A</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-[#183B56]">Our approach</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              We aim to make legal learning accessible and welcoming. Educational
              content should be checked against current legislation and
              authoritative legal sources.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 text-xs leading-5 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Lexi Talks. Built for curious minds.</p>
          <p className="max-w-2xl">
            Educational information only. This website does not provide
            individual legal advice. Laws and their interpretation may change.
          </p>
        </div>
      </div>
    </footer>
  );
}
