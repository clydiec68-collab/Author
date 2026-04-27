"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-beige-dark bg-white sticky top-0 z-50">
      <Link
        href="/"
        className="font-display text-xl font-semibold text-navy no-underline"
      >
        Clydie Cronjé
      </Link>
      <div className="flex gap-7 text-sm">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`no-underline transition-colors ${
                isActive
                  ? "text-teal font-medium"
                  : "text-teal-muted hover:text-teal"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
