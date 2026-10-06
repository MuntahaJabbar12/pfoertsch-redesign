import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import h2hMarketingCover from "../assets/books/h2h-marketing.png";
import "./Books.css";

function Books() {
  const { t } = useLanguage();

  const [filter, setFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    // =========================================================
    // BOOKS PUBLISHED
    // =========================================================

    
    {
      type: "published",
      year: 2024,
      authors:
        "Kotler, Philip; Pfoertsch, Waldemar; Ureta, Ivan; Ancarani, Fabio",
      title:
        "Humanism in Marketing: Responsible Leadership and the Human-to-Human Approach",
      publisher: "Palgrave",
      date: "November 2024",
      amazon:
        "https://www.amazon.com/dp/B0CW1JWBVP?lv=shuf&channelId=500&plpRedirect=mhFallback",
    },

    {
      type: "published",
      year: 2024,
      authors:
        "Kotler, Philip; Pfoertsch, Waldemar; Sponholz, Uwe; Sulaj, Kejsi",
      title:
        "An Instructor's Manual to H2H Marketing Case Studies: Teach Human-to-Human Marketing Effectively",
      publisher: "Springer",
      date: "January 2024",
      pages: "181",
      amazon:
        "https://www.amazon.com/Instructors-Manual-Marketing-Studies-Human-ebook/dp/B0CPKVH3JX/ref=sr_1_1?crid=ZZW6NFT0SJNT&dib=eyJ2IjoiMSJ9.ef3721eMBYi5lN2JqNZoEYOKGFcdtLToQ5EkDjQV-_PGjHj071QN20LucGBJIEps.Mdkbs7aq6HGG2Rv7Z0oCab5pnkoQ4RBv2ericfxVc6k&dib_tag=se&keywords=An+Instructor%27s+Manual+to+H2H+Marketing+Case+Studies%3A+Teach+Human-to-Human+Marketing+Effectively&nsdOptOutParam=true&qid=1789304024&s=digital-text&sprefix=%2Cdigital-text%2C331&sr=1-1",
    },

    {
      type: "published",
      year: 2023,
      authors: "Kotler, Philip; Pfoertsch, Waldemar",
      title:
        "H2H Marketing: New Case Studies on Human-to-Human Marketing",
      publisher: "Springer",
      date: "Forthcoming 2023",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Human-Human-Springer-ebook/dp/B0BY67NN3J/ref=sr_1_1?crid=22DKENR663234&dib=eyJ2IjoiMSJ9.jg-9nnYMhmE_gt_j_KoeWsC9WtBxViRzS9IuQUjq5Lsip20QFFo4Y_J6A6e3dVAI5Zj4wUL1Nl852dMuiKAG3g.ZQsD1kS7Yo_96YmaBMoBXK7NB5juRjKisW2Obc0nC-c&dib_tag=se&keywords=H2H+Marketing%3A+New+Case+Studies+on+Human-to-Human+Marketing&nsdOptOutParam=true&qid=1789304064&s=digital-text&sprefix=H2H+Marketing%3A+New+Case+Studies+on+Human-to-Human+Marketing%2Cdigital-text%2C323&sr=1-1",
    },

    {
      type: "published",
      year: 2023,
      authors:
        "Kotler, Philip; Pfoertsch, Waldemar; Sponholz, Uwe; Haas, Max",
      title:
        "H2H Marketing: Case Studies on Human-to-Human Marketing",
      publisher: "Springer",
      date: "June 2023",
      pages: "213",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Human-Human-Springer-ebook/dp/B0BY67NN3J/ref=sr_1_1?crid=22DKENR663234&dib=eyJ2IjoiMSJ9.jg-9nnYMhmE_gt_j_KoeWsC9WtBxViRzS9IuQUjq5Lsip20QFFo4Y_J6A6e3dVAI5Zj4wUL1Nl852dMuiKAG3g.ZQsD1kS7Yo_96YmaBMoBXK7NB5juRjKisW2Obc0nC-c&dib_tag=se&keywords=H2H+Marketing%3A+Case+Studies+on+Human-to-Human+Marketing&nsdOptOutParam=true&qid=1789304064&s=digital-text&sprefix=H2H+Marketing%3A+Case+Studies+on+Human-to-Human+Marketing%2Cdigital-text%2C323&sr=1-1",
    },

    {
      type: "published",
      year: 2022,
      authors:
        "Kotler, Philip; Pfoertsch, Waldemar; Sponholz, Uwe",
      title:
        "H2H-Marketing – von Menschen für Menschen: Marketing mit mehr Verantwortung und Nachhaltigkeit – Konzeption und Umsetzung",
      publisher: "Gabler",
      date: "June 2022",
      pages: "262",
      amazon:
        "https://www.amazon.com/H2H-Marketing-Marketing-Verantwortung-Nachhaltigkeit-Konzeption-ebook/dp/B0DGLZ7NJZ/ref=sr_1_1?crid=3GXEVSCTSIRFU&dib=eyJ2IjoiMSJ9.vI0_8oc6e7G1zCWXt4P8YbnT59JTDSiCkwFRofjCoqHGjHj071QN20LucGBJIEps.WtDT3qnD5mXmg5vMiGgBMsNyQLIL-useSprkxgsnMOE&dib_tag=se&keywords=H2H-Marketing+%E2%80%93+von+Menschen+f%C3%BCr+Menschen%3A+Marketing+mit+mehr+Verantwortung+und+Nachhaltigkeit+%E2%80%93+Konzeption+und+Umsetzung&nsdOptOutParam=true&qid=1789304144&s=digital-text&sprefix=h2h-marketing+von+menschen+f%C3%BCr+menschen+marketing+mit+mehr+verantwortung+und+nachhaltigkeit+konzeption+und+umsetzung%2Cdigital-text%2C335&sr=1-1",
    },

    {
      type: "published",
      year: 2022,
      authors:
        "Waldemar A. Pförtsch; Adam-Alexander Manowicz; Michael W. Preikschas",
      title: "Business-to-Business Marketing",
      publisher: "Kiehl",
      date: "2022",
      pages: "274",
    },

    {
      type: "published",
      year: 2021,
      authors: "Kotler; Pfoertsch; Sponholz",
      title:
        "H2H Marketing: The Genesis of Human-to-Human Marketing",
      publisher: "Springer",
      date: "January 2021",
      pages: "267",
      amazon: "https://www.springer.com/book/9783030595302",
    },

    {
      type: "published",
      year: 2019,
      authors: "Pfoertsch; Sponholz",
      title: "Das neue Marketing-Mindset",
      publisher: "Gabler-Springer",
      date: "July 2019",
      pages: "586",
    },

    {
      type: "published",
      year: 2018,
      authors: "Pfoertsch (Ed.)",
      title: "Working Abroad – Country Metaphors",
      publisher: "WAP Books",
      date: "February 2018",
      pages: "108",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title: "Working Abroad – Country Perspective",
      publisher: "WAP Books",
      date: "November 2017",
      pages: "241",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title: "Aspects of Digital B2B Marketing",
      publisher: "WAP Books",
      date: "October 2017",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title: "Working Abroad – Case Study Collection",
      publisher: "WAP Books",
      date: "October 2017",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch",
      title: "China Time Honored Brands",
      publisher: "WAP Books",
      date: "September 2017",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title: "Basics in Finance for International Marketers",
      publisher: "WAP Books",
      date: "September 2017",
    },

    {
      type: "published",
      year: 2017,
      authors: "Pfoertsch (Ed.)",
      title:
        "Working Abroad: How to understand foreign markets and do business around the globe",
      publisher: "WAP Books",
      date: "July 2017",
    },

    {
      type: "published",
      year: 2015,
      authors: "Kotler; Dingena; Pfoertsch",
      title:
        "Transformational Sales: Making a Difference with Strategic Customers",
      publisher: "Springer",
      date: "September 2015",
    },

    {
      type: "published",
      year: 2015,
      authors: "Pfoertsch; Schaefer",
      title: "B2B Brand Portfolio Strategy",
      publisher: "Saarbruecken",
      date: "July 2015",
    },

    {
      type: "published",
      year: 2015,
      authors: "Pfoertsch (Ed.); Johnson; Kohrs",
      title: "UPBRANDING",
      publisher: "Kindle Edition, Luxembourg",
      date: "June 2015",
    },

    {
      type: "published",
      year: 2013,
      authors:
        "Waldemar Pförtsch; Peter Godefroid",
      title: "Business-to-Business-Marketing",
      publisher: "Herne",
      date: "2013",
      pages: "460",
      edition: "5th revised edition",
    },

    {
      type: "published",
      year: 2011,
      authors:
        "Katherine Xin; Arthur Yeung; Waldemar Pfoertsch; Shengjun Liu",
      title: "The Globalization of Chinese Companies",
      publisher: "Wiley, Singapore",
      date: "March 2011",
      pages: "224",
    },

    {
      type: "published",
      year: 2010,
      authors:
        "Pfoertsch; Giglierano; Vitale",
      title:
        "Business to Business Marketing – Analysis and Practice",
      publisher: "Prentice Hall",
      date: "2010",
      pages: "450",
    },

    {
      type: "published",
      year: 2010,
      authors: "Kotler; Pfoertsch",
      title:
        "Ingredient Branding: Making the Invisible Visible",
      publisher: "Springer",
      date: "2010",
      pages: "408",
    },

    {
      type: "published",
      year: 2009,
      authors:
        "Waldemar Pfoertsch; Ines Michi",
      title: "The Big Book of Real Business",
      publisher: "Lulu",
      date: "2009",
      pages: "140",
    },

    {
      type: "published",
      year: 2009,
      authors:
        "Waldemar Pförtsch; Peter Godefroid",
      title: "Business-to-Business-Marketing",
      publisher: "Herne",
      date: "2009",
      pages: "430",
      edition: "4th edition",
    },

    {
      type: "published",
      year: 2007,
      authors:
        "Waldemar A. Pförtsch; Rebekka Müller; Maddalena Sassanelli; Jeannine Klar",
      title:
        "Perspektiven des IT-Weiterbildungssystems in Deutschland",
      publisher: "BIBB",
      date: "2007",
      pages: "211",
    },

    {
      type: "published",
      year: 2006,
      authors:
        "Koziol; Pfoertsch; Heil",
      title: "Social Marketing",
      publisher: "Schäffer-Poeschel",
      date: "2006",
      pages: "172",
    },

  
    {
      type: "published",
      year: 2006,
      authors:
        "Pfoertsch; Mueller",
      title:
        "Marke in der Marke Macht und Bedeutung des Ingredient Branding",
      publisher: "Springer",
      date: "2006",
      pages: "204",
    },

    {
      type: "published",
      year: 2005,
      authors:
        "Pfoertsch; Schmid",
      title: "B2B Markenmanagement",
      publisher: "Vahlen",
      date: "2005",
      pages: "605",
    },

    {
      type: "published",
      year: 2004,
      authors:
        "Pfoertsch (Hrsg.)",
      title:
        "Symposium WOManagement Konferenzdokumentation",
      publisher: "Hochschule Pforzheim",
      date: "April 2004",
      pages: "455",
    },

    {
      type: "published",
      year: 2001,
      authors:
        "Hering; Pfoertsch; Wordelmann",
      title:
        "Internationalisierung des Mittelstandes",
      publisher: "Bertelsmann",
      date: "2001",
      pages: "135",
    },

    {
      type: "published",
      year: 2000,
      authors: "Pfoertsch",
      title: "Mit Strategie ins Internet",
      publisher: "BW-Verlag",
      date: "2000",
      pages: "145",
    },

    {
      type: "published",
      year: 2000,
      authors:
        "Pfoertsch (Ed.)",
      title: "Living Web",
      publisher: "Verlag Moderne Industrie",
      date: "1999/2000",
      pages: "344",
    },

    {
      type: "published",
      year: 1999,
      authors:
        "Pfoertsch (Ed.)",
      title: "Faszination Japan",
      publisher: "G.A. Ulmer Verlag",
      date: "1999",
    },

    {
      type: "published",
      year: 1998,
      authors:
        "Oetinger; Pfoertsch (Ed.)",
      title:
        "Strategien für die neue Weltwirtschaft",
      publisher: "Carl Hanser Verlag",
      date: "1998",
    },

    {
      type: "published",
      year: 1992,
      authors: "Pfoertsch",
      title:
        "Tends in Globalization and Relocation Requirements",
      publisher: "Arthur Andersen, Stuttgart",
      date: "June 1992",
    },

    {
      type: "published",
      year: 1981,
      authors: "Pfoertsch",
      title: "Universitärer Technologie-Transfer",
      publisher: "Verlag der Olivenbaum, Berlin",
      date: "1981",
      edition: "Dissertation",
    },

    {
      type: "published",
      year: 1978,
      authors: "Pfoertsch",
      title:
        "Angepasste Technologien: Modular manufacturing systems for industrial flexibility",
      publisher:
        "Hannover Messe Exhibition Presentation",
      date: "1978",
      edition:
        "Exhibition presentation / brochure",
    },

    {
      type: "published",
      year: 1978,
      authors: "Pfoertsch",
      title:
        "Technical Report on Integrated Planning and Transport Systems",
      publisher: "TU Berlin – IPAT",
      date: "1978",
      edition: "IPAT Technical Report",
    },

    // =========================================================
    // CHAPTERS IN BOOKS
    // =========================================================

    {
      type: "chapters",
      year: 2025,
      authors: "Pfoertsch",
      title: "Vorwort",
      publisher: "Business Model Flowchart",
      date: "2025",
    },

    {
      type: "chapters",
      year: 2024,
      authors:
        "Theodore Panayotou; Waldemar Pfoertsch",
      title:
        "Implications of Humanistic Marketing",
      publisher: "Palgrave",
      date: "October 25, 2024",
      doi:
        "https://doi.org/10.1007/978-3-031-67155-5_9",
    },

    {
      type: "chapters",
      year: 2024,
      authors:
        "Philip Kotler; Waldemar Pfoertsch; Fabio Ancarani; Ivan Ureta",
      title: "Introduction",
      publisher: "Palgrave",
      date: "October 25, 2024",
      doi:
        "https://doi.org/10.1007/978-3-031-67155-5_1",
    },

    {
      type: "chapters",
      year: 2024,
      authors:
        "Waldemar Pfoertsch",
      title:
        "The Genesis of Human-to-Human Marketing",
      publisher: "Palgrave",
      date: "October 25, 2024",
      doi:
        "https://doi.org/10.1007/978-3-031-67155-5_6",
    },

    {
      type: "chapters",
      year: 2023,
      authors:
        "Kotler; Pfoertsch; Sponholz; Haas",
      title:
        "The New Paradigm: H2H Marketing",
      publisher: "Springer",
      date: "2023",
      doi:
        "https://doi.org/10.1007/978-3-031-22393-8_1",
    },

    {
      type: "chapters",
      year: 2023,
      authors:
        "H2H Marketing",
      title:
        "H2H Mindset in H2H Marketing",
      publisher: "Springer",
      date: "2023",
      doi:
        "https://doi.org/10.1007/978-3-031-22393-8_4",
    },

    {
      type: "chapters",
      year: 2023,
      authors:
        "H2H Marketing",
      title:
        "H2H Brand Management and Trust",
      publisher: "Springer",
      date: "2023",
      doi:
        "https://doi.org/10.1007/978-3-031-22393-8_6",
    },

    {
      type: "chapters",
      year: 2023,
      authors:
        "H2H Marketing",
      title:
        "Rethinking Operative Marketing: The H2H Process",
      publisher: "Springer",
      date: "2023",
      doi:
        "https://doi.org/10.1007/978-3-031-22393-8_8",
    },

    {
      type: "chapters",
      year: 2023,
      authors:
        "H2H Marketing",
      title:
        "Establishing Resonance Between Companies, People, and the Environment",
      publisher: "Springer",
      date: "2023",
      doi:
        "https://doi.org/10.1007/978-3-031-22393-8_11",
    },

    {
      type: "chapters",
      year: 2021,
      authors:
        "Waldemar Pfoertsch",
      title:
        "The Genesis of H2H Marketing",
      publisher:
        "Kotler Impact – Big Bang Marketing",
      date: "2021",
    },

    {
      type: "chapters",
      year: 2018,
      authors:
        "Martin Gannon; Waldemar Pfoertsch",
      title:
        "German Symphony Metaphor",
      publisher: "SAGE",
      date: "2018",
    },

    {
      type: "chapters",
      year: 2013,
      authors:
        "Waldemar Pfoertsch; Yipeng Liu",
      title:
        "Chinese Jobs in Germany",
      publisher:
        "Hochschule Pforzheim",
      date: "2013",
    },

    {
      type: "chapters",
      year: 2009,
      authors:
        "Waldemar Pfoertsch; Christian Linder",
      title:
        "Erfolgsmessung von Ingredient Branding",
      publisher: "2009",
      date: "2009",
    },

    {
      type: "chapters",
      year: 2009,
      authors:
        "Waldemar Pförtsch",
      title:
        "Ingredient Branding im chinesischen Automobilmarkt",
      publisher: "2009",
      date: "2009",
    },

    {
      type: "chapters",
      year: 2008,
      authors:
        "Pfoertsch; Linder; Chandler",
      title:
        "Measuring the value of Ingredient Brand equity at multiple stages in the supply chain",
      publisher: "2008",
      date: "2008",
      pages: "571–594",
    },

    {
      type: "chapters",
      year: 2007,
      authors:
        "Konrad Zerr; Waldemar A. Pförtsch; Steffen Heil",
      title:
        "Die Zukunft des Marketings",
      publisher: "2007",
      date: "2007",
    },

    {
      type: "chapters",
      year: 2002,
      authors:
        "Waldemar Pförtsch",
      title:
        "E-LEARNING – Die Revolution des Lernens gewinnbringend einsetzen",
      publisher: "2002",
      date: "2002",
    },

    // =========================================================
    // TRANSLATED BOOKS
    // =========================================================

    {
      type: "translated",
      year: 2024,
      authors:
        "Kotler; Pfoertsch; Sponholz; Bendento",
      title: "H2H Marketing",
      publisher:
        "Brazilian Portuguese Edition",
      date: "2024",
      language: "Portuguese",
    },

    {
      type: "translated",
      year: 2024,
      authors:
        "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher:
        "Spanish Edition",
      date: "2024",
      language: "Spanish",
    },

    {
      type: "translated",
      year: 2023,
      authors:
        "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher: "Klidarithmos",
      date: "2023",
      language: "Greek",
    },

    {
      type: "translated",
      year: 2023,
      authors:
        "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher: "Hanoi Publishing",
      date: "2023",
      language: "Vietnamese",
    },

    {
      type: "translated",
      year: 2023,
      authors:
        "Kotler; Pfoertsch; Sponholz",
      title:
        "H2H 营销 开创人本营销新纪元",
      publisher:
        "Shanghai Century Publishing",
      date: "December 12, 2023",
      language: "Chinese",
    },

    {
      type: "translated",
      year: 2023,
      authors:
        "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher:
        "Persian Edition",
      date: "2023",
      language: "Persian",
    },

    {
      type: "translated",
      year: 2022,
      authors:
        "Kotler; Pfoertsch; Sponholz",
      title:
        "H2H Marketing – von Menschen für Menschen",
      publisher: "Gabler",
      date: "2022",
      language: "German",
    },

    {
      type: "translated",
      year: 2022,
      authors:
        "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher:
        "Piccin Nuova Libaria S.P.A.",
      date: "2022",
      language: "Italian",
    },

    {
      type: "translated",
      year: 2021,
      authors:
        "Kotler; Pfoertsch; Sponholz",
      title: "H2H Marketing",
      publisher:
        "白桃書房, Tokyo",
      date: "2021",
      language: "Japanese",
    },

    {
      type: "translated",
      year: 2020,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "白桃書房, Tokyo",
      date: "2020",
      pages: "332",
      language: "Japanese",
    },

    {
      type: "translated",
      year: 2014,
      authors:
        "Kotler; Pfoertsch",
      title:
        "Ingredient Branding",
      publisher:
        "白桃書房, Tokyo",
      date: "2014",
      pages: "384",
      language: "Japanese",
    },

    {
      type: "translated",
      year: 2013,
      authors:
        "Kotler; Pfoertsch",
      title:
        "Ingredient Branding",
      publisher:
        "Tecniche nuove, Milano",
      date: "2013",
      pages: "355",
      language: "Italian",
    },

    {
      type: "translated",
      year: 2012,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Malliaris Paedia, Athens",
      date: "2012",
      pages: "329",
      language: "Greek",
    },

    {
      type: "translated",
      year: 2010,
      authors:
        "Kotler; Pfoertsch",
      title:
        "Ingredient Branding",
      publisher:
        "Fudan University Press, Shanghai",
      date: "2010",
      pages: "355",
      language: "Chinese",
    },

    {
      type: "translated",
      year: 2010,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Persian Edition",
      date: "2010",
      language: "Persian",
    },

    {
      type: "translated",
      year: 2010,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Marka Yönetimi",
      publisher:
        "MediaCat, Istanbul",
      date: "2010",
      pages: "402",
      language: "Turkish",
    },

    {
      type: "translated",
      year: 2008,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Bao Ding, Taipei",
      date: "2008",
      pages: "329",
      language: "Taiwanese",
    },

    {
      type: "translated",
      year: 2008,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Trust and Wisdom, Shanghai",
      date: "2008",
      pages: "356",
      language: "Chinese",
    },

    {
      type: "translated",
      year: 2008,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Gramedia, Jakarta",
      date: "2008",
      pages: "381",
      language: "Indonesian",
    },

    {
      type: "translated",
      year: 2008,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Grupo Editorial Patria, Mexico",
      date: "2008",
      pages: "347",
      language: "Spanish",
    },

    {
      type: "translated",
      year: 2008,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Tecniche nuove, Milano",
      date: "2008",
      pages: "335",
      language: "Italian",
    },

    {
      type: "translated",
      year: 2008,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Wydawnictwo Naukowe PWN, Warszawa",
      date: "2008",
      pages: "267",
      language: "Polish",
    },

    {
      type: "translated",
      year: 2008,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B brend menadzment",
      publisher:
        "Asee Books, Belgrad",
      date: "2008",
      pages: "252",
      language: "Serbian",
    },

    {
      type: "translated",
      year: 2007,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Korea Price Information Corp, Seoul",
      date: "2007",
      pages: "497",
      language: "Korean",
    },

    {
      type: "translated",
      year: 2007,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Versinabooks, Moscow",
      date: "2007",
      pages: "455",
      language: "Russian",
    },

    {
      type: "translated",
      year: 2007,
      authors:
        "Kotler; Pfoertsch",
      title:
        "B2B Brand Management",
      publisher:
        "Bookman, São Paulo",
      date: "2007",
      pages: "338",
      language: "Brazilian Portuguese",
    },
  ];
  // =========================================================
  // B2B BRAND MANAGEMENT COLLECTION
  // =========================================================

  const b2bBrandManagementLink = "https://b2bbrandmanagement.com/#";

  const b2bBooks = [
    {
      title: "B2B Brand Management",
    },
    {
      title: "The B2B Brand Management- Morocco edition",
    },
    {
      title: "The B2B Brand Management- China edition",
    },
    {
      title: "The B2B Brand Management- India edition",
    },
    {
      title: "The B2B Brand Management- Jordan edition",
    },
    {
      title: "The B2B Brand Management- Caribbean edition",
    },
    {
      title: "The B2B Brand Management- Bangladesh edition",
    },
    {
      title: "The B2B Brand Management- Switzerland edition",
    },
    {
      title: "The B2B Brand Management- Sri Lanka edition",
    },
    {
      title: "The B2B Brand Management- Portugal edition",
    },
    {
      title: "The B2B Brand Management- Phillipines edition",
    },
    {
      title: "The B2B Brand Management- Myanmar edition",
    },
    {
      title: "The B2B Brand Management- Egypt edition",
    },
    {
      title: "The B2B Brand Management- COUNTER NEXUS edition",
    },
    {
      title: "The B2B Brand Management- Brazil edition",
    },
    {
      title: "The B2B Brand Management- Tunisia edition",
    },
    {
      title: "The B2B Brand Management- Qatar edition",
    },
  ];
  // =========================================================
  // CATEGORY FILTERS
  // =========================================================

  const filters = [
    {
      id: "all",
      label: t("books_all_publications"),
    },
    {
      id: "published",
      label: t("books_published"),
    },
    {
      id: "chapters",
      label: t("books_chapters"),
    },
    {
      id: "translated",
      label: t("books_translated"),
    },
  ];

  // =========================================================
  // UNIQUE YEARS
  // =========================================================

  const years = [
    ...new Set(books.map((book) => book.year)),
  ].sort((a, b) => b - a);

  // =========================================================
  // SEARCH + FILTER
  // =========================================================

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      filter === "all" ||
      book.type === filter;

    const matchesYear =
      yearFilter === "all" ||
      book.year === Number(yearFilter);

    const search =
      searchTerm.toLowerCase().trim();

    const searchableText = [
      book.title,
      book.authors,
      book.publisher,
      book.date,
      book.year,
      book.language,
      book.edition,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      search === "" ||
      searchableText.includes(search);

    return (
      matchesCategory &&
      matchesYear &&
      matchesSearch
    );
  });

  // =========================================================
  // CLEAR FILTERS
  // =========================================================

  const clearFilters = () => {
    setFilter("all");
    setYearFilter("all");
    setSearchTerm("");
  };

  // =========================================================
  // BOOK TYPE LABEL
  // =========================================================

  const getBookType = (type) => {
    if (type === "published") {
      return t("books_book");
    }

    if (type === "chapters") {
      return t("books_chapter");
    }

    if (type === "translated") {
      return t("books_translation");
    }

    return t("books_publications");
  };

  // =========================================================
  // PURCHASE LINK
  // =========================================================

  const getPurchaseLink = (book) => {
    return book.buyLink || book.amazon || "";
  };

  return (
    <div className="books-page">

      <SEO
        title="Books"
        description="Explore books authored and co-authored by Prof. Waldemar Pfoertsch, including B2B Brand Management and Ingredient Branding, covering branding, marketing, and business strategy."
        path="/books"
      />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="books-hero">
        <div className="books-hero-content">

          <span className="books-eyebrow">
            {t("books_eyebrow")}
          </span>

          <h1>
            {t("books_headline")}
          </h1>

          <p>
            {t("books_intro")}
          </p>

        </div>
           </section>

      {/* =====================================================
          FEATURED / LATEST PUBLICATION
      ===================================================== */}

      <section className="latest-publication">
        <div className="latest-publication-inner">

          <div className="latest-publication-cover">
            <img src={h2hMarketingCover} alt="H2H Marketing: The Genesis of Human-to-Human Marketing book cover" />
          </div>

          <div className="latest-publication-content">

            <span className="latest-publication-eyebrow">
              {t("books_latest_eyebrow")}
            </span>

            <h2>{t("books_latest_title")}</h2>

            <p>{t("books_latest_desc")}</p>

            <div className="latest-publication-buttons">
              <a
                href="https://www.springer.com/book/9783030595302"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                <span>{t("books_latest_springer")}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href="https://www.amazon.com/stores/author/B00D71YZ6O"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                {t("books_latest_amazon")}
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          B2B BRAND MANAGEMENT COLLECTION
      ===================================================== */}

      <section className="b2b-section">

        <div className="b2b-header">

          <span className="section-label">
            B2B BRAND MANAGEMENT
          </span>

          <h2>
            B2B Brand Management Editions
          </h2>

          <p>
            Explore the B2B Brand Management collection and
            international editions.
          </p>

        </div>

        <div className="b2b-grid">

          {b2bBooks.map((book, index) => (

            <a
              key={index}
              href={b2bBrandManagementLink}
              target="_blank"
              rel="noopener noreferrer"
              className="b2b-card"
            >

              <div className="b2b-card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>
                {book.title}
              </h3>

              <span className="b2b-card-link">
                Visit B2B Brand Management →
              </span>

            </a>

          ))}

        </div>

      </section>

      {/* =====================================================
          PUBLICATIONS SECTION
      ===================================================== */}

      <section className="books-section">

        <div className="books-header">

          <div>
            <span className="section-label">
              {t("books_library")}
            </span>

            <h2>
              {t("books_publications")}
            </h2>
          </div>

          <div className="publication-count">
            {filteredBooks.length}{" "}
            {filteredBooks.length === 1
              ? t("books_publication")
              : t("books_publications_plural")}
          </div>

        </div>

        {/* ===================================================
            CATEGORY FILTERS
        =================================================== */}

        <div className="book-filters">

          {filters.map((item) => (
            <button
              key={item.id}
              className={`filter-btn ${
                filter === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setFilter(item.id)
              }
            >
              {item.label}
            </button>
          ))}

        </div>

        {/* ===================================================
            SEARCH + YEAR
        =================================================== */}

        <div className="books-controls">

          <div className="books-search">

     

            <input
              type="text"
              placeholder={t(
                "books_search_placeholder"
              )}
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
            />

            {searchTerm && (
              <button
                className="search-clear"
                onClick={() =>
                  setSearchTerm("")
                }
                aria-label="Clear search"
              >
                ×
              </button>
            )}

          </div>

          <div className="year-filter">

            <label htmlFor="yearFilter">
              {t("books_year")}
            </label>

            <select
              id="yearFilter"
              value={yearFilter}
              onChange={(e) =>
                setYearFilter(
                  e.target.value
                )
              }
            >

              <option value="all">
                {t("pub_all_years")}
              </option>

              {years.map((year) => (
                <option
                  key={year}
                  value={year}
                >
                  {year}
                </option>
              ))}

            </select>

          </div>

        </div>

        {/* ===================================================
            ACTIVE FILTERS
        =================================================== */}

        {(searchTerm ||
          yearFilter !== "all" ||
          filter !== "all") && (

          <div className="active-filters">

            <div className="active-filter-text">

              {t("books_showing")}{" "}

              <strong>
                {filteredBooks.length}
              </strong>{" "}

              {filteredBooks.length === 1
                ? t("books_publication")
                : t(
                    "books_publications_plural"
                  )}

              {searchTerm && (
                <>
                  {" "}
                  {t("books_for")}{" "}
                  <strong>
                    "{searchTerm}"
                  </strong>
                </>
              )}

            </div>

            <button
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              {t("books_clear_filters")}
            </button>

          </div>
        )}

        {/* ===================================================
            BOOK GRID
        =================================================== */}

        {filteredBooks.length > 0 ? (

          <div className="books-grid">

            {filteredBooks.map(
              (book, index) => {

                const purchaseLink =
                  getPurchaseLink(book);

                return (
                  <article
                    className="book-card"
                    key={`${book.title}-${book.year}-${index}`}
                  >

                    {/* CARD TOP */}

                    <div className="book-card-top">

                      <div className="book-type">
                        {getBookType(
                          book.type
                        )}
                      </div>

                      <div className="book-year">
                        {book.year}
                      </div>

                    </div>

                    {/* CARD BODY */}

                    <div className="book-card-body">

                      {/* LANGUAGE */}

                      {book.language && (
                        <div className="book-language">
                          {book.language}
                        </div>
                      )}

                      {/* TITLE */}

                      <h3>
                        {book.title}
                      </h3>

                      {/* AUTHORS */}

                      <p className="book-authors">
                        {book.authors}
                      </p>

                      {/* META */}

                      <div className="book-meta">

                        <div>
                          <span>
                            {t(
                              "books_publisher"
                            )}
                          </span>

                          <strong>
                            {book.publisher}
                          </strong>
                        </div>

                        <div>
                          <span>
                            {t("books_date")}
                          </span>

                          <strong>
                            {book.date}
                          </strong>
                        </div>

                        {book.pages && (
                          <div>
                            <span>
                              {t(
                                "books_pages"
                              )}
                            </span>

                            <strong>
                              {book.pages}
                            </strong>
                          </div>
                        )}

                      </div>

                      {/* EDITION */}

                      {book.edition && (
                        <div className="book-note">
                          {book.edition}
                        </div>
                      )}

                      {/* ACTION BUTTONS */}

                      {(purchaseLink ||
                        book.doi) && (

                        <div className="book-actions">

                          {purchaseLink && (
                            <a
                              href={
                                purchaseLink
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="book-btn primary"
                            >
                              {t(
                                "books_buy_now"
                              )}
                            </a>
                          )}

                          {book.doi && (
                            <a
                              href={book.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="book-btn secondary"
                            >
                              {t(
                                "books_view_doi"
                              )}
                            </a>
                          )}

                        </div>
                      )}

                    </div>

                  </article>
                );
              }
            )}

          </div>

        ) : (

          /* =================================================
             NO RESULTS
          ================================================= */

          <div className="no-results">

         

            <h3>
              {t("books_no_results")}
            </h3>

            <p>
              {t("books_no_results_text")}
            </p>

            <button
              className="clear-filters-btn"
              onClick={clearFilters}
            >
              {t("books_show_all")}
            </button>

          </div>

        )}

      </section>

      {/* =====================================================
          DIRECT ACCESS CTA
      ===================================================== */}

      <section className="books-cta">

        <div className="books-cta-content">

          <span className="section-label">
            {t("books_cta_eyebrow")}
          </span>

          <h2>
            {t("books_cta_title")}
          </h2>

          <p>
            {t("books_cta_text")}
          </p>

          <span className="books-cta-note">
            {t("books_cta_note")}
          </span>

        </div>

      </section>

    </div>
  );
}

export default Books;