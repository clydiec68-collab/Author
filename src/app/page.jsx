import Link from "next/link";
import BookCover from "../components/BookCover";
import Newsletter from "../components/Newsletter";
import { series } from "../data/books";

export default function Home() {
  return (
    <>
      {/* ---- Split hero ---- */}
      <div className="flex flex-col md:grid md:grid-cols-2 border-b border-beige-dark">
        {/* Left */}
        <div className="p-8 md:p-14">
          <p className="text-xs font-medium text-teal uppercase tracking-widest mb-4">
            South African author
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-navy mb-4 leading-tight">
            Thirty books.<br />One life<br />fully lived.
          </h1>
          <p className="text-[15px] text-teal-muted mb-7 leading-relaxed max-w-[380px]">
            Writing across worlds — from haunted boarding schools to ancient philosophy to the gold-dust history of the West Rand.
          </p>
          <div className="flex gap-3">
            <Link href="/books" className="px-6 py-2.5 rounded-full bg-navy text-white text-sm font-medium no-underline hover:bg-navy-light transition-colors">
              Browse all books
            </Link>
            <Link href="/about" className="px-6 py-2.5 rounded-full border border-teal text-teal text-sm no-underline hover:bg-teal hover:text-white transition-colors">
              About Clydie
            </Link>
          </div>
        </div>

        {/* Right — featured book */}
        <div className="bg-beige border-t md:border-t-0 md:border-l border-beige-dark flex flex-col items-center justify-center p-10">
          <p className="text-[11px] font-medium text-teal uppercase tracking-widest mb-4">
            Where to start
          </p>
          <BookCover coverNum={1} title={"The\nHollow\nLibrary"} size="lg" />
          <h2 className="font-display font-medium text-lg text-navy mt-4 mb-1">The Hollow Library</h2>
          <p className="text-sm text-teal-muted mb-2.5">Book 1 of 7</p>
          <div className="flex gap-1.5 flex-wrap justify-center">
            <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-sky text-navy font-medium">YA</span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-sky text-navy font-medium">Supernatural</span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-lg bg-sky text-navy font-medium">Mystery</span>
          </div>
        </div>
      </div>

      {/* ---- Series grid ---- */}
      <div className="p-6 md:p-10">
        <p className="text-xs font-medium text-teal-muted uppercase tracking-widest mb-5">Explore by series</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {series.slice(0, 3).map((s) => (
            <Link key={s.slug} href={`/series/${s.slug}`}
              className="p-5 border border-beige-dark rounded-[14px] no-underline hover:border-teal hover:bg-[#FAFBFC] transition-all block"
            >
              <div className="flex gap-1 mb-3">
                {s.spineColors.map((c, i) => (
                  <div key={i} className="w-5 h-[30px] rounded-[3px]" style={{ background: c }} />
                ))}
              </div>
              <p className="font-medium text-sm text-navy mb-0.5">{s.shortTitle}</p>
              <p className="text-xs text-teal-muted">{s.bookCount} books · {s.genre}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mt-3.5">
          {series.slice(3).map((s) => (
            <Link key={s.slug} href={`/series/${s.slug}`}
              className="p-5 border border-beige-dark rounded-[14px] no-underline hover:border-teal hover:bg-[#FAFBFC] transition-all block"
            >
              <p className="font-medium text-sm text-navy mb-0.5">{s.shortTitle}</p>
              <p className="text-xs text-teal-muted">{s.bookCount} books · {s.genre}</p>
            </Link>
          ))}
          <Link href="/books"
            className="p-5 border border-beige-dark rounded-[14px] no-underline hover:border-teal hover:bg-[#FAFBFC] transition-all block"
          >
            <p className="font-medium text-sm text-navy mb-0.5">Standalone books</p>
            <p className="text-xs text-teal-muted">5 titles across genres</p>
          </Link>
        </div>
      </div>

      {/* ---- Quote teaser ---- */}
      <div className="border-t border-beige-dark px-6 md:px-10 py-9 flex gap-5 items-start">
        <div className="w-14 h-14 rounded-[14px] bg-beige flex items-center justify-center shrink-0 hidden sm:flex">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3C8 3 5 6 5 10c0 3 2 5 4 7l3 3 3-3c2-2 4-4 4-7 0-4-3-7-7-7z" fill="#C8D9E6"/>
            <path d="M12 6v12" stroke="#567C8D" strokeWidth="1.5"/>
            <path d="M9 9c1.5 1 2.2 1.5 3 1.5s1.5-.5 3-1.5" stroke="#567C8D" strokeWidth="1.2" fill="none"/>
          </svg>
        </div>
        <div>
          <p className="font-display italic text-[15px] text-teal-muted leading-relaxed">
            &ldquo;He does not sit still between books. His garden is a living canvas of bonsai — each tree a years-long conversation between patience and intention.&rdquo;
          </p>
          <Link href="/about" className="text-sm text-teal no-underline mt-2 inline-block hover:text-navy transition-colors">
            Read the full story →
          </Link>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
