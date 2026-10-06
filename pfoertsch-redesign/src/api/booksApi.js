const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";
const OPEN_LIBRARY_API = "https://openlibrary.org/search.json";

/* =========================================
   COMPLETE PFORTSCH DATASET
   (43 Books, 17 Chapters, 26 Translations)
========================================= */
export const pfoertschBooksData = [
  // --- BOOKS PUBLISHED (43) ---
  {
    category: "Books Published",
    title: "B2B Brand Management, Performance Branding: Case Studies Collection Morocco Edition",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Salah Juidette"],
    publisher: "Nexus Global Marketing",
    publishedDate: "December 2025",
    location: "Toronto",
    source: "Case Studies Collection"
  },
  {
    category: "Books Published",
    title: "B2B Brand Management, Performance Branding: Case Studies Collection Jordan Edition",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Abdelrahman Zidan"],
    publisher: "Nexus Global Marketing",
    publishedDate: "November 2025",
    location: "Toronto",
    source: "Case Studies Collection"
  },
  {
    category: "Books Published",
    title: "B2B Brand Management, Performance Branding: Case Studies Collection Qatar Edition",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Khalid Al-Sulati"],
    publisher: "Nexus Global Marketing",
    publishedDate: "October 2025",
    location: "Toronto",
    source: "Case Studies Collection"
  },
  {
    category: "Books Published",
    title: "B2B Brand Management, Performance Branding",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Springer Publishing",
    publishedDate: "September 2025",
    location: "Heidelberg, New York"
  },
  {
    category: "Books Published",
    title: "Humanism in Marketing: Responsible Leadership and the Human-to-Human Approach",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Ivan Ureta", "Fabio Ancarani"],
    publisher: "Palgrave",
    publishedDate: "November 2024"
  },
  {
    category: "Books Published",
    title: "An Instructor's Manual to H2H Marketing Case Studies: Teach Human-to-Human Marketing Effectively",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz", "Kejsi Sulaj"],
    publisher: "Springer",
    publishedDate: "January 2024",
    location: "Heidelberg, New York",
    pages: 181
  },
  {
    category: "Books Published",
    title: "H2H Marketing: New Case Studies on Human-to-Human Marketing",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Springer",
    publishedDate: "forthcoming, 2023",
    location: "Heidelberg, New York"
  },
  {
    category: "Books Published",
    title: "H2H Marketing: Case Studies on Human-to-Human Marketing",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz", "Max Haas"],
    publisher: "Springer",
    publishedDate: "June 2023",
    location: "Heidelberg, New York",
    pages: 213
  },
  {
    category: "Books Published",
    title: "H2H-Marketing – von Menschen für Menschen: Marketing mit mehr Verantwortung und Nachhaltigkeit – Konzeption und Umsetzung",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publisher: "Gabler Verlag",
    publishedDate: "June 2022",
    location: "Wiesbaden",
    pages: 262
  },
  {
    category: "Books Published",
    title: "Business-to-Business Marketing",
    authors: ["Waldemar A. Pförtsch", "Adam-Alexander Manowicz", "Michael W. Preikschas"],
    publisher: "Kiehl Verlag",
    publishedDate: "2022",
    pages: 274
  },
  {
    category: "Books Published",
    title: "H2H Marketing: The Genesis of Human-to-Human Marketing",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publisher: "Springer",
    publishedDate: "January 2021",
    location: "Heidelberg, New York",
    pages: 267
  },
  {
    category: "Books Published",
    title: "Das neue Marketing-Mindset: Management, Methoden und Prozesse für ein Marketing von Mensch zu Mensch",
    authors: ["Waldemar Pfoertsch", "Uwe Sponholz"],
    publisher: "Gabler-Springer",
    publishedDate: "July 2019",
    location: "Heidelberg",
    pages: 586
  },
  {
    category: "Books Published",
    title: "Working Abroad – Country Metaphors: How to understand foreign markets and do business around the globe",
    authors: ["Waldemar Pfoertsch (Ed.)"],
    publisher: "WAP Books",
    publishedDate: "February 2018",
    location: "Stuttgart",
    pages: 108
  },
  {
    category: "Books Published",
    title: "Working Abroad – Country Perspective: How to understand foreign markets and do business around the globe",
    authors: ["Waldemar Pfoertsch (Ed.)"],
    publisher: "WAP Books",
    publishedDate: "November 2017",
    location: "Stuttgart",
    pages: 241
  },
  {
    category: "Books Published",
    title: "Aspects of Digital B2B Marketing",
    authors: ["Waldemar Pfoertsch (Ed.)"],
    publisher: "WAP Books",
    publishedDate: "October 2017",
    location: "Stuttgart"
  },
  {
    category: "Books Published",
    title: "Working Abroad - Case Study Collection: How to understand foreign markets and do business around the globe",
    authors: ["Waldemar Pfoertsch (Ed.)"],
    publisher: "WAP Books",
    publishedDate: "October 2017",
    location: "Stuttgart",
    source: "Case Studies Collection"
  },
  {
    category: "Books Published",
    title: "China Time Honored Brands: The history and future of traditional products and brands in China",
    authors: ["Waldemar Pfoertsch"],
    publisher: "WAP Books",
    publishedDate: "September 2017",
    location: "Stuttgart"
  },
  {
    category: "Books Published",
    title: "Basics in Finance for International Marketers",
    authors: ["Waldemar Pfoertsch (Ed.)"],
    publisher: "WAP Books",
    publishedDate: "September 2017",
    location: "Stuttgart"
  },
  {
    category: "Books Published",
    title: "Working Abroad: How to understand foreign markets and do business around the globe",
    authors: ["Waldemar Pfoertsch (Ed.)"],
    publisher: "WAP Books",
    publishedDate: "July 2017",
    location: "Stuttgart"
  },
  {
    category: "Books Published",
    title: "Transformational Sales, Making a Difference with Strategic Customers",
    authors: ["Philip Kotler", "Marian Dingena", "Waldemar Pfoertsch"],
    publisher: "Springer Publishing",
    publishedDate: "September 2015",
    location: "Heidelberg, New York"
  },
  {
    category: "Books Published",
    title: "B2B Brand Portfolio Strategy: Principles of Success - A Theoretical and Explorative Approach",
    authors: ["Waldemar Pfoertsch", "Christian Peter Schaefer"],
    publisher: "Saarbruecken",
    publishedDate: "July 2015"
  },
  {
    category: "Books Published",
    title: "UPBRANDING: Mehr Premium ist nicht gleich Luxus: die Prestige-Sphäre im Markenkosmos",
    authors: ["Waldemar Pfoertsch (Ed.)", "Shanine Johnson", "Khadidja Kohrs"],
    publisher: "Kindle Edition",
    publishedDate: "June 2015",
    location: "Luxembourg"
  },
  {
    category: "Books Published",
    title: "Business-to-Business-Marketing (5th revised Edition)",
    authors: ["Waldemar Pförtsch", "Peter Godefroid"],
    publisher: "Herne",
    publishedDate: "2013",
    pages: 460
  },
  {
    category: "Books Published",
    title: "The Globalization of Chinese Companies: Strategies for Conquering International Markets",
    authors: ["Katherine Xin", "Arthur Yeung", "Waldemar Pfoertsch", "Shengjun Liu"],
    publisher: "Wiley",
    publishedDate: "March 2011",
    location: "Singapore",
    pages: 224
  },
  {
    category: "Books Published",
    title: "Business to Business Marketing – Analysis and Practice (1st Edition)",
    authors: ["Waldemar Pfoertsch", "Joseph Giglierano", "Robert Vitale"],
    publisher: "Prentice Hall",
    publishedDate: "2010",
    location: "Upper Saddle River, New Jersey",
    pages: 450
  },
  {
    category: "Books Published",
    title: "Ingredient Branding: Making the Invisible Visible",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Springer Publishing",
    publishedDate: "2010",
    location: "Heidelberg, New York",
    pages: 408
  },
  {
    category: "Books Published",
    title: "The Big Book of Real Business (Children book, English & Chinese)",
    authors: ["Waldemar Pfoertsch", "Ines Michi"],
    publisher: "Lulu Publications",
    publishedDate: "2009",
    location: "Raleigh, NC, USA",
    pages: 140
  },
  {
    category: "Books Published",
    title: "Business-to-Business-Marketing (4th Edition)",
    authors: ["Waldemar Pförtsch", "Peter Godefroid"],
    publisher: "Ludwigshafen",
    publishedDate: "2009",
    pages: 430
  },
  {
    category: "Books Published",
    title: "Perspektiven des IT-Weiterbildungssystems in Deutschland: Ein Einblick in Markt, Rahmenbedingungen und Marketing",
    authors: ["Waldemar A. Pförtsch", "Rebekka Müller", "Maddalena Sassanelli", "Jeannine Klar"],
    publisher: "BIBB-Publikation",
    publishedDate: "2007",
    location: "Berlin",
    pages: 211
  },
  {
    category: "Books Published",
    title: "Social Marketing: Erfolgreiche Marketingkonzepte für Non-Profit-Organisationen",
    authors: ["Klaus Koziol", "Waldemar Pfoertsch", "Steffen Heil"],
    publisher: "Schäffer-Poeschel",
    publishedDate: "November 2006",
    location: "Stuttgart",
    pages: 172
  },
  {
    category: "Books Published",
    title: "B2B Brand Management",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Springer Publishing",
    publishedDate: "September 2006",
    location: "Heidelberg, New York",
    pages: 357,
    officialWebsite: "https://b2bbrandmanagement.com/"
  },
  {
    category: "Books Published",
    title: "Marke in der Marke: Macht und Bedeutung des Ingredient Branding",
    authors: ["Waldemar Pfoertsch", "Janto Mueller"],
    publisher: "Springer Publishing",
    publishedDate: "2006",
    location: "Heidelberg",
    pages: 204
  },
  {
    category: "Books Published",
    title: "B2B Markenmanagement",
    authors: ["Waldemar Pfoertsch", "Michael Schmid"],
    publisher: "Vahlen Verlag",
    publishedDate: "2005",
    location: "München",
    pages: 605
  },
  {
    category: "Books Published",
    title: "Symposium WOManagement: Konferenzdokumentation",
    authors: ["Waldemar Pförtsch (Hrsg.)"],
    publisher: "Hochschule Pforzheim",
    publishedDate: "April 2004",
    pages: 455
  },
  {
    category: "Books Published",
    title: "Internationalisierung des Mittelstandes – Strategien zur Internationalen Qualifizierung von kleinen und mittleren Unternehmen",
    authors: ["Ekbert Hering", "Waldemar Pfoertsch", "Peter Wordelmann"],
    publisher: "Bertelsmann",
    publishedDate: "2001",
    location: "Gütersloh",
    pages: 135
  },
  {
    category: "Books Published",
    title: "Mit Strategie ins Internet",
    authors: ["Waldemar Pfoertsch"],
    publisher: "BW-Verlag",
    publishedDate: "2000",
    location: "Nürnberg",
    pages: 145
  },
  {
    category: "Books Published",
    title: "Living Web: Verlag Moderne Industrie – Erprobte Anwendungen, Strategien und zukünftige Entwicklungen im Internet",
    authors: ["Waldemar Pförtsch (Ed.)"],
    publisher: "Landsberg",
    publishedDate: "1999/2000",
    pages: 344
  },
  {
    category: "Books Published",
    title: "Faszination Japan",
    authors: ["Waldemar Pförtsch (Ed.)"],
    publisher: "G.A. Ulmer Verlag",
    publishedDate: "1999",
    location: "Tuningen"
  },
  {
    category: "Books Published",
    title: "Strategien für die neue Weltwirtschaft",
    authors: ["Bolko v. Oetinger", "Waldemar Pförtsch (Ed.)"],
    publisher: "Carl Hanser Verlag",
    publishedDate: "1998",
    location: "München"
  },
  {
    category: "Books Published",
    title: "Trends in Globalization and Relocation Requirements",
    authors: ["Waldemar Pförtsch"],
    publisher: "Arthur Andersen",
    publishedDate: "June 1992",
    location: "Stuttgart, Germany"
  },
  {
    category: "Books Published",
    title: "Universitärer Technologie-Transfer: Initiierung und Implementierung von Forschungs- und Entwicklungs-ergebnissen durch die Universität am Beispiel der Angepassten Technologien (Dissertation)",
    authors: ["Waldemar Pförtsch"],
    publisher: "Verlag der Olivenbaum",
    publishedDate: "1981",
    location: "Berlin"
  },
  {
    category: "Books Published",
    title: "Angepasste Technologien: Modular manufacturing systems for industrial flexibility [Exhibition presentation]",
    authors: ["W. Pfoertsch"],
    publisher: "Deutsche Messe AG",
    publishedDate: "1978",
    description: "In Hannover Messe 1978: Official exhibition brochure"
  },
  {
    category: "Books Published",
    title: "Technical report on integrated planning and transport systems within the program",
    authors: ["W. Pfoertsch"],
    publisher: "Technische Universität Berlin",
    publishedDate: "1978",
    description: "IPAT Technical Report, Internal Report"
  },

  // --- BOOK CHAPTERS (17) ---
  {
    category: "Book Chapters",
    title: "Vorwort in: Business Model Flowchart - Bausteine für erfolgreiche KMU Geschäftsmodelle",
    authors: ["W. Pfoertsch"],
    publisher: "Jade Hochschule, Wilhelmshaven",
    publishedDate: "2025"
  },
  {
    category: "Book Chapters",
    title: "Implications of Humanistic Marketing",
    authors: ["Theodore Panayotou", "Waldemar Pfoertsch"],
    publishedDate: "October 25, 2024",
    infoUrl: "https://doi.org/10.1007/978-3-031-67155-5_9"
  },
  {
    category: "Book Chapters",
    title: "Introduction",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Fabio Ancarani", "Ivan Ureta"],
    publishedDate: "October 25, 2024",
    infoUrl: "https://doi.org/10.1007/978-3-031-67155-5_1"
  },
  {
    category: "Book Chapters",
    title: "The Genesis of Human-to-Human Marketing",
    authors: ["Waldemar Pfoertsch"],
    publishedDate: "October 25, 2024",
    infoUrl: "https://doi.org/10.1007/978-3-031-67155-5_6"
  },
  {
    category: "Book Chapters",
    title: "The New Paradigm: H2H Marketing",
    authors: ["P. Kotler", "W. Pfoertsch", "U. Sponholz", "M. Haas"],
    publisher: "Springer, Cham",
    publishedDate: "2023",
    infoUrl: "https://doi.org/10.1007/978-3-031-22393-8_1"
  },
  {
    category: "Book Chapters",
    title: "H2H Mindset in H2H Marketing",
    authors: ["P. Kotler", "W. Pfoertsch", "U. Sponholz", "M. Haas"],
    publisher: "Springer, Cham",
    publishedDate: "2023",
    infoUrl: "https://doi.org/10.1007/978-3-031-22393-8_4"
  },
  {
    category: "Book Chapters",
    title: "H2H Brand Management and Trust",
    authors: ["P. Kotler", "W. Pfoertsch", "U. Sponholz", "M. Haas"],
    publisher: "Springer, Cham",
    publishedDate: "2023",
    infoUrl: "https://doi.org/10.1007/978-3-031-22393-8_6"
  },
  {
    category: "Book Chapters",
    title: "Rethinking Operative Marketing: The H2H Process",
    authors: ["P. Kotler", "W. Pfoertsch", "U. Sponholz", "M. Haas"],
    publisher: "Springer, Cham",
    publishedDate: "2023",
    infoUrl: "https://doi.org/10.1007/978-3-031-22393-8_8"
  },
  {
    category: "Book Chapters",
    title: "Establishing Resonance Between Companies, People, and the Environment",
    authors: ["P. Kotler", "W. Pfoertsch", "U. Sponholz", "M. Haas"],
    publisher: "Springer, Cham",
    publishedDate: "2023",
    infoUrl: "https://doi.org/10.1007/978-3-031-22393-8_11"
  },
  {
    category: "Book Chapters",
    title: "The Genesis of H2H Marketing in Big Bang Marketing 2020",
    authors: ["Waldemar Pfoertsch"],
    publisher: "Kotler Impact",
    publishedDate: "2021"
  },
  {
    category: "Book Chapters",
    title: "German Symphony Metaphor",
    authors: ["Martin Gannon", "Waldemar Pfoertsch"],
    publisher: "SAGE Publications",
    publishedDate: "2018",
    description: "In: Understanding Global Cultures (7th edition)"
  },
  {
    category: "Book Chapters",
    title: "Chinese Jobs in Germany: Do Chinese mergers and acquisitions create jobs in Germany?",
    authors: ["Waldemar Pfoertsch", "Yipeng Liu"],
    publisher: "Hochschule Pforzheim",
    publishedDate: "2013"
  },
  {
    category: "Book Chapters",
    title: "Erfolgsmessung von Ingredient Branding",
    authors: ["Waldemar Pfoertsch", "Christian Linder"],
    publisher: "Ingredient Branding, Heidelberg",
    publishedDate: "2009"
  },
  {
    category: "Book Chapters",
    title: "Ingredient Branding im chinesischen Automobilmarkt",
    authors: ["Waldemar Pförtsch"],
    publisher: "German Industry and Commerce Shanghai Branch",
    publishedDate: "2009"
  },
  {
    category: "Book Chapters",
    title: "Measuring the value of Ingredient Brand equity at multiple stages in the supply chain: A component supplier’s perspective",
    authors: ["Waldemar Pfoertsch", "Christian Linder", "Jennifer Chandler"],
    publishedDate: "2008",
    pages: "571–594",
    description: "Interdisciplinary Management Research III"
  },
  {
    category: "Book Chapters",
    title: "Die Zukunft des Marketings: Nachhaltigkeit als Basisstrategie des Marketing und der Markenführung",
    authors: ["Konrad Zerr", "Waldemar A. Pförtsch", "Steffen Heil"],
    publisher: "Interface Inc., Atlanta, Georgia USA",
    publishedDate: "2007"
  },
  {
    category: "Book Chapters",
    title: "E-LEARNING – Die Revolution des Lernens gewinnbringend einsetzen",
    authors: ["Waldemar Pförtsch"],
    publisher: "Klett-Cotta, Stuttgart",
    publishedDate: "2002"
  },

  // --- TRANSLATED BOOKS (26) ---
  {
    category: "Translations",
    title: "H2H Marketing (Brazilian Portuguese Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz", "Marcos Bendento"],
    publishedDate: "2024"
  },
  {
    category: "Translations",
    title: "H2H Marketing (Spanish Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publishedDate: "2024"
  },
  {
    category: "Translations",
    title: "H2H Marketing: Μάρκετινγκ από άνθρωπο σε άνθρωπο (Greek Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publisher: "Klidarithmos Publications",
    publishedDate: "2023"
  },
  {
    category: "Translations",
    title: "H2H Marketing (Vietnamese Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publisher: "Hanoi Publishing Company",
    publishedDate: "2023"
  },
  {
    category: "Translations",
    title: "H2H 营销开创人本营销新纪元 (Chinese Version of H2H Marketing)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publisher: "Shanghai Century Publishing Company Ltd.",
    publishedDate: "December 12, 2023"
  },
  {
    category: "Translations",
    title: "H2H-Marketing (Persian Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publishedDate: "2022"
  },
  {
    category: "Translations",
    title: "H2H-Marketing – von Menschen für Menschen (German Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publisher: "Gabler Verlag",
    publishedDate: "2022"
  },
  {
    category: "Translations",
    title: "H2H Marketing: Dall’orientamento al cliente all’orientamento all’essere umano (Italian Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz", "Fabio Ancarani"],
    publisher: "Piccin Nuova Libraria S.P.A.",
    publishedDate: "2022"
  },
  {
    category: "Translations",
    title: "H2Hマーケティング-人から人へのマーケティングの起源 (Japanese Version of H2H Marketing)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch", "Uwe Sponholz"],
    publisher: "Hakuto Shobo, Tokyo",
    publishedDate: "2021"
  },
  {
    category: "Translations",
    title: "コトラーのＢ２Ｂブランド・マネジメント (Japanese Version of B2B Brand Management)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Hakuto Shobo, Tokyo",
    publishedDate: "2020",
    pages: 332
  },
  {
    category: "Translations",
    title: "コトラーのイノベーション・ブランド戦略 (Japanese Version of Ingredient Branding)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Hakuto Shobo, Tokyo",
    publishedDate: "2014",
    pages: 384
  },
  {
    category: "Translations",
    title: "Ingredient Branding: rendere visibile l'invisibile (Italian Version of Ingredient Branding)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Tecniche Nuove, Milano",
    publishedDate: "2013",
    pages: 355
  },
  {
    category: "Translations",
    title: "B2B Brand Management (Greek Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Malliaris Paedia S.A., Athens",
    publishedDate: "2012",
    pages: 329
  },
  {
    category: "Translations",
    title: "Ingredient Branding: Making the Invisible Visible (Chinese Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Fudan University Press, Shanghai",
    publishedDate: "2010",
    pages: 355
  },
  {
    category: "Translations",
    title: "B2B Brand Management (Persian Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Tehran, Persia",
    publishedDate: "2010"
  },
  {
    category: "Translations",
    title: "B2B Marka Yönetimi: Firmadan Firmaya Satışta B2B Marka Nasıl Yaratılır? (Turkish Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "MediaCat Kitapları, İstanbul",
    publishedDate: "2010",
    pages: 402
  },
  {
    category: "Translations",
    title: "B2B Brand Management (Taiwanese Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Bao Ding Publisher, Taipei",
    publishedDate: "2008",
    pages: 329
  },
  {
    category: "Translations",
    title: "B2B Brand Management (Chinese Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Trust and Wisdom Enterprises, Shanghai",
    publishedDate: "2008",
    pages: 356
  },
  {
    category: "Translations",
    title: "B2B Brand Management: Dengan Branding membangun keunggulan dan Memenangi Kompetisi (Indonesian Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Gramedia, Jakarta",
    publishedDate: "2008",
    pages: 381
  },
  {
    category: "Translations",
    title: "B2B Brand Management: Gestión de marcas para productos industriales (Spanish Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Grupo Editorial Patria, Mexico",
    publishedDate: "2008",
    pages: 347
  },
  {
    category: "Translations",
    title: "B2B Brand Management (Korean Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Korea Price Information Corporation, Seoul",
    publishedDate: "2007",
    pages: 497
  },
  {
    category: "Translations",
    title: "Бренд-менеджмент в B2B-сфере (Russian Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Versinabooks, Moscow",
    publishedDate: "2007",
    pages: 455
  },
  {
    category: "Translations",
    title: "Gestão de marcas em mercados B2B (Brazilian Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Bookman, São Paulo",
    publishedDate: "2007",
    pages: 338
  },
  {
    category: "Translations",
    title: "La gestione del brand nel B2B – Marca e immagine nel marketing industriale (Italian Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Tecniche Nuove, Milano",
    publishedDate: "2008",
    pages: 335
  },
  {
    category: "Translations",
    title: "Zarządzanie marką w segmencie B2B (Polish Version)",
    authors: ["Philip Kotler", "Waldemar Pfoertsch"],
    publisher: "Wydawnictwo Naukowe PWN, Warszawa",
    publishedDate: "2008",
    pages: 267
  },
  {
    category: "Translations",
    title: "B2B brend menadžment (Serbian Version)",
    authors: ["Philip Kotler", "Valdemar Ferc (Pfoertsch)"],
    publisher: "Asee Books, Belgrade",
    publishedDate: "2008",
    pages: 252
  }
];

/* =========================================
   LINK OVERRIDES FOR SPECIFIC TITLES
========================================= */
const BOOK_LINK_OVERRIDES = {
  "b2bbrandmanagement": {
    officialWebsite: "https://b2bbrandmanagement.com/",
  },
  "h2hmarketing": {
    officialWebsite: "https://h2hbranding.com/",
  }
};

/* =========================================
   CLEAN TITLE FOR GROUPING & MATCHING
========================================= */
function getBaseTitle(title) {
  return title
    .toLowerCase()
    .replace(/:\s*a\s*.*?$/i, "")
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

/* =========================================
   GOOGLE BOOKS API
========================================= */
async function fetchGoogleBooks() {
  const queries = ["Waldemar Pfoertsch", "Waldemar Pförtsch"];
  const results = [];

  for (const query of queries) {
    try {
      const url = `${GOOGLE_BOOKS_API}?q=${encodeURIComponent(query)}&maxResults=40&startIndex=0`;
      const response = await fetch(url);

      if (!response.ok) {
        console.warn(`Google Books API error status: ${response.status}`);
        continue;
      }

      const data = await response.json();
      if (data.items) {
        results.push(...data.items);
      }
    } catch (err) {
      console.error("Google Books fetch failed:", err);
    }
  }

  return results;
}

/* =========================================
   OPEN LIBRARY API
========================================= */
async function fetchOpenLibrary() {
  const queries = ["Waldemar Pfoertsch", "Waldemar Pförtsch"];
  const results = [];

  for (const query of queries) {
    try {
      const url = `${OPEN_LIBRARY_API}?q=${encodeURIComponent(query)}&limit=100`;
      const response = await fetch(url);

      if (!response.ok) {
        console.warn(`Open Library API error status: ${response.status}`);
        continue;
      }

      const data = await response.json();
      if (data.docs) {
        results.push(...data.docs);
      }
    } catch (err) {
      console.error("Open Library fetch failed:", err);
    }
  }

  return results;
}

/* =========================================
   NORMALIZE GOOGLE BOOKS
========================================= */
function normalizeGoogleBook(book) {
  const info = book.volumeInfo || {};

  return {
    source: "Google Books",
    title: info.title || "Unknown Title",
    authors: info.authors || [],
    publisher: info.publisher || "",
    publishedDate: info.publishedDate || "",
    description: info.description || "",
    isbn: info.industryIdentifiers?.map((item) => item.identifier) || [],
    pageCount: info.pageCount || null,
    language: info.language || "",
    categories: info.categories || [],
    image: info.imageLinks?.thumbnail || info.imageLinks?.smallThumbnail || "",
    previewUrl: info.previewLink || "",
    infoUrl: info.infoLink || "",
    edition: "",
    format: "",
  };
}

/* =========================================
   NORMALIZE OPEN LIBRARY
========================================= */
function normalizeOpenLibrary(book) {
  return {
    source: "Open Library",
    title: book.title || "Unknown Title",
    authors: book.author_name || [],
    publisher: book.publisher?.[0] || "",
    publishedDate: book.first_publish_year ? String(book.first_publish_year) : "",
    description: "",
    isbn: book.isbn || [],
    pageCount: book.number_of_pages_median || null,
    language: book.language || [],
    categories: book.subject || [],
    image: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : "",
    previewUrl: book.key ? `https://openlibrary.org${book.key}` : "",
    infoUrl: book.key ? `https://openlibrary.org${book.key}` : "",
    edition: "",
    format: "",
  };
}

/* =========================================
   CHECK PFORTSCH AUTHOR
========================================= */
function isPfoertschBook(book) {
  if (!book.authors || !Array.isArray(book.authors)) return false;

  const authors = book.authors.join(" ").toLowerCase();
  return (
    authors.includes("waldemar pfoertsch") ||
    authors.includes("waldemar pförtsch") ||
    authors.includes("pfoertsch")
  );
}

/* =========================================
   FETCH ALL BOOKS (MERGED & GROUPED)
========================================= */
export async function fetchPfoertschBooks() {
  const results = await Promise.allSettled([
    fetchGoogleBooks(),
    fetchOpenLibrary(),
  ]);

  const googleBooks = results[0].status === "fulfilled" ? results[0].value : [];
  const openLibraryBooks = results[1].status === "fulfilled" ? results[1].value : [];

  const rawBooks = [
    ...googleBooks.map(normalizeGoogleBook),
    ...openLibraryBooks.map(normalizeOpenLibrary),
  ].filter(isPfoertschBook);

  const groupedMap = new Map();

  // 1. Load static collection items first
  pfoertschBooksData.forEach((item) => {
    const key = getBaseTitle(item.title);
    groupedMap.set(key, {
      ...item,
      source: item.source || "Static Collection",
      editions: item.editions || [
        {
          publishedDate: item.publishedDate,
          publisher: item.publisher || item.category || "Standard Edition",
          infoUrl: item.infoUrl || item.officialWebsite || "",
        },
      ],
    });
  });

  // 2. Group and merge dynamic API results
  for (const book of rawBooks) {
    const key = getBaseTitle(book.title);
    const override = BOOK_LINK_OVERRIDES[key] || {};

    if (!groupedMap.has(key)) {
      groupedMap.set(key, {
        ...book,
        officialWebsite: override.officialWebsite || null,
        editions: [book],
      });
    } else {
      const existing = groupedMap.get(key);

      if (override.officialWebsite) {
        existing.officialWebsite = override.officialWebsite;
      }

      // Avoid adding duplicate edition links
      const isDuplicate = existing.editions.some(
        (e) =>
          (e.isbn && e.isbn[0] && book.isbn && e.isbn[0] === book.isbn[0]) ||
          (e.infoUrl && e.infoUrl === book.infoUrl)
      );

      if (!isDuplicate) {
        existing.editions.push(book);
      }

      // Fill cover image if missing
      if (!existing.image && book.image) {
        existing.image = book.image;
      }
    }
  }

  return Array.from(groupedMap.values());
}