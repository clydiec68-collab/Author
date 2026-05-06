import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 border-t border-beige-dark">
      <p className="text-xs text-teal-muted">© 2026 Clydie Cronjé</p>
      <div className="flex gap-5 text-sm">
        <Link href="#" className="text-teal no-underline hover:text-navy transition-colors">Goodreads</Link>
        <Link href="#" className="text-teal no-underline hover:text-navy transition-colors">Instagram</Link>
        <Link href="#" className="text-teal no-underline hover:text-navy transition-colors">Facebook</Link>
      </div>
    </footer>
  );
}
