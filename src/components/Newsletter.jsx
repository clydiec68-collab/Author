"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="border-t border-beige-dark px-10 py-7 flex items-center justify-between bg-beige">
      <div>
        <h3 className="text-base font-medium text-navy mb-0.5">
          Join the newsletter
        </h3>
        <p className="text-sm text-teal-muted">
          Free first chapter of The Hollow Library + release updates for all series
        </p>
      </div>
      {submitted ? (
        <p className="text-sm font-medium text-teal">
          Thank you! Check your inbox.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="px-5 py-2.5 rounded-full bg-white border border-sky text-sm text-navy w-56"
            required
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-full bg-teal text-white text-sm font-medium hover:bg-teal-light transition-colors cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
