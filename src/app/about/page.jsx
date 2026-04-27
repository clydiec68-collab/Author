import Newsletter from "../../components/Newsletter";
import { themes } from "../../data/books";

export const metadata = { title: "About — Clydie Cronjé" };

const lifeCards = [
  { icon: "🌿", title: "Bonsai gardener", text: "Every corner of the garden holds a tree — each one a years-long practice in patience and intention." },
  { icon: "💻", title: "IT career", text: "From programmer to IT Executive — all levels of technology across a decades-long career." },
  { icon: "✍️", title: "30 years of writing", text: "From MS Notebook to OneNote to Google Keep to Word — assembled into 30 complete manuscripts." },
  { icon: "🧘", title: "Daily meditation", text: "Christian foundation, spiritual practice, reiki — every morning begins with stillness alongside Debbie-Ann." },
  { icon: "🎨", title: "Painter & builder", text: "Painting, electronics, building and repairing — the workbench holds whatever he's taking apart this week." },
  { icon: "💍", title: "Married since 1988", text: "Debbie-Ann — his Engeltjie — known since they were five years old. She appears in every dedication." },
];

export default function AboutPage() {
  return (
    <>
      {/* Split hero */}
      <div className="grid grid-cols-2 border-b border-beige-dark">
        {/* Photo */}
        <div className="bg-beige border-r border-beige-dark flex flex-col items-center justify-center p-12">
          <div className="w-[180px] h-[220px] rounded-[14px] bg-sky flex items-center justify-center mb-4">
            <span className="text-sm text-teal text-center leading-relaxed">
              Author
              <br />
              photo
              <br />
              goes here
            </span>
          </div>
          <p className="text-xs text-teal-muted text-center">
            Clydie Cronjé · South Africa
          </p>
        </div>

        {/* Intro */}
        <div className="p-12">
          <p className="text-xs font-medium text-teal uppercase tracking-widest mb-3.5">
            About the author
          </p>
          <h1 className="font-display text-3xl font-semibold text-navy mb-3">
            Clydie Cronjé
          </h1>
          <div className="text-[15px] text-teal-muted leading-[1.75]">
            <p>
              <strong className="text-navy font-medium">
                South African author
              </strong>{" "}
              whose writing moves between worlds — from fog-wrapped boarding
              schools and AI-rendered futures to ancient Taoism and the
              gold-dust history of the West Rand.
            </p>
            <p className="mt-4">
              He writes in the early hours, before the garden wakes, in a home
              where bonsai grow in every corner and the workbench holds whatever
              he is currently building, painting, or taking apart.
            </p>
          </div>
        </div>
      </div>

      {/* Long bio */}
      <div className="px-10 py-10 border-b border-beige-dark">
        <h2 className="font-display text-[22px] font-semibold text-navy mb-4">
          The full story
        </h2>
        <div className="text-[15px] text-teal-muted leading-[1.8] max-w-[720px] space-y-4">
          <p>
            Clydie Cronjé has spent his late fifties doing something quietly
            remarkable: writing thirty books across genres that most authors
            would never dare share a shelf. He writes literary fiction rooted in
            the red dust and mine-whistle rhythms of South Africa&apos;s West Rand.
            He writes YA supernatural mysteries set in boarding schools where the
            buildings themselves are alive and listening. He writes about
            artificial intelligence and what it might mean to engineer love. He
            writes about the Tao Te Ching as if Lao Tzu were a management
            consultant with something urgent to say to 2026.
          </p>
          <p>
            He does not sit still between books. His garden is a living canvas of
            bonsai — not collected in one place but threaded through every
            corner, each tree a years-long conversation between patience and
            intention. He paints. He builds and repairs electronics with the same
            careful attention he brings to a sentence. He loves technology not as
            a tool but as a language, one he has been fluent in for decades and
            still finds surprising.
          </p>
          <p>
            Every morning, before the day begins its noise, he and Debbie-Ann
            meditate — a practice that has shaped not just how he lives but how
            he writes, with an unhurried stillness at the centre of even his
            most restless stories.
          </p>
          <p>
            He married Debbie-Ann in 1988. She is his Engeltjie — his little
            angel — and thirty-seven years later they are still, by his own
            account, very happy. She appears in the dedication of every book he
            has written.
          </p>
          <p>
            He lives in South Africa with Debbie-Ann, surrounded by bonsai,
            paint, circuitry, and stories. She has always been the best reason
            to come home.
          </p>
        </div>
      </div>

      {/* Life cards */}
      <div className="px-10 py-10 grid grid-cols-3 gap-3.5 border-b border-beige-dark">
        {lifeCards.map((card) => (
          <div key={card.title} className="p-6 bg-beige rounded-[14px]">
            <span className="text-2xl mb-3 block">{card.icon}</span>
            <h3 className="text-sm font-medium text-navy mb-1">
              {card.title}
            </h3>
            <p className="text-[13px] text-teal-muted leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Themes */}
      <div className="px-10 py-10 border-b border-beige-dark">
        <h2 className="font-display text-[22px] font-semibold text-navy mb-5">
          Themes across the work
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {themes.map((t) => (
            <div
              key={t.name}
              className="flex items-start gap-3 p-3.5 px-4.5 border border-beige-dark rounded-[10px]"
            >
              <div className="w-2 h-2 rounded-full bg-teal shrink-0 mt-1.5" />
              <p className="text-sm text-navy leading-relaxed">
                {t.name}{" "}
                <span className="text-teal-muted">— {t.desc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery placeholders */}
      <div className="px-10 py-10">
        <h2 className="font-display text-[22px] font-semibold text-navy mb-5">
          The world behind the words
        </h2>
        <div className="grid grid-cols-3 gap-3.5">
          {["Bonsai garden", "Writing workspace", "The workbench"].map(
            (label) => (
              <div
                key={label}
                className="aspect-[4/3] bg-beige rounded-[14px] flex items-center justify-center"
              >
                <span className="text-sm text-teal-muted text-center leading-relaxed">
                  Photo:
                  <br />
                  {label}
                </span>
              </div>
            )
          )}
        </div>
      </div>

      <Newsletter />
    </>
  );
}
