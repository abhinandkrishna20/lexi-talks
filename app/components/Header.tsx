
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Learn", href: "/learn" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Revision", href: "/revision" },
  { label: "Community", href: "/community" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/learn") {
      return pathname === "/learn" || pathname.startsWith("/learn/");
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="Lexi Talks home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#183B56] text-lg font-bold text-white shadow-sm">
            L
          </span>
          <span className="text-lg font-bold tracking-tight text-[#183B56]">
            Lexi Talks
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-[#E6F7EF] text-[#176943]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#183B56]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/learn"
            className="inline-flex items-center rounded-xl bg-[#183B56] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#234C6B]"
          >
            Start learning →
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-xl text-[#183B56] transition hover:bg-slate-50 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-[#E6F7EF] text-[#176943]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {active && <span className="float-right">✓</span>}
                </Link>
              );
            })}

            <Link
              href="/learn"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-[#183B56] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Start learning →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
