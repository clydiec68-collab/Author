"use client";
import { config } from "../data/books";

/**
 * BuyButtons — shows available purchase options for a book.
 *
 * Pass the book object with its buy link fields:
 *   books2read: "https://books2read.com/hollow-library-1"
 *   payhip:     "ZjHXI" (product key)
 *   paystack:   14900 (amount in cents, e.g. R149.00)
 *
 * Only buttons with filled-in links will render.
 * When no links are set yet, a "Coming soon" badge shows instead.
 */
export default function BuyButtons({ book, size = "md" }) {
  const hasBooks2Read = book.books2read && book.books2read.length > 0;
  const hasPayhip = book.payhip && book.payhip.length > 0;
  const hasPaystack = book.paystack && book.paystack > 0;
  const hasAnyLink = hasBooks2Read || hasPayhip || hasPaystack;

  const btnBase =
    size === "sm"
      ? "text-xs px-3 py-1.5 rounded-full font-medium no-underline transition-colors inline-block"
      : "text-sm px-5 py-2 rounded-full font-medium no-underline transition-colors inline-block";

  if (!hasAnyLink) {
    return (
      <span className="inline-block text-[11px] bg-beige text-teal-muted px-3 py-1 rounded-full">
        Coming soon
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {/* Books2Read — universal link to all retailers (Draft2Digital + IngramSpark) */}
      {hasBooks2Read && (
        <a
          href={book.books2read}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnBase} bg-navy text-white hover:bg-navy-light`}
        >
          Buy now
        </a>
      )}

      {/* Payhip — direct ebook/PDF purchase with overlay checkout */}
      {hasPayhip && (
        <a
          href={`https://payhip.com/b/${book.payhip}`}
          className={`payhip-buy-button ${btnBase} bg-teal text-white hover:bg-teal-light`}
          data-product={book.payhip}
          data-theme="none"
        >
          Buy ebook
        </a>
      )}

      {/* Paystack — direct ZAR checkout for SA readers */}
      {hasPaystack && (
        <button
          onClick={() => handlePaystack(book)}
          className={`${btnBase} border border-teal text-teal hover:bg-teal hover:text-white cursor-pointer`}
        >
          Buy in ZAR (R{(book.paystack / 100).toFixed(0)})
        </button>
      )}
    </div>
  );
}

/**
 * Paystack Inline checkout — triggers the payment popup.
 * Requires Paystack InlineJS loaded in layout.jsx.
 */
function handlePaystack(book) {
  if (typeof window === "undefined" || !window.PaystackPop) {
    alert("Payment is loading — please try again in a moment.");
    return;
  }

  // Prompt for email
  const email = prompt("Enter your email address to complete payment:");
  if (!email) return;

  const handler = window.PaystackPop.setup({
    key: config.paystackPublicKey,
    email: email,
    amount: book.paystack,
    currency: config.currency,
    ref: "CC-" + Math.floor(Math.random() * 1000000000 + 1),
    metadata: {
      custom_fields: [
        {
          display_name: "Book",
          variable_name: "book_title",
          value: book.title,
        },
      ],
    },
    callback: function (response) {
      // Payment successful — redirect to a thank-you page or show confirmation
      alert(
        `Payment successful! Reference: ${response.reference}\n\nYou will receive your book via email shortly.`
      );
      // TODO: Send reference to your API to verify and deliver the book
    },
    onClose: function () {
      // User closed the popup
    },
  });

  handler.openIframe();
}
