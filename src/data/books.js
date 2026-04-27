// ============================================
// All book & series data — edit here, updates everywhere
//
// BUY LINKS — fill these in as you publish:
//   books2read: "https://books2read.com/your-custom-url"
//   payhip:     "PRODUCT_KEY" (from payhip.com/b/PRODUCT_KEY)
//   paystack:   amount in cents (e.g. 14900 = R149.00)
// ============================================

export const config = {
  // Replace with your live keys when ready
  payhipStorefront: "https://payhip.com/ClydieCronje", // your Payhip store URL
  paystackPublicKey: "pk_test_xxxxxxxxxxxxxxxxxxxxxxxx", // from paystack.com dashboard
  currency: "ZAR",
  // Books2Read author page
  books2readAuthor: "https://books2read.com/ap/ClydieCronje",
};

export const series = [
  {
    slug: "the-hollow-library",
    title: "The Hollow Library Series",
    shortTitle: "The Hollow Library",
    tagline: "A boarding school where the building itself is alive and listening.",
    description: "Seven students. Seven stories. One library that holds more than books — it holds the memories and secrets of every person who has ever walked its halls.",
    genre: "YA supernatural mystery",
    setting: "Ashford Academy",
    note: "Different narrator per book",
    bookCount: 7,
    tags: ["YA", "Supernatural", "Mystery", "Boarding school", "Multiple narrators"],
    spineColors: ["#2F4156", "#3A5060", "#567C8D", "#445C6E"],
    status: "ready",
  },
  {
    slug: "the-overlap-saga",
    title: "The Overlap Saga",
    shortTitle: "The Overlap Saga",
    tagline: "What happens when the boundaries between worlds start to dissolve?",
    description: "A seven-book YA sci-fi series following Jess Reeves through the overlap — a collision of realities that begins with a text from a dead girl.",
    genre: "YA sci-fi / supernatural",
    setting: "Multiple realities",
    note: "Protagonist: Jess Reeves",
    bookCount: 7,
    tags: ["YA", "Sci-fi", "Supernatural"],
    spineColors: ["#567C8D", "#6B8E9E", "#7A9AAA", "#5A7A8A"],
    status: "ready",
  },
  {
    slug: "midnight-society",
    title: "Midnight Society Series",
    shortTitle: "Midnight Society",
    tagline: "At Ravenmoor, the building is not just watching — it is becoming.",
    description: "Six literary YA novels set at Ravenmoor Boarding School, where the building itself is gaining consciousness. Each book is told by a different narrator.",
    genre: "Literary YA",
    setting: "Ravenmoor Boarding School",
    note: "Building as consciousness",
    bookCount: 6,
    tags: ["YA", "Literary", "Supernatural"],
    spineColors: ["#3A4856", "#4A5866", "#5A6876"],
    status: "fix",
  },
  {
    slug: "the-attuned",
    title: "The Attuned Series",
    shortTitle: "The Attuned",
    tagline: "Some gifts are heavier than silence.",
    description: "YA supernatural set in Bristol. Jude discovers a psychic ability that changes everything. The longest and richest world-building of any book in the catalogue.",
    genre: "YA supernatural",
    setting: "Bristol",
    note: "Protagonist: Jude · Ongoing series",
    bookCount: 1,
    tags: ["YA", "Supernatural", "Psychic"],
    spineColors: ["#2F4156"],
    status: "fix",
  },
  {
    slug: "the-sterling-ledger",
    title: "The Sterling Ledger Trilogy",
    shortTitle: "The Sterling Ledger",
    tagline: "From the shadows of the South African Special Task Force to the streets of New York.",
    description: "Arthur Sterling — Special Task Force operator turned New York detective — emerges from invisibility to confront a network that has been hiding in plain sight.",
    genre: "SA thriller",
    setting: "South Africa / New York",
    note: "Protagonist: Arthur Sterling",
    bookCount: 3,
    tags: ["Thriller", "South Africa", "Crime"],
    spineColors: ["#445C6E", "#567C8D", "#506878"],
    status: "fix",
  },
  {
    slug: "the-love-trilogy",
    title: "The Love Trilogy — Source Code Trilogy",
    shortTitle: "Love Trilogy",
    tagline: "What is love when you strip away everything culture has added?",
    description: "Three books exploring the source code of love across religious traditions, neuroscience, and daily practice. Spiritual non-fiction honest enough to examine the shadow side.",
    genre: "Spiritual non-fiction",
    setting: "Cross-tradition",
    note: "Religion, neuroscience, and the practice of love",
    bookCount: 3,
    tags: ["Non-fiction", "Spiritual", "Philosophy"],
    spineColors: ["#3A5060", "#2F4156", "#4A6272"],
    status: "fix",
  },
];

export const standalones = [
  { title: "The Tao Te Ching", subtitle: "Modern leadership philosophy", description: "All 81 verses reimagined for modern leadership, with introduction and afterword.", cover: 2, coverText: "The Tao\nTe Ching", tags: ["Non-fiction", "Philosophy", "Leadership"], status: "ready", books2read: "", payhip: "", paystack: 0 },
  { title: "The Digital Alchemist", subtitle: "Sci-fi · AI / love / Seattle", description: "A sci-fi novel about artificial intelligence and what it might mean to engineer love. The most timely book in the catalogue.", cover: 1, coverText: "The Digital\nAlchemist", tags: ["Sci-fi", "AI", "Love"], badge: "Most timely", status: "ready", books2read: "", payhip: "", paystack: 0 },
  { title: "The Rendered World", subtitle: "Non-fiction · Neuroscience & perception", description: "An exploration of how the brain constructs reality and what it means for consciousness.", cover: 4, coverText: "The Rendered\nWorld", tags: ["Non-fiction", "Neuroscience"], status: "ready", books2read: "", payhip: "", paystack: 0 },
  { title: "The Centenary Debt", subtitle: "SA historical fiction · 1888 to present", description: "The du Toit and Dawson families — intertwined across a century of South African history, from the gold rush to the present day.", cover: 7, coverText: "The\nCentenary\nDebt", tags: ["Historical fiction", "South Africa"], status: "fix", books2read: "", payhip: "", paystack: 0 },
  { title: "PMP Exam Prep PMBOK 7", subtitle: "Professional · Exam preparation", description: "Comprehensive PMP exam preparation aligned with the PMBOK 7th edition. The largest manuscript in the catalogue.", cover: 6, coverText: "PMP Exam\nPrep\nPMBOK 7", tags: ["Professional", "Exam prep"], status: "fix", books2read: "", payhip: "", paystack: 0 },
];

// Buy link fields per book:
//   books2read: Universal Book Link URL (Draft2Digital creates these automatically)
//   payhip:     Payhip product key (the part after payhip.com/b/)
//   paystack:   Price in cents for direct ZAR checkout (0 = not available)

export const seriesBooks = {
  "the-hollow-library": [
    { num: 1, title: "The Hollow Library", narrator: "Maren Cole", desc: "Maren arrives at Ashford Academy and discovers the library — a place that holds more than books. It holds the building's memory, and it has been waiting for someone like her.", cover: 1, badge: "Start here", books2read: "", payhip: "", paystack: 0 },
    { num: 2, title: "The Sister's Shelf", narrator: "Kai", desc: "Kai searches for his sister Lin, who has vanished into the library's deeper reaches. The building knows where she is — but it has its own reasons for keeping her.", cover: 2, books2read: "", payhip: "", paystack: 0 },
    { num: 3, title: "The Changing Portrait", narrator: "Sunday Osei — the art student", desc: "Sunday Osei sees what others miss. As Ashford's most gifted art student, she notices the portraits on the walls are changing — and the faces in them are watching back.", cover: 3, books2read: "", payhip: "", paystack: 0 },
    { num: 4, title: "The Founding Record", narrator: "James Whitmore — Head Boy", desc: "James Whitmore holds the title of Head Boy, but Ashford answers to older authority. When he uncovers the founding record, he realises the school was never built — it was summoned.", cover: 4, books2read: "", payhip: "", paystack: 0 },
    { num: 5, title: "The Uninvited", narrator: "Priya Bakshi — the uninvited student", desc: "Priya Bakshi was never supposed to be at Ashford. She arrived without an invitation, and the building knows it. What happens to someone the library never asked for?", cover: 5, books2read: "", payhip: "", paystack: 0 },
    { num: 6, title: "The Warden's Book", narrator: "Lin Zhang — the recovered student", desc: "Lin Zhang is back. After being lost inside the library's depths, she has returned changed. She carries the Warden's Book, and with it, knowledge the building never meant to share.", cover: 6, books2read: "", payhip: "", paystack: 0 },
    { num: 7, title: "The Deeper Stacks", narrator: "Series conclusion", desc: "The final book. Everything the library has been building towards converges in the Deeper Stacks — where the oldest memories are kept and the building finally reveals what it wants.", cover: 7, books2read: "", payhip: "", paystack: 0 },
  ],
  "the-overlap-saga": [
    { num: 1, title: "Dead Girls Don't Text Back", narrator: "Jess Reeves", desc: "It starts with a text from a dead girl. Jess Reeves didn't believe in the impossible — until the impossible started sending messages.", cover: 1, books2read: "", payhip: "", paystack: 0 },
    { num: 2, title: "The Overlap Protocol", narrator: "Jess Reeves", desc: "The boundaries between realities are thinning. Jess discovers there's a protocol for what happens when worlds collide — and she's already inside it.", cover: 2, books2read: "", payhip: "", paystack: 0 },
    { num: 3, title: "When the Sky Answered", narrator: "Jess Reeves", desc: "The sky answered. Not with light or sound, but with something older. Jess is no longer just crossing between worlds — the worlds are crossing into her.", cover: 3, books2read: "", payhip: "", paystack: 0 },
    { num: 4, title: "Harmonic War", narrator: "Jess Reeves", desc: "The overlapping realities are no longer coexisting — they are at war. And Jess is caught between harmonics that could tear everything apart.", cover: 4, books2read: "", payhip: "", paystack: 0 },
    { num: 5, title: "The Predator Above Earth", narrator: "Jess Reeves", desc: "Something has noticed the overlap. Something vast, patient, and predatory. It has been waiting above Earth for exactly this moment.", cover: 5, books2read: "", payhip: "", paystack: 0 },
    { num: 6, title: "Judgment of the Vastness", narrator: "Jess Reeves", desc: "The vastness has made its judgment. Jess must face what it means when the universe itself decides you have gone too far.", cover: 6, books2read: "", payhip: "", paystack: 0 },
    { num: 7, title: "Dead Girls Don't", narrator: "Series conclusion", desc: "The final reckoning. Where the saga began with a text from a dead girl, it ends with a question: what does it mean to truly be alive?", cover: 7, books2read: "", payhip: "", paystack: 0 },
  ],
  "midnight-society": [
    { num: 1, title: "The East Wing", narrator: "Lena — the historian", desc: "Lena arrives at Ravenmoor and is drawn to the East Wing, where the oldest records are kept — and where the building's consciousness first began to stir.", cover: 7, books2read: "", payhip: "", paystack: 0 },
    { num: 2, title: "The Burning Room", narrator: "Owen — the poet", desc: "Owen writes poetry in a room that shouldn't exist. The Burning Room appears only to those the building has chosen, and it has something to show him.", cover: 1, books2read: "", payhip: "", paystack: 0 },
    { num: 3, title: "The Experiment", narrator: "Dez — the scientist", desc: "Dez approaches Ravenmoor as a scientist. She wants to measure, quantify, and explain. The building has other plans for her certainty.", cover: 3, books2read: "", payhip: "", paystack: 0 },
    { num: 4, title: "The Archive", narrator: "Photographer narrator", desc: "Through the lens of a camera, the archive reveals what the human eye cannot see. Every photograph taken at Ravenmoor contains something extra.", cover: 4, books2read: "", payhip: "", paystack: 0 },
    { num: 5, title: "The Standing Stones", narrator: "Isla Drummond — violinist", desc: "Isla Drummond plays the violin among the standing stones behind Ravenmoor. The music reaches something deep beneath the school — and it responds.", cover: 5, books2read: "", payhip: "", paystack: 0 },
    { num: 6, title: "The Founder's Tale", narrator: "Theo — series conclusion", desc: "The final book. Theo discovers the founder's tale — the truth about why Ravenmoor was built and what it has been becoming all along.", cover: 2, books2read: "", payhip: "", paystack: 0 },
  ],
  "the-attuned": [
    { num: 1, title: "The Attuned — Book One", narrator: "Jude", desc: "Set in Bristol, Jude discovers a psychic ability that changes everything. The longest and richest world-building of any book in the catalogue, with over 18,000 lines.", cover: 1, books2read: "", payhip: "", paystack: 0 },
  ],
  "the-sterling-ledger": [
    { num: 1, title: "The Invisible War", narrator: "Arthur Sterling", desc: "Arthur Sterling emerges from years of invisibility — a South African Special Task Force operator turned New York detective, confronting a war that was never meant to be seen.", cover: 4, books2read: "", payhip: "", paystack: 0 },
    { num: 2, title: "The Indigo Audit", narrator: "Arthur Sterling", desc: "The network Sterling has been hunting is larger than he imagined. The Indigo Audit forces a confrontation that will cost him everything he's rebuilt.", cover: 2, books2read: "", payhip: "", paystack: 0 },
    { num: 3, title: "The Thermal Leak", narrator: "Arthur Sterling", desc: "The final accounting. Sterling follows the thermal leak — the one trace the network couldn't hide — to its source. Some debts can only be settled in person.", cover: 6, books2read: "", payhip: "", paystack: 0 },
  ],
  "the-love-trilogy": [
    { num: 1, title: "Love Unveiled", narrator: "", desc: "The source code of love across religious traditions and neuroscience. What is love when you strip away everything culture, religion, and expectation have added?", cover: 3, books2read: "", payhip: "", paystack: 0 },
    { num: 2, title: "Love Contested", narrator: "", desc: "The shadow side of love. The strongest book in the trilogy — an unflinching look at what happens when love is weaponised, withheld, and misunderstood.", cover: 1, badge: "Strongest of the three", books2read: "", payhip: "", paystack: 0 },
    { num: 3, title: "Love Embodied", narrator: "", desc: "The daily practice. How to live love as a verb — in marriage, in silence, in the small hours before dawn. Ends with one of the most beautiful passages in the catalogue.", cover: 5, books2read: "", payhip: "", paystack: 0 },
  ],
};

export const themes = [
  { name: "Consciousness", desc: "what it means to truly perceive reality" },
  { name: "Inherited damage", desc: "what families and histories pass down" },
  { name: "Love as practice", desc: "not feeling, but daily choice" },
  { name: "Living places", desc: "buildings and landscapes as presences" },
  { name: "South African weight", desc: "the history and landscape" },
  { name: "Technology & humanity", desc: "can they coexist with the soul?" },
  { name: "The quiet hours", desc: "meditation, stillness, clarity before dawn" },
  { name: "Patience", desc: "bonsai, writing, relationships: all require the same thing" },
];
