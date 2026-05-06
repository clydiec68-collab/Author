"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/series/the-hollow-library", label: "Series guide" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between px-5 md:px-10 py-4 border-b border-beige-dark bg-white sticky top-0 z-50">
      <Link href="/" className="font-display text-lg md:text-xl font-semibold text-navy no-underline">
        Clydie Cronjé
      </Link>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 text-navy cursor-pointer"
        aria-label="Menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M6 6l12 12M6 18L18 6" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex gap-7 text-sm">
        {links.map((link) => {
          const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link key={link.href} href={link.href}
              className={`no-underline transition-colors ${isActive ? "text-teal font-medium" : "text-teal-muted hover:text-teal"}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden w-full pt-3 pb-1 flex flex-col gap-3 text-sm border-t border-beige-dark mt-3">
          {links.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className={`no-underline py-1 ${isActive ? "text-teal font-medium" : "text-teal-muted"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
