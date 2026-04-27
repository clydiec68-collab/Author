import Link from "next/link";
import BookCover from "../../components/BookCover";
import Newsletter from "../../components/Newsletter";
import { series, seriesBooks, standalones } from "../../data/books";

export const metadata = { title: "Books — Clydie Cronjé" };

export default function BooksPage() {
  return (
    <>
      {/* Header */}
      <div className="px-10 py-12 bg-beige border-b border-beige-dark flex justify-between items-end">
        <div>
          <h1 className="font-display text-3xl font-semibold text-navy mb-1.5">
            All books
          </h1>
          <p className="text-[15px] text-teal-muted">
            30 books across 6 series and 5 standalone titles — organised by
            series, in reading order.
          </p>
        </div>
        <div className="bg-white border border-sky rounded-[14px] px-5 py-4 flex items-center gap-3.5 shrink-0">
          <div className="cover-1 w-10 h-[58px] rounded flex items-center justify-center">
            <span className="cover-light text-[7px] font-medium text-center leading-tight">
              The
              <br />
              Hollow
              <br />
              Library
            </span>
          </div>
          <div>
            <p className="text-[11px] text-teal font-medium uppercase tracking-wide">
              New readers start here
            </p>
            <p className="font-medium text-sm text-navy">The Hollow Library</p>
            <p className="text-xs text-teal-muted">
              Book 1 · YA supernatural mystery
            </p>
          </div>
        </div>
      </div>

      {/* Series blocks */}
      {series.map((s) => (
        <div
          key={s.slug}
          className="px-10 py-9 border-b border-beige-dark last:border-b-0"
        >
          <div className="flex justify-between items-end mb-5">
            <div>
              <h2 className="font-display text-[22px] font-semibold text-navy mb-1">
                {s.title}
              </h2>
              <p className="text-sm text-teal-muted">
                {s.bookCount} books · {s.genre} · {s.note}
              </p>
            </div>
            <Link
              href={`/series/${s.slug}`}
              className="text-sm text-teal font-medium no-underline hover:text-navy transition-colors whitespace-nowrap"
            >
              Series page →
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-5">
            {(seriesBooks[s.slug] || []).map((book) => (
              <div key={book.num}>
                <BookCover
                  coverNum={book.cover}
                  title={book.title.replace(/ — /g, "\n").replace(/ /g, "\n")}
                  size="md"
                  className="mb-2.5"
                />
                <p className="text-[13px] font-medium text-navy mb-0.5">
                  {book.title}
                </p>
                <p className="text-xs text-teal-muted">
                  Book {book.num}
                  {book.narrator ? ` · ${book.narrator}` : ""}
                </p>
                {book.badge && (
                  <span className="inline-block mt-1 text-[10px] bg-sky text-navy px-2 py-0.5 rounded-lg font-medium">
                    {book.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Standalones */}
      <div className="px-10 py-9 border-b border-beige-dark">
        <h2 className="font-display text-[22px] font-semibold text-navy mb-1">
          Standalone books
        </h2>
        <p className="text-sm text-teal-muted mb-5">
          5 titles across genres — leadership philosophy, sci-fi, neuroscience,
          historical fiction, professional
        </p>
        <div className="grid grid-cols-5 gap-5">
          {standalones.map((book) => (
            <div key={book.title}>
              <BookCover
                coverNum={book.cover}
                title={book.coverText}
                size="md"
                className="mb-2.5"
              />
              <p className="text-[13px] font-medium text-navy mb-0.5">
                {book.title}
              </p>
              <p className="text-xs text-teal-muted">{book.subtitle}</p>
              {book.badge && (
                <span className="inline-block mt-1 text-[10px] bg-sky text-navy px-2 py-0.5 rounded-lg font-medium">
                  {book.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  );
}
