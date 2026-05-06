"use client";
import { useState } from "react";
import Newsletter from "../../components/Newsletter";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 border-b border-beige-dark">
        {/* Form */}
        <div className="p-8 md:p-12 md:border-r border-beige-dark">
          <h1 className="font-display text-[28px] font-semibold text-navy mb-2">
            Get in touch
          </h1>
          <p className="text-[15px] text-teal-muted mb-8 leading-relaxed">
            Have a question about the books, interested in a collaboration, or
            just want to say hello? I&apos;d love to hear from you.
          </p>

          {submitted ? (
            <div className="p-5 bg-sky rounded-[10px] text-center">
              <p className="text-navy font-medium text-[15px]">
                Message sent!
              </p>
              <span className="text-[13px] text-teal-muted">
                Thank you for reaching out. I&apos;ll get back to you as soon as I
                can.
              </span>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-navy mb-1.5">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-[10px] border border-beige-dark text-sm text-navy"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-navy mb-1.5">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-[10px] border border-beige-dark text-sm text-navy"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-navy mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-[10px] border border-beige-dark text-sm text-navy"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-navy mb-1.5">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-[10px] border border-beige-dark text-sm text-navy cursor-pointer">
                  <option value="">Select a topic...</option>
                  <option>General enquiry</option>
                  <option>Question about the books</option>
                  <option>Rights &amp; media enquiry</option>
                  <option>Speaking / events</option>
                  <option>Something else</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-navy mb-1.5">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="What would you like to say?"
                  className="w-full px-4 py-3 rounded-[10px] border border-beige-dark text-sm text-navy resize-y"
                />
              </div>

              <button
                onClick={() => setSubmitted(true)}
                className="w-full py-3 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy-light transition-colors cursor-pointer"
              >
                Send message
              </button>
            </div>
          )}
        </div>

        {/* Info & social */}
        <div className="p-8 md:p-12 bg-beige">
          <h2 className="font-display text-[22px] font-semibold text-navy mb-6">
            Connect
          </h2>

          <p className="text-xs font-medium text-teal uppercase tracking-wide mb-4">
            Find me online
          </p>

          <div className="space-y-2.5">
            {[
              { name: "Goodreads", desc: "Author profile — reviews & reading lists" },
              { name: "Instagram", desc: "Bonsai, books & the writing life" },
              { name: "Facebook", desc: "Author page — SA audience & community" },
              { name: "TikTok / BookTok", desc: "YA series content & behind the scenes" },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="flex items-center gap-3 p-3.5 border border-beige-dark rounded-[10px] bg-white no-underline hover:border-teal transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-sky flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-medium text-navy">
                    {social.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm text-navy">
                    {social.name}
                  </p>
                  <p className="text-xs text-teal-muted">{social.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-7 p-4.5 bg-white border border-beige-dark rounded-[10px]">
            <h3 className="text-[13px] font-medium text-navy mb-1">
              Rights &amp; media enquiries
            </h3>
            <p className="text-xs text-teal-muted leading-relaxed">
              For translation rights, film/TV options, press features, or
              interview requests, please use the contact form and select
              &ldquo;Rights &amp; media enquiry&rdquo; from the subject
              dropdown. I aim to respond within 48 hours.
            </p>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
