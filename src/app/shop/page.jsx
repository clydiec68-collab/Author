import Link from "next/link";
import Newsletter from "../../components/Newsletter";

export const metadata = { title: "Shop — Clydie Cronjé" };

const etsyProducts = [
  { title: "Protection Spell", desc: "Step-by-step guide", price: "$4.99", url: "https://www.etsy.com/listing/4481225666/fully-guided-spell-for-protection-step" },
  { title: "Courage Spell", desc: "Step-by-step guide", price: "$4.99", url: "https://www.etsy.com/listing/4481280828/courage-spell-step-by-step-guide" },
  { title: "Clarity Spell", desc: "Step-by-step guide", price: "$4.99", url: "https://www.etsy.com/listing/4481282433/clarity-spell-step-by-step-guide" },
  { title: "Love Spell", desc: "Step-by-step guide", price: "$4.99", url: "https://www.etsy.com/listing/4482005767/love-spell-step-by-step-guide" },
  { title: "Spell for Abundance", desc: "Step-by-step guide", price: "$4.99", url: "https://www.etsy.com/listing/4482014632/spell-for-abundance-step-by-step-guide" },
];

export default function ShopPage() {
  return (
    <>
      {/* Header */}
      <div className="px-10 py-12 bg-beige border-b border-beige-dark">
        <p className="text-xs font-medium text-teal uppercase tracking-widest mb-3">
          Beyond the books
        </p>
        <h1 className="font-display text-3xl font-semibold text-navy mb-2">
          Shop
        </h1>
        <p className="text-[15px] text-teal-muted max-w-[540px] leading-relaxed">
          Books, spell guides, zodiac readings, and spiritual tools — available
          through your preferred platform. Every product links to a trusted
          checkout.
        </p>
      </div>

      {/* ---- Books section ---- */}
      <div className="px-10 py-10 border-b border-beige-dark">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-display text-[22px] font-semibold text-navy mb-1">
              Books
            </h2>
            <p className="text-sm text-teal-muted">
              30 books across 6 series and 5 standalone titles — fiction,
              non-fiction, YA, and more
            </p>
          </div>
          <Link
            href="/books"
            className="text-sm text-teal font-medium no-underline hover:text-navy transition-colors whitespace-nowrap"
          >
            Browse all 30 books →
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-3.5">
          <div className="p-5 border border-beige-dark rounded-[14px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-[10px] bg-navy flex items-center justify-center">
                <span className="text-white text-lg">📚</span>
              </div>
              <div>
                <p className="font-medium text-sm text-navy">
                  Printed books
                </p>
                <p className="text-xs text-teal-muted">via IngramSpark</p>
              </div>
            </div>
            <p className="text-xs text-teal-muted leading-relaxed">
              Available at Amazon, Barnes &amp; Noble, Book Depository, and
              bookshops worldwide via IngramSpark print-on-demand.
            </p>
          </div>

          <div className="p-5 border border-beige-dark rounded-[14px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-[10px] bg-teal flex items-center justify-center">
                <span className="text-white text-lg">📱</span>
              </div>
              <div>
                <p className="font-medium text-sm text-navy">Ebooks</p>
                <p className="text-xs text-teal-muted">
                  Amazon, Kobo, Apple &amp; more
                </p>
              </div>
            </div>
            <p className="text-xs text-teal-muted leading-relaxed">
              Distributed via Draft2Digital to all major digital stores. Also
              available direct from this site via Payhip.
            </p>
          </div>

          <div className="p-5 border border-beige-dark rounded-[14px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-[10px] bg-sky flex items-center justify-center">
                <span className="text-navy text-lg">🇿🇦</span>
              </div>
              <div>
                <p className="font-medium text-sm text-navy">
                  Buy in Rand
                </p>
                <p className="text-xs text-teal-muted">via Paystack</p>
              </div>
            </div>
            <p className="text-xs text-teal-muted leading-relaxed">
              South African readers can pay in ZAR with card or EFT directly
              on this site, powered by Paystack.
            </p>
          </div>
        </div>
      </div>

      {/* ---- Etsy — Solitary Witch Guides ---- */}
      <div className="px-10 py-10 border-b border-beige-dark">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🕯️</span>
              <h2 className="font-display text-[22px] font-semibold text-navy">
                Solitary Witch Guides
              </h2>
            </div>
            <p className="text-sm text-teal-muted max-w-[480px]">
              Step-by-step spell guides for the solitary witch — written for
              those who practise alone, by candlelight, on their own terms. No
              coven required. No experience assumed.
            </p>
          </div>
          <a
            href="https://www.etsy.com/shop/SolitaryWitchGuides"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[#F1641E] text-white text-sm font-medium no-underline hover:bg-[#D9571A] transition-colors whitespace-nowrap"
          >
            Visit Etsy shop →
          </a>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {etsyProducts.map((product) => (
            <a
              key={product.title}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-beige-dark rounded-[14px] no-underline hover:border-teal hover:bg-[#FAFBFC] transition-all block text-center"
            >
              <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🕯️</span>
              </div>
              <p className="font-medium text-[13px] text-navy mb-1">
                {product.title}
              </p>
              <p className="text-xs text-teal-muted mb-2">{product.desc}</p>
              <span className="text-xs font-medium text-teal">
                {product.price}
              </span>
            </a>
          ))}
        </div>

        <p className="text-xs text-teal-muted mt-4 text-center italic">
          &ldquo;An it harm none, do what ye will.&rdquo; — Digital downloads
          via Etsy. Instant delivery.
        </p>
      </div>

      {/* ---- The Hollow Library store ---- */}
      <div className="px-10 py-10 border-b border-beige-dark">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🌙</span>
              <h2 className="font-display text-[22px] font-semibold text-navy">
                The Hollow Library
              </h2>
            </div>
            <p className="text-sm text-teal-muted mb-4 leading-relaxed">
              Wicca guides, spiritual tools, and digital resources for the
              solitary practitioner. A curated collection of everything you need
              to walk the path with confidence.
            </p>
            <a
              href="https://hollow-library.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-full bg-navy text-white text-sm font-medium no-underline hover:bg-navy-light transition-colors"
            >
              Visit The Hollow Library →
            </a>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">✨</span>
              <h2 className="font-display text-[22px] font-semibold text-navy">
                The Zodiac Library
              </h2>
            </div>
            <p className="text-sm text-teal-muted mb-4 leading-relaxed">
              Zodiac readings, astrology guides, and star-chart resources.
              The sibling store to The Hollow Library — built for those who read
              the sky as fluently as the cards.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-2.5 rounded-full border border-teal text-teal text-sm font-medium no-underline hover:bg-teal hover:text-white transition-colors"
            >
              Visit The Zodiac Library →
            </a>
          </div>
        </div>
      </div>

      {/* ---- Platform summary ---- */}
      <div className="px-10 py-10">
        <p className="text-xs font-medium text-teal-muted uppercase tracking-widest mb-5">
          How payments work
        </p>
        <div className="grid grid-cols-4 gap-3">
          {[
            {
              name: "Books2Read",
              desc: "Universal links to all bookstores — Amazon, Kobo, Apple, B&N, and more. Powered by Draft2Digital.",
              color: "bg-navy",
            },
            {
              name: "Payhip",
              desc: "Direct ebook and PDF purchases with overlay checkout. You never leave this site. 95% goes to the author.",
              color: "bg-teal",
            },
            {
              name: "Paystack",
              desc: "Inline ZAR payments for South African readers. Pay with card or EFT in Rand.",
              color: "bg-sky",
            },
            {
              name: "Etsy",
              desc: "Spell guides and digital downloads via Etsy's trusted marketplace. Instant delivery after purchase.",
              color: "bg-[#F1641E]",
            },
          ].map((platform) => (
            <div
              key={platform.name}
              className="p-4 border border-beige-dark rounded-[14px]"
            >
              <div
                className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center mb-3`}
              >
                <span className="text-white text-[11px] font-bold">
                  {platform.name.charAt(0)}
                </span>
              </div>
              <p className="font-medium text-sm text-navy mb-1">
                {platform.name}
              </p>
              <p className="text-xs text-teal-muted leading-relaxed">
                {platform.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  );
}
