import { notFound } from "next/navigation";
import Link from "next/link";
import BookCover from "../../../components/BookCover";
import BuyButtons from "../../../components/BuyButtons";
import Newsletter from "../../../components/Newsletter";
import { series, seriesBooks } from "../../../data/books";

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = series.find((s) => s.slug === slug);
  if (!s) return {};
  return { title: `${s.shortTitle} — Clydie Cronjé` };
}

export default async function SeriesPage({ params }) {
  const { slug } = await params;
  const s = series.find((s) => s.slug === slug);
  if (!s) notFound();

  const books = seriesBooks[slug] || [];

  // Cross-promote other series
  const otherSeries = series.filter((o) => o.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="px-6 md:px-10 py-8 md:py-12 bg-beige border-b border-beige-dark flex flex-col sm:flex-row gap-6 md:gap-9 items-center">
        {/* Spine previews */}
        <div className="hidden sm:flex gap-1.5 shrink-0">
          {books.slice(0, 7).map((book) => (
            <div
              key={book.num}
              className={`cover-${book.cover} w-11 h-[140px] rounded flex items-center justify-center`}
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              <span
                className={`text-[9px] font-medium tracking-wide ${
                  [1, 3, 5, 7].includes(book.cover)
                    ? "cover-light"
                    : "cover-cream"
                }`}
                style={{ transform: "rotate(180deg)" }}
              >
                Book {book.num}
              </span>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-medium text-teal uppercase tracking-widest mb-2.5">
            {s.bookCount}-book series · {s.status === "ready" ? "Complete" : "In progress"}
          </p>
          <h1 className="font-display text-4xl font-semibold text-navy mb-2 leading-tight">
            {s.shortTitle}
          </h1>
          <p className="text-sm text-teal-muted mb-4">
            {s.genre} · {s.setting} · {s.note}
          </p>
          <p className="text-[15px] text-teal-muted leading-relaxed max-w-[480px] mb-5">
            {s.description}
          </p>
          <div className="flex gap-1.5 flex-wrap">
            {s.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2.5 py-0.5 rounded-lg bg-sky text-navy font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Reading order */}
      <div className="px-6 md:px-10 py-8 md:py-10">
        <h2 className="font-display text-[22px] font-semibold text-navy mb-6">
          Reading order
        </h2>

        <div className="space-y-3.5">
          {books.map((book) => (
            <div
              key={book.num}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-5 sm:p-6 border border-beige-dark rounded-[14px] hover:border-sky hover:bg-[#FAFBFC] transition-all items-start"
            >
              <span className="font-display text-[28px] font-semibold text-sky w-9 shrink-0 text-center pt-2">
                {book.num}
              </span>
              <BookCover
                coverNum={book.cover}
                title={book.title
                  .replace(/ — /g, "\n")
                  .replace(/(The |A )/g, "$1\n")
                  .split(" ")
                  .reduce((acc, word, i) => {
                    if (i === 0) return word;
                    const last = acc.split("\n").pop();
                    return last.length + word.length > 12
                      ? acc + "\n" + word
                      : acc + " " + word;
                  }, "")}
                size="row"
                className="shrink-0"
              />
              <div className="flex-1">
                <h3 className="font-medium text-[17px] text-navy mb-0.5">
                  {book.title}
                </h3>
                {book.narrator && (
                  <p className="text-[13px] text-teal mb-2">
                    Narrator: {book.narrator}
                  </p>
                )}
                <p className="text-sm text-teal-muted leading-relaxed mb-2.5">
                  {book.desc}
                </p>
                {book.badge && (
                  <span className="inline-block text-[11px] bg-sky text-navy px-2.5 py-0.5 rounded-lg font-medium mr-2">
                    {book.badge}
                  </span>
                )}
                <div className="mt-3">
                  <BuyButtons book={book} size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Also by */}
      <div className="px-10 py-10 border-t border-beige-dark">
        <h2 className="font-display text-[22px] font-semibold text-navy mb-5">
          Also by Clydie Cronjé
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
          {otherSeries.map((o) => {
            const firstBook = (seriesBooks[o.slug] || [])[0];
            return (
              <Link
                key={o.slug}
                href={`/series/${o.slug}`}
                className="flex gap-3.5 p-4 border border-beige-dark rounded-[14px] no-underline hover:border-teal transition-all"
              >
                {firstBook && (
                  <div
                    className={`cover-${firstBook.cover} w-12 h-[70px] rounded flex items-center justify-center shrink-0`}
                  >
                    <span
                      className={`text-[7px] font-medium text-center leading-tight ${
                        [1, 3, 5, 7].includes(firstBook.cover)
                          ? "cover-light"
                          : "cover-cream"
                      }`}
                    >
                      {firstBook.title.split(" ").slice(0, 3).join("\n")}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium text-[13px] text-navy mb-0.5">
                    {o.shortTitle}
                  </p>
                  <p className="text-xs text-teal-muted">
                    {o.bookCount} books · {o.genre}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Newsletter />
    </>
  );
}
