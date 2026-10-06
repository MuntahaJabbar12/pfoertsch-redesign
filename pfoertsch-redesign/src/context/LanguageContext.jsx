/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

// Translation dictionary. Add new keys here as more pages are translated.
// Pattern: translations[key][languageCode]
export const translations = {
  // Navbar
  nav_home: { en: "Home", gr: "Αρχική" },
  nav_about: { en: "About", gr: "Σχετικά" },
  nav_expertise: { en: "Expertise", gr: "Τεχνογνωσία" },
  nav_publications: { en: "Publications", gr: "Δημοσιεύσεις" },
  nav_books: { en: "Books", gr: "Βιβλία" },
  nav_videos: { en: "Videos", gr: "Βίντεο" },
  nav_insights: { en: "Insights", gr: "Απόψεις" },
  nav_speaking: { en: "Speaking", gr: "Ομιλίες" },
  nav_contact: { en: "Contact", gr: "Επικοινωνία" },
  nav_appointment: { en: "Book an Appointment", gr: "Κλείστε Ραντεβού" },

  // Footer
  footer_tagline: {
    en: "Professor · Author · Researcher · Consultant",
    gr: "Καθηγητής · Συγγραφέας · Ερευνητής · Σύμβουλος",
  },
  footer_explore: { en: "Explore", gr: "Εξερεύνηση" },
  footer_discover: { en: "Discover", gr: "Ανακαλύψτε" },
  footer_rights: { en: "© 2026 Prof. Pfoertsch", gr: "© 2026 Καθ. Pfoertsch" },

  // Home hero
  home_eyebrow: {
    en: "PROFESSOR · AUTHOR · H2H MARKETING PIONEER",
    gr: "ΚΑΘΗΓΗΤΗΣ · ΣΥΓΓΡΑΦΕΑΣ · ΠΡΩΤΟΠΟΡΟΣ ΤΟΥ H2H MARKETING",
  },
  home_headline_1: { en: "Redefining marketing for a", gr: "Επαναπροσδιορίζοντας το μάρκετινγκ για έναν" },
  home_headline_2: { en: "brands,", gr: "μάρκες," },
  home_headline_3: { en: "human-centered world.", gr: "ανθρωποκεντρικό κόσμο." },
  home_intro: {
    en: "A global authority in Human-to-Human (H2H) marketing, branding, and strategic innovation — co-author with Philip Kotler of the groundbreaking H2H Marketing framework, bridging global strategy with authentic customer connection.",
    gr: "Παγκόσμια αυθεντία στο μάρκετινγκ Human-to-Human (H2H), στη διαχείριση επωνυμίας και τη στρατηγική καινοτομία — συν-συγγραφέας με τον Philip Kotler του πρωτοποριακού πλαισίου H2H Marketing, συνδέοντας την παγκόσμια στρατηγική με την αυθεντική σύνδεση με τον πελάτη.",
  },
  home_cta_expertise: { en: "Explore My Expertise", gr: "Δείτε την Τεχνογνωσία μου" },
  home_cta_appointment: { en: "Book an Appointment", gr: "Κλείστε Ραντεβού" },

  // Home stats strip
  home_stat_1_value: { en: "40+", gr: "40+" },
  home_stat_1_label: { en: "Books Authored", gr: "Βιβλία" },
  home_stat_2_value: { en: "7", gr: "7" },
  home_stat_2_label: { en: "Co-Authored with Philip Kotler", gr: "Με τον Philip Kotler" },
  home_stat_3_value: { en: "40+", gr: "40+" },
  home_stat_3_label: { en: "Years in Global Marketing", gr: "Χρόνια Εμπειρίας" },
  home_stat_4_value: { en: "3", gr: "3" },
  home_stat_4_label: { en: "Continents Taught On", gr: "Ήπειροι Διδασκαλίας" },

  home_banner_eyebrow: {
    en: "ACADEMIC · BUSINESS · THOUGHT LEADERSHIP",
    gr: "ΑΚΑΔΗΜΑΪΚΟΣ · ΕΠΙΧΕΙΡΗΣΕΙΣ · ΗΓΕΣΙΑ ΣΚΕΨΗΣ",
  },
  home_banner_title: {
    en: "Bridging global strategy with authentic connection.",
    gr: "Συνδέοντας την παγκόσμια στρατηγική με την αυθεντική σύνδεση.",
  },
  home_banner_text: {
    en: "Currently a full professor at CIIM Business School, University of Limassol, Dr. Pfoertsch earned his doctorate from the Free University of Berlin. His research has guided global firms including Mercedes-Benz, HP, and IBM toward sustainable growth and more meaningful customer connections.",
    gr: "Σήμερα καθηγητής στο CIIM Business School, Πανεπιστήμιο Λεμεσού, ο Δρ. Pfoertsch έλαβε το διδακτορικό του από το Ελεύθερο Πανεπιστήμιο του Βερολίνου. Η έρευνά του έχει καθοδηγήσει παγκόσμιες εταιρείες όπως η Mercedes-Benz, η HP και η IBM προς βιώσιμη ανάπτυξη.",
  },

  // Home institutions marquee
  home_institutions_label: { en: "TAUGHT AT LEADING INSTITUTIONS WORLDWIDE", gr: "ΔΙΔΑΞΕ ΣΕ ΚΟΡΥΦΑΙΑ ΠΑΝΕΠΙΣΤΗΜΙΑ ΠΑΓΚΟΣΜΙΩΣ" },

  home_expertise_eyebrow: { en: "AREAS OF EXPERTISE", gr: "ΤΟΜΕΙΣ ΤΕΧΝΟΓΝΩΣΙΑΣ" },
  home_expertise_title: { en: "Explore the work", gr: "Εξερευνήστε το έργο" },
  home_explore: { en: "Explore", gr: "Εξερεύνηση" },
  home_discuss_project: { en: "Discuss a Project", gr: "Συζητήστε ένα Έργο" },

  branding_title: { en: "Branding", gr: "Διαχείριση Επωνυμίας" },
  branding_desc: {
    en: "Strategic brand management, narrative architecture, and brand development.",
    gr: "Στρατηγική διαχείριση επωνυμίας, αρχιτεκτονική αφήγησης και ανάπτυξη επωνυμίας.",
  },
  marketing_title: { en: "Marketing", gr: "Μάρκετινγκ" },
  marketing_desc: {
    en: "Contemporary marketing strategy, digital positioning, and consumer insights.",
    gr: "Σύγχρονη στρατηγική μάρκετινγκ, ψηφιακή τοποθέτηση και κατανόηση καταναλωτών.",
  },
  innovation_title: { en: "Innovation", gr: "Καινοτομία" },
  innovation_desc: {
    en: "Technology integration, ecosystem creation, and digital transformation.",
    gr: "Ενσωμάτωση τεχνολογίας, δημιουργία οικοσυστήματος και ψηφιακός μετασχηματισμός.",
  },
  consulting_title: { en: "Consulting", gr: "Συμβουλευτική" },
  consulting_desc: {
    en: "High-impact strategic advisory and corporate executive consulting.",
    gr: "Στρατηγική συμβουλευτική υψηλού αντίκτυπου για στελέχη επιχειρήσεων.",
  },

  home_books_eyebrow: { en: "BOOKS & PUBLICATIONS", gr: "ΒΙΒΛΙΑ & ΔΗΜΟΣΙΕΥΣΕΙΣ" },
  home_books_title: { en: "Knowledge that becomes impact.", gr: "Γνώση που γίνεται αντίκτυπος." },
  home_books_footer: {
    en: "Explore books and publications by Waldemar Pfoertsch.",
    gr: "Εξερευνήστε βιβλία και δημοσιεύσεις του Waldemar Pfoertsch.",
  },
  home_view_all_books: { en: "View All Books", gr: "Δείτε Όλα τα Βιβλία" },
  home_view_book: { en: "View Book", gr: "Δείτε το Βιβλίο" },

  home_banner2_eyebrow: { en: "LET'S CONNECT", gr: "ΑΣ ΕΠΙΚΟΙΝΩΝΗΣΟΥΜΕ" },
  home_banner2_title: {
    en: "Have an idea, project or opportunity?",
    gr: "Έχετε μια ιδέα, έργο ή ευκαιρία;",
  },

  // Home — "What I Help With" list (Briffa-style scannable list)
  home_help_eyebrow: { en: "HOW I CAN HELP", gr: "ΠΩΣ ΜΠΟΡΩ ΝΑ ΒΟΗΘΗΣΩ" },
  home_help_title: { en: "Ways to work together", gr: "Τρόποι συνεργασίας" },
  home_help_item1: { en: "Advise on B2B brand strategy and positioning", gr: "Συμβουλευτική σε στρατηγική και τοποθέτηση επωνυμίας B2B" },
  home_help_item2: { en: "Guide organizations through Human-to-Human (H2H) marketing adoption", gr: "Καθοδήγηση οργανισμών στην υιοθέτηση μάρκετινγκ Human-to-Human (H2H)" },
  home_help_item3: { en: "Deliver keynote talks and executive workshops", gr: "Κεντρικές ομιλίες και εργαστήρια στελεχών" },
  home_help_item4: { en: "Publish and co-author research with global thought leaders", gr: "Δημοσίευση και συγγραφή έρευνας με παγκόσμιους ηγέτες σκέψης" },
  home_help_item5: { en: "Consult on digital transformation and innovation strategy", gr: "Συμβουλευτική σε ψηφιακό μετασχηματισμό και στρατηγική καινοτομίας" },
  home_help_item6: { en: "Mentor executive teams navigating brand-building challenges", gr: "Καθοδήγηση ομάδων στελεχών σε προκλήσεις διαχείρισης επωνυμίας" },
  home_help_cta: { en: "Discuss Your Project", gr: "Συζητήστε το Έργο σας" },

  // Home — Latest Insights preview
  home_insights_eyebrow: { en: "LATEST THINKING", gr: "ΠΡΟΣΦΑΤΕΣ ΣΚΕΨΕΙΣ" },
  home_insights_title: { en: "From the insights library", gr: "Από τη βιβλιοθήκη απόψεων" },
  home_insights_view_all: { en: "View All Insights →", gr: "Δείτε Όλες τις Απόψεις →" },
  home_insights_read: { en: "Read More →", gr: "Διαβάστε Περισσότερα →" },

  // Home — FAQ
  home_faq_eyebrow: { en: "FREQUENTLY ASKED QUESTIONS", gr: "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ" },
  home_faq_title: { en: "Questions, answered", gr: "Απαντήσεις σε ερωτήσεις" },
  faq_q1: { en: "How do I book a consultation with Prof. Pfoertsch?", gr: "Πώς μπορώ να κλείσω συμβουλευτική συνάντηση;" },
  faq_a1: {
    en: "Use the 'Book an Appointment' button anywhere on the site to submit a request with your preferred date, time, and topic. You'll receive a confirmation once it's scheduled.",
    gr: "Χρησιμοποιήστε το κουμπί 'Κλείστε Ραντεβού' για να υποβάλετε αίτημα με την προτιμώμενη ημερομηνία, ώρα και θέμα σας. Θα λάβετε επιβεβαίωση μόλις προγραμματιστεί.",
  },
  faq_q2: { en: "What topics does he speak on?", gr: "Σε ποια θέματα μιλάει;" },
  faq_a2: {
    en: "Primarily Human-to-Human (H2H) marketing, B2B brand strategy, AI's role in branding, and responsible marketing leadership. See the Speaking page for the full list of signature topics.",
    gr: "Κυρίως μάρκετινγκ Human-to-Human (H2H), στρατηγική επωνυμίας B2B, ο ρόλος της ΤΝ στη διαχείριση επωνυμίας, και υπεύθυνη ηγεσία μάρκετινγκ. Δείτε τη σελίδα Ομιλίες για τον πλήρη κατάλογο θεμάτων.",
  },
  faq_q3: { en: "Does he take on consulting projects with smaller companies?", gr: "Αναλαμβάνει έργα συμβουλευτικής με μικρότερες εταιρείες;" },
  faq_a3: {
    en: "Yes — alongside work with global firms like Mercedes-Benz, HP, and IBM, he also advises smaller and growing organizations on brand and marketing strategy. Reach out via the Contact page to discuss your specific situation.",
    gr: "Ναι — παράλληλα με τη συνεργασία με παγκόσμιες εταιρείες όπως η Mercedes-Benz, η HP και η IBM, συμβουλεύει επίσης μικρότερους και αναπτυσσόμενους οργανισμούς. Επικοινωνήστε μέσω της σελίδας Επικοινωνία.",
  },
  faq_q4: { en: "Can I get a copy of his latest research or publications?", gr: "Μπορώ να λάβω αντίγραφο της πρόσφατης έρευνάς του;" },
  faq_a4: {
    en: "Most publications are listed with direct links to the publisher or journal on the Publications page. For anything not linked there, reach out directly via the Contact page.",
    gr: "Οι περισσότερες δημοσιεύσεις αναφέρονται με άμεσους συνδέσμους προς τον εκδότη στη σελίδα Δημοσιεύσεις. Για οτιδήποτε άλλο, επικοινωνήστε απευθείας.",
  },
  faq_q5: { en: "Is he available for university guest lectures?", gr: "Είναι διαθέσιμος για προσκεκλημένες διαλέξεις σε πανεπιστήμια;" },
  faq_a5: {
    en: "Yes, guest lectures are one of the formats he regularly offers, drawing on decades of classroom and consulting experience. See the Speaking page for details on formats and how to enquire.",
    gr: "Ναι, οι προσκεκλημένες διαλέξεις είναι μία από τις μορφές που προσφέρει τακτικά. Δείτε τη σελίδα Ομιλίες για λεπτομέρειες.",
  },

  // About page
  about_eyebrow: { en: "ABOUT PROF. PFÖRTSCH", gr: "ΣΧΕΤΙΚΑ ΜΕ ΤΟΝ ΚΑΘ. PFÖRTSCH" },
  about_headline_1: { en: "Three decades of shaping", gr: "Τρεις δεκαετίες διαμόρφωσης" },
  about_headline_2: { en: "brands, businesses & markets.", gr: "μαρκών, επιχειρήσεων & αγορών." },
  about_description: {
    en: "Waldemar Pförtsch is a professor, author, and consultant whose work bridges rigorous academic research with real-world brand and marketing strategy — trusted by global companies and taught to the next generation of business leaders.",
    gr: "Ο Waldemar Pförtsch είναι καθηγητής, συγγραφέας και σύμβουλος, του οποίου το έργο συνδέει την αυστηρή ακαδημαϊκή έρευνα με την πραγματική στρατηγική μάρκετινγκ — έμπιστος από παγκόσμιες εταιρείες και διδάσκεται στην επόμενη γενιά επιχειρηματικών ηγετών.",
  },
  about_view_publications: { en: "View Publications", gr: "Δείτε τις Δημοσιεύσεις" },
  about_years_experience: { en: "Years Experience", gr: "Χρόνια Εμπειρίας" },

  about_stat_1: { en: "Years in Academia & Consulting", gr: "Χρόνια στην Ακαδημία & Συμβουλευτική" },
  about_stat_2: { en: "Publications Since 2024", gr: "Δημοσιεύσεις Από το 2024" },
  about_stat_3: { en: "Global Brand Partners", gr: "Παγκόσμιοι Συνεργάτες" },
  about_stat_4: { en: "University Affiliations", gr: "Πανεπιστημιακές Συνεργασίες" },

  about_story_eyebrow: { en: "THE STORY SO FAR", gr: "Η ΙΣΤΟΡΙΑ ΜΕΧΡΙ ΣΤΙΓΜΗΣ" },
  about_story_title_1: { en: "From academic research", gr: "Από την ακαδημαϊκή έρευνα" },
  about_story_title_2: { en: "to global brand impact.", gr: "στον παγκόσμιο αντίκτυπο μάρκας." },
  about_story_p1: {
    en: "Over the course of his career, Prof. Pförtsch has moved fluidly between the classroom and the boardroom — developing brand and marketing theory that is grounded in how businesses actually operate. His research and consulting work spans B2B branding, ingredient branding, and the Human-to-Human (H2H) marketing approach he helped pioneer alongside Philip Kotler.",
    gr: "Στην πορεία της καριέρας του, ο Καθ. Pförtsch έχει κινηθεί άνετα μεταξύ της αίθουσας διδασκαλίας και του χώρου διοίκησης — αναπτύσσοντας θεωρία μάρκας και μάρκετινγκ βασισμένη στην πραγματική λειτουργία των επιχειρήσεων. Το ερευνητικό και συμβουλευτικό του έργο καλύπτει τη διαχείριση επωνυμίας B2B και την προσέγγιση μάρκετινγκ Human-to-Human (H2H) που συνδιαμόρφωσε με τον Philip Kotler.",
  },
  about_story_p2: {
    en: "Today, based in Cyprus and Germany, he continues to teach, publish, and advise organizations navigating the shift toward more human-centered, digitally-driven markets — bringing the same rigor he applies in the classroom to every engagement.",
    gr: "Σήμερα, με έδρα την Κύπρο και τη Γερμανία, συνεχίζει να διδάσκει, να δημοσιεύει και να συμβουλεύει οργανισμούς που προσαρμόζονται σε πιο ανθρωποκεντρικές, ψηφιακές αγορές — φέρνοντας την ίδια αυστηρότητα σε κάθε συνεργασία.",
  },

  about_credentials_eyebrow: { en: "CREDENTIALS", gr: "ΔΙΑΠΙΣΤΕΥΤΗΡΙΑ" },
  about_credentials_title: { en: "At a glance", gr: "Με μια ματιά" },
  cred_1_title: { en: "Current Position", gr: "Τρέχουσα Θέση" },
  cred_1_desc: {
    en: "Professor of International Business at CIIM Nicosia, Cyprus, and Pforzheim University, Germany.",
    gr: "Καθηγητής Διεθνούς Επιχειρηματικότητας στο CIIM Λευκωσίας, Κύπρος, και στο Πανεπιστήμιο Pforzheim, Γερμανία.",
  },
  cred_2_title: { en: "Academic Focus", gr: "Ακαδημαϊκή Εστίαση" },
  cred_2_desc: {
    en: "B2B brand management, business marketing, social marketing, and Human-to-Human (H2H) strategy.",
    gr: "Διαχείριση επωνυμίας B2B, επιχειρηματικό μάρκετινγκ, κοινωνικό μάρκετινγκ και στρατηγική Human-to-Human (H2H).",
  },
  cred_3_title: { en: "Notable Co-Author", gr: "Αξιόλογος Συν-Συγγραφέας" },
  cred_3_desc: {
    en: "Long-time collaborator with Philip Kotler, including \"Humanism in Marketing\" (Palgrave, 2024).",
    gr: "Μακροχρόνιος συνεργάτης του Philip Kotler, με έργα όπως το \"Humanism in Marketing\" (Palgrave, 2024).",
  },
  cred_4_title: { en: "Global Reach", gr: "Παγκόσμια Εμβέλεια" },
  cred_4_desc: {
    en: "Decades of teaching, research, and consulting across Europe, the US, and international markets.",
    gr: "Δεκαετίες διδασκαλίας, έρευνας και συμβουλευτικής σε Ευρώπη, ΗΠΑ και διεθνείς αγορές.",
  },

  about_companies_eyebrow: { en: "TRUSTED BY GLOBAL BRANDS", gr: "ΕΜΠΙΣΤΕΥΟΝΤΑΙ ΠΑΓΚΟΣΜΙΕΣ ΜΑΡΚΕΣ" },
  about_companies_title_1: { en: "Consulting and research", gr: "Συμβουλευτική και έρευνα" },
  about_companies_title_2: { en: "partnerships worldwide.", gr: "συνεργασίες παγκοσμίως." },

  about_banner_title: {
    en: "Have a research, teaching or consulting opportunity?",
    gr: "Έχετε ευκαιρία έρευνας, διδασκαλίας ή συμβουλευτικής;",
  },
  lets_connect: { en: "LET'S CONNECT", gr: "ΑΣ ΕΠΙΚΟΙΝΩΝΗΣΟΥΜΕ" },

  // Expertise page
  exp_eyebrow: { en: "AREAS OF EXPERTISE", gr: "ΤΟΜΕΙΣ ΤΕΧΝΟΓΝΩΣΙΑΣ" },
  exp_headline_1: { en: "Four disciplines,", gr: "Τέσσερις κλάδοι," },
  exp_headline_2: { en: "one connected practice.", gr: "μία ενιαία πρακτική." },
  exp_intro: {
    en: "Branding, marketing, innovation, and consulting aren't treated as separate silos — each informs the other, grounded in over two decades of research and hands-on work with global brands.",
    gr: "Η διαχείριση επωνυμίας, το μάρκετινγκ, η καινοτομία και η συμβουλευτική δεν αντιμετωπίζονται ως ξεχωριστοί τομείς — ο ένας τροφοδοτεί τον άλλο, βασισμένοι σε πάνω από δύο δεκαετίες έρευνας και πρακτικής εμπειρίας με παγκόσμιες μάρκες.",
  },
  exp_discuss_project: { en: "Discuss a Project", gr: "Συζητήστε ένα Έργο" },
  exp_banner_title: {
    en: "Have a challenge that spans more than one discipline?",
    gr: "Έχετε μια πρόκληση που εκτείνεται σε περισσότερους από έναν κλάδους;",
  },

  branding_headline: { en: "Strategic brand management, built to last.", gr: "Στρατηγική διαχείριση επωνυμίας, χτισμένη να διαρκεί." },
  branding_full_desc: {
    en: "Three decades of research and consulting on how brands are built, positioned, and defended — from B2B brand architecture to ingredient branding strategy.",
    gr: "Τρεις δεκαετίες έρευνας και συμβουλευτικής σχετικά με το πώς χτίζονται, τοποθετούνται και υπερασπίζονται οι μάρκες — από την αρχιτεκτονική επωνυμίας B2B έως τη στρατηγική ingredient branding.",
  },
  branding_pt1: { en: "B2B brand architecture & positioning", gr: "Αρχιτεκτονική & τοποθέτηση επωνυμίας B2B" },
  branding_pt2: { en: "Ingredient branding strategy", gr: "Στρατηγική ingredient branding" },
  branding_pt3: { en: "Brand narrative & identity development", gr: "Αφήγηση & ανάπτυξη ταυτότητας επωνυμίας" },
  branding_pt4: { en: "Brand value measurement frameworks", gr: "Πλαίσια μέτρησης αξίας επωνυμίας" },

  marketing_headline: { en: "Marketing strategy grounded in how people actually decide.", gr: "Στρατηγική μάρκετινγκ βασισμένη στο πώς πραγματικά αποφασίζουν οι άνθρωποι." },
  marketing_full_desc: {
    en: "Contemporary marketing approaches — including the Human-to-Human (H2H) framework — that put real customer behavior ahead of outdated funnels.",
    gr: "Σύγχρονες προσεγγίσεις μάρκετινγκ — συμπεριλαμβανομένου του πλαισίου Human-to-Human (H2H) — που δίνουν προτεραιότητα στην πραγματική συμπεριφορά του πελάτη.",
  },
  marketing_pt1: { en: "Human-to-Human (H2H) marketing strategy", gr: "Στρατηγική μάρκετινγκ Human-to-Human (H2H)" },
  marketing_pt2: { en: "Digital positioning & customer insight", gr: "Ψηφιακή τοποθέτηση & κατανόηση πελάτη" },
  marketing_pt3: { en: "The 5Es marketing-mix framework", gr: "Το πλαίσιο μείγματος μάρκετινγκ 5Es" },
  marketing_pt4: { en: "Content & campaign strategy", gr: "Στρατηγική περιεχομένου & καμπάνιας" },

  innovation_headline: { en: "Helping organizations adapt to digital and AI-driven change.", gr: "Βοηθώντας οργανισμούς να προσαρμοστούν στην ψηφιακή αλλαγή και την ΤΝ." },
  innovation_full_desc: {
    en: "Guidance on integrating new technology into brand and business strategy — from digital transformation roadmaps to AI's role in marketing decisions.",
    gr: "Καθοδήγηση για την ενσωμάτωση νέας τεχνολογίας στη στρατηγική επωνυμίας και επιχείρησης — από οδικούς χάρτες ψηφιακού μετασχηματισμού έως τον ρόλο της ΤΝ στις αποφάσεις μάρκετινγκ.",
  },
  innovation_pt1: { en: "Digital transformation strategy", gr: "Στρατηγική ψηφιακού μετασχηματισμού" },
  innovation_pt2: { en: "AI's role in modern brand management", gr: "Ο ρόλος της ΤΝ στη σύγχρονη διαχείριση επωνυμίας" },
  innovation_pt3: { en: "Digital nudging & customer decision design", gr: "Digital nudging & σχεδιασμός αποφάσεων πελάτη" },
  innovation_pt4: { en: "Ecosystem & platform strategy", gr: "Στρατηγική οικοσυστήματος & πλατφόρμας" },

  consulting_headline: { en: "Executive advisory for teams navigating real market pressure.", gr: "Συμβουλευτική στελεχών για ομάδες υπό πραγματική πίεση αγοράς." },
  consulting_full_desc: {
    en: "High-impact strategic advisory for organizations — from Fortune 500 marketing teams to founders — grounded in academic rigor and real commercial experience.",
    gr: "Στρατηγική συμβουλευτική υψηλού αντίκτυπου για οργανισμούς — από ομάδες μάρκετινγκ Fortune 500 έως ιδρυτές — βασισμένη σε ακαδημαϊκή αυστηρότητα και εμπορική εμπειρία.",
  },
  consulting_pt1: { en: "Executive & board-level advisory", gr: "Συμβουλευτική στελεχών & διοικητικού συμβουλίου" },
  consulting_pt2: { en: "Corporate marketing strategy reviews", gr: "Αξιολογήσεις εταιρικής στρατηγικής μάρκετινγκ" },
  consulting_pt3: { en: "Workshops & executive education", gr: "Εργαστήρια & εκπαίδευση στελεχών" },
  consulting_pt4: { en: "Applied research partnerships", gr: "Συνεργασίες εφαρμοσμένης έρευνας" },

  // Contact page
  contact_eyebrow: { en: "GET IN TOUCH", gr: "ΕΠΙΚΟΙΝΩΝΗΣΤΕ" },
  contact_headline: { en: "Let's start a conversation.", gr: "Ας ξεκινήσουμε μια συζήτηση." },
  contact_intro: {
    en: "Whether it's a speaking engagement, a consulting project, or a question about a publication — reach out directly, or book time on the calendar if you already know what you'd like to discuss.",
    gr: "Είτε πρόκειται για ομιλία, έργο συμβουλευτικής ή ερώτηση σχετικά με δημοσίευση — επικοινωνήστε απευθείας ή κλείστε ραντεβού αν γνωρίζετε ήδη τι θέλετε να συζητήσετε.",
  },
  contact_send_message: { en: "Send a message", gr: "Στείλτε μήνυμα" },
  contact_name: { en: "Name", gr: "Όνομα" },
  contact_name_ph: { en: "Your full name", gr: "Το πλήρες όνομά σας" },
  contact_email: { en: "Email", gr: "Email" },
  contact_subject: { en: "Subject", gr: "Θέμα" },
  contact_subject_ph: { en: "What is this regarding?", gr: "Ποιο είναι το θέμα;" },
  contact_message: { en: "Message", gr: "Μήνυμα" },
  contact_message_ph: { en: "Tell me a bit about what you have in mind...", gr: "Πείτε μου λίγα λόγια για το τι έχετε στο μυαλό σας..." },
  contact_send_btn: { en: "Send Message", gr: "Αποστολή Μηνύματος" },
  contact_sending: { en: "Sending...", gr: "Αποστολή..." },
  contact_success: { en: "Thank you — your message has been sent. I'll get back to you soon.", gr: "Ευχαριστώ — το μήνυμά σας στάλθηκε. Θα επικοινωνήσω σύντομα." },
  contact_error: { en: "Something went wrong sending your message. Please try again, or email directly below.", gr: "Κάτι πήγε στραβά. Δοκιμάστε ξανά ή στείλτε email απευθείας παρακάτω." },

  contact_info_email: { en: "EMAIL", gr: "EMAIL" },
  contact_info_location: { en: "LOCATION", gr: "ΤΟΠΟΘΕΣΙΑ" },
  contact_info_response: { en: "RESPONSE TIME", gr: "ΧΡΟΝΟΣ ΑΠΟΚΡΙΣΗΣ" },
  contact_response_text: { en: "Usually within 2–3 business days", gr: "Συνήθως εντός 2–3 εργάσιμων ημερών" },
  contact_schedule: { en: "PREFER TO SCHEDULE DIRECTLY?", gr: "ΠΡΟΤΙΜΑΤΕ ΝΑ ΚΛΕΙΣΕΤΕ ΡΑΝΤΕΒΟΥ;" },
  contact_connect: { en: "CONNECT", gr: "ΣΥΝΔΕΘΕΙΤΕ" },

  // Appointment page
  appt_eyebrow: { en: "BOOK A SESSION", gr: "ΚΛΕΙΣΤΕ ΣΥΝΕΔΡΙΑ" },
  appt_headline: { en: "Schedule a conversation with Professor Pfoertsch.", gr: "Κλείστε ραντεβού με τον Καθηγητή Pfoertsch." },
  appt_intro: {
    en: "Book an appointment for academic discussions, consulting, speaking engagements or collaboration.",
    gr: "Κλείστε ραντεβού για ακαδημαϊκές συζητήσεις, συμβουλευτική, ομιλίες ή συνεργασία.",
  },
  appt_service: { en: "Service", gr: "Υπηρεσία" },
  appt_service_1: { en: "Academic Consultation", gr: "Ακαδημαϊκή Συμβουλευτική" },
  appt_service_2: { en: "Business Consulting", gr: "Επιχειρηματική Συμβουλευτική" },
  appt_service_3: { en: "Speaking Engagement", gr: "Ομιλία" },
  appt_service_4: { en: "Research Collaboration", gr: "Ερευνητική Συνεργασία" },
  appt_date: { en: "Date", gr: "Ημερομηνία" },
  appt_time: { en: "Time", gr: "Ώρα" },
  appt_name: { en: "Name", gr: "Όνομα" },
  appt_email: { en: "Email", gr: "Email" },
  appt_message: { en: "Message", gr: "Μήνυμα" },
  appt_submit: { en: "Request Appointment", gr: "Αίτημα Ραντεβού" },
  appt_thank_you: { en: "Thank You!", gr: "Ευχαριστούμε!" },
  appt_submitted: { en: "Your appointment request has been submitted.", gr: "Το αίτημά σας για ραντεβού υποβλήθηκε." },
  appt_sending: { en: "Sending...", gr: "Αποστολή..." },
  appt_error: {
    en: "Something went wrong sending your request. Please try again, or email directly instead.",
    gr: "Κάτι πήγε στραβά. Δοκιμάστε ξανά ή στείλτε email απευθείας.",
  },

  // Publications page (UI chrome only — publication titles/descriptions stay
  // in English since they are academic citations that shouldn't be machine-translated)
  pub_eyebrow: { en: "RESEARCH & PUBLICATIONS", gr: "ΕΡΕΥΝΑ & ΔΗΜΟΣΙΕΥΣΕΙΣ" },
  pub_headline: { en: "Two years of research, finally in one place.", gr: "Δύο χρόνια έρευνας, επιτέλους σε ένα μέρος." },
  pub_intro: {
    en: "A complete, always-current library of books, chapters, journal articles, and conference papers by Prof. Waldemar Pfoertsch — spanning B2B branding, Human-to-Human marketing, and strategic brand management.",
    gr: "Μια πλήρης, πάντα ενημερωμένη βιβλιοθήκη βιβλίων, κεφαλαίων, άρθρων και εργασιών συνεδρίων του Καθ. Waldemar Pfoertsch — καλύπτοντας τη διαχείριση επωνυμίας B2B, το μάρκετινγκ Human-to-Human και τη στρατηγική διαχείριση επωνυμίας.",
  },
  pub_stat_total: { en: "Total Publications", gr: "Σύνολο Δημοσιεύσεων" },
  pub_stat_since: { en: "Since 2024", gr: "Από το 2024" },
  pub_stat_years: { en: "Years Covered", gr: "Χρόνια Κάλυψης" },
  pub_latest: { en: "LATEST", gr: "ΠΡΟΣΦΑΤΟ" },
  pub_view: { en: "View Publication →", gr: "Δείτε τη Δημοσίευση →" },
  pub_view_short: { en: "View →", gr: "Δείτε →" },
  pub_full_library: { en: "FULL LIBRARY", gr: "ΠΛΗΡΗΣ ΒΙΒΛΙΟΘΗΚΗ" },
  pub_browse_all: { en: "Browse all publications", gr: "Περιηγηθείτε σε όλες τις δημοσιεύσεις" },
  pub_filter_all: { en: "All Work", gr: "Όλα τα Έργα" },
  pub_filter_books: { en: "Books", gr: "Βιβλία" },
  pub_filter_chapters: { en: "Book Chapters", gr: "Κεφάλαια Βιβλίων" },
  pub_filter_articles: { en: "Journal Articles", gr: "Άρθρα Περιοδικών" },
  pub_filter_conference: { en: "Conference Papers", gr: "Εργασίες Συνεδρίων" },
  pub_all_years: { en: "All Years", gr: "Όλα τα Χρόνια" },
  pub_empty: { en: "No publications match this filter yet.", gr: "Καμία δημοσίευση δεν ταιριάζει με αυτό το φίλτρο." },

  // Books page (UI chrome — book titles/descriptions stay in English)
  books_eyebrow: { en: "BOOKS & PUBLICATIONS", gr: "ΒΙΒΛΙΑ & ΔΗΜΟΣΙΕΥΣΕΙΣ" },
  books_headline: { en: "Ideas that become lasting knowledge.", gr: "Ιδέες που γίνονται διαρκής γνώση." },
  books_intro: {
    en: "Explore books authored and co-authored by Prof. Waldemar Pfoertsch, covering branding, marketing, innovation and business strategy.",
    gr: "Εξερευνήστε βιβλία που έγραψε και συνέγραψε ο Καθ. Waldemar Pfoertsch, καλύπτοντας τη διαχείριση επωνυμίας, το μάρκετινγκ, την καινοτομία και τη στρατηγική επιχειρήσεων.",
  },
  books_filter_all: { en: "All Books", gr: "Όλα τα Βιβλία" },
  books_filter_amazon: { en: "Amazon Books", gr: "Βιβλία Amazon" },
  books_filter_pdf: { en: "PDF Books", gr: "Βιβλία PDF" },
  books_badge_amazon: { en: "AMAZON EDITION", gr: "ΕΚΔΟΣΗ AMAZON" },
  books_badge_digital: { en: "DIGITAL EDITION", gr: "ΨΗΦΙΑΚΗ ΕΚΔΟΣΗ" },
  books_buy_amazon: { en: "Buy on Amazon →", gr: "Αγορά στο Amazon →" },
  books_buy_pdf: { en: "Buy PDF →", gr: "Αγορά PDF →" },
  books_cta_eyebrow: { en: "DIRECT ACCESS", gr: "ΑΜΕΣΗ ΠΡΟΣΒΑΣΗ" },
  books_cta_title: { en: "Read, learn and explore directly.", gr: "Διαβάστε, μάθετε και εξερευνήστε απευθείας." },
  books_cta_text: {
    en: "Selected publications can be made available directly through this website as digital editions.",
    gr: "Επιλεγμένες δημοσιεύσεις μπορούν να διατεθούν απευθείας μέσω αυτής της ιστοσελίδας ως ψηφιακές εκδόσεις.",
  },
  books_cta_note: { en: "Digital editions available directly", gr: "Ψηφιακές εκδόσεις διαθέσιμες απευθείας" },

  books_latest_eyebrow: { en: "LATEST PUBLICATION", gr: "ΠΡΟΣΦΑΤΗ ΔΗΜΟΣΙΕΥΣΗ" },
  books_latest_title: { en: "H2H Marketing: The Genesis of Human-to-Human Marketing", gr: "H2H Marketing: Η Γένεση του Μάρκετινγκ Human-to-Human" },
  books_latest_desc: {
    en: "In H2H Marketing the authors focus on redefining the role of marketing by reorienting the mindset of decision-makers and integrating the concepts of Design Thinking, Service-Dominant Logic and Digitalization.",
    gr: "Στο H2H Marketing, οι συγγραφείς επαναπροσδιορίζουν τον ρόλο του μάρκετινγκ, ενσωματώνοντας τις έννοιες του Design Thinking, της Service-Dominant Logic και του ψηφιακού μετασχηματισμού.",
  },
  books_latest_springer: { en: "View on Springer", gr: "Δείτε στο Springer" },
  books_latest_amazon: { en: "Find on Amazon", gr: "Βρείτε στο Amazon" },

  // Videos page
  vid_eyebrow: { en: "VIDEO LIBRARY", gr: "ΒΙΒΛΙΟΘΗΚΗ ΒΙΝΤΕΟ" },
  vid_headline_1: { en: "Ideas worth", gr: "Ιδέες που αξίζει" },
  vid_headline_2: { en: "watching.", gr: "να δείτε." },
  vid_intro: {
    en: "Explore talks, interviews and discussions on marketing, branding, innovation and Human-to-Human thinking.",
    gr: "Εξερευνήστε ομιλίες, συνεντεύξεις και συζητήσεις για μάρκετινγκ, διαχείριση επωνυμίας, καινοτομία και σκέψη Human-to-Human.",
  },
  vid_featured: { en: "FEATURED", gr: "ΕΠΙΛΕΓΜΕΝΟ" },
  vid_watch_youtube: { en: "Watch on YouTube →", gr: "Παρακολουθήστε στο YouTube →" },
  vid_explore: { en: "EXPLORE", gr: "ΕΞΕΡΕΥΝΗΣΤΕ" },
  vid_talks_1: { en: "Talks, interviews", gr: "Ομιλίες, συνεντεύξεις" },
  vid_talks_2: { en: "& insights.", gr: "& απόψεις." },
  vid_library_intro: {
    en: "A collection of conversations and presentations covering contemporary marketing, branding and business.",
    gr: "Μια συλλογή συζητήσεων και παρουσιάσεων που καλύπτουν το σύγχρονο μάρκετινγκ, τη διαχείριση επωνυμίας και τις επιχειρήσεις.",
  },
  vid_watch_video: { en: "Watch Video →", gr: "Παρακολουθήστε →" },
  vid_cta_label: { en: "CONTINUE EXPLORING", gr: "ΣΥΝΕΧΙΣΤΕ ΤΗΝ ΕΞΕΡΕΥΝΗΣΗ" },
  vid_cta_title_1: { en: "Discover the ideas", gr: "Ανακαλύψτε τις ιδέες" },
  vid_cta_title_2: { en: "behind the research.", gr: "πίσω από την έρευνα." },
  vid_explore_pubs: { en: "Explore Publications →", gr: "Εξερευνήστε Δημοσιεύσεις →" },
  vid_cat_all: { en: "All", gr: "Όλα" },
  vid_cat_talks: { en: "Talks & Interviews", gr: "Ομιλίες & Συνεντεύξεις" },

  // Insights page (UI chrome — interview/article titles stay in English,
  // same reasoning as Publications: they're real sourced citations)
  ins_eyebrow: { en: "INSIGHTS & COMMENTARY", gr: "ΑΠΟΨΕΙΣ & ΣΧΟΛΙΑΣΜΟΣ" },
  ins_headline: { en: "Interviews, ideas, and ongoing commentary.", gr: "Συνεντεύξεις, ιδέες και συνεχής σχολιασμός." },
  ins_intro: {
    en: "A curated collection of interviews, articles, and conversations featuring Prof. Waldemar Pfoertsch — from the origins of B2B marketing to where brand strategy is headed next.",
    gr: "Μια επιμελημένη συλλογή συνεντεύξεων, άρθρων και συζητήσεων με τον Καθ. Waldemar Pfoertsch — από τις απαρχές του μάρκετινγκ B2B έως το μέλλον της στρατηγικής επωνυμίας.",
  },
  ins_featured: { en: "FEATURED", gr: "ΕΠΙΛΕΓΜΕΝΟ" },
  ins_listen_read: { en: "Listen / Read →", gr: "Ακούστε / Διαβάστε →" },
  ins_browse_all: { en: "BROWSE ALL", gr: "ΠΕΡΙΗΓΗΘΕΙΤΕ ΣΕ ΟΛΑ" },
  ins_every: { en: "Every interview & article", gr: "Κάθε συνέντευξη & άρθρο" },
  ins_filter_all: { en: "All Insights", gr: "Όλες οι Απόψεις" },
  ins_filter_podcasts: { en: "Podcasts", gr: "Podcasts" },
  ins_filter_articles: { en: "Articles", gr: "Άρθρα" },
  ins_filter_research: { en: "Research", gr: "Έρευνα" },
  ins_filter_social: { en: "Social", gr: "Κοινωνικά Δίκτυα" },
  ins_view: { en: "View →", gr: "Δείτε →" },
  ins_empty: { en: "No insights match this filter yet.", gr: "Καμία άποψη δεν ταιριάζει με αυτό το φίλτρο." },

  // Speaking page
  sp_eyebrow: { en: "SPEAKING & KEYNOTES", gr: "ΟΜΙΛΙΕΣ & ΚΕΝΤΡΙΚΕΣ ΕΙΣΗΓΗΣΕΙΣ" },
  sp_headline: { en: "Ideas worth bringing to your stage.", gr: "Ιδέες που αξίζει να φέρετε στη σκηνή σας." },
  sp_intro: {
    en: "Prof. Waldemar Pfoertsch speaks at conferences, corporate events, and universities worldwide — bringing decades of brand and marketing research into a format built for real audiences.",
    gr: "Ο Καθ. Waldemar Pfoertsch μιλά σε συνέδρια, εταιρικές εκδηλώσεις και πανεπιστήμια παγκοσμίως — μεταφέροντας δεκαετίες έρευνας σε μορφή κατάλληλη για πραγματικό κοινό.",
  },
  sp_enquire: { en: "Enquire About Speaking", gr: "Ρωτήστε για Ομιλίες" },
  sp_watch_past: { en: "Watch Past Talks", gr: "Δείτε Παλιότερες Ομιλίες" },
  sp_recent_engagement: { en: "RECENT ENGAGEMENT", gr: "ΠΡΟΣΦΑΤΗ ΣΥΜΜΕΤΟΧΗ" },
  sp_engagement_title: { en: "AMA Academic Winter Conference", gr: "Ακαδημαϊκό Συνέδριο AMA Winter" },
  sp_engagement_desc: {
    en: "Presented \"Humanizing Marketing Strategies\" — integrating Human-to-Human marketing with regenerative business practices — in Phoenix, Arizona, February 2025.",
    gr: "Παρουσίασε το \"Humanizing Marketing Strategies\" — ενσωματώνοντας το μάρκετινγκ Human-to-Human με αναγεννητικές επιχειρηματικές πρακτικές — στο Φοίνιξ, Αριζόνα, Φεβρουάριος 2025.",
  },
  sp_topics_eyebrow: { en: "SIGNATURE TOPICS", gr: "ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ ΘΕΜΑΤΑ" },
  sp_topics_title: { en: "What the talks cover", gr: "Τι καλύπτουν οι ομιλίες" },
  topic_1_title: { en: "Human-to-Human (H2H) Marketing", gr: "Μάρκετινγκ Human-to-Human (H2H)" },
  topic_1_desc: {
    en: "Why human-centered strategy outperforms funnel-driven marketing, and how to apply it inside a real organization.",
    gr: "Γιατί η ανθρωποκεντρική στρατηγική υπερτερεί του παραδοσιακού μάρκετινγκ, και πώς εφαρμόζεται σε έναν πραγματικό οργανισμό.",
  },
  topic_2_title: { en: "B2B Brand Strategy", gr: "Στρατηγική Επωνυμίας B2B" },
  topic_2_desc: {
    en: "Brand architecture, positioning, and ingredient branding for B2B companies competing on more than price.",
    gr: "Αρχιτεκτονική επωνυμίας, τοποθέτηση και ingredient branding για εταιρείες B2B που ανταγωνίζονται πέρα από την τιμή.",
  },
  topic_3_title: { en: "AI & the Future of Branding", gr: "ΤΝ & το Μέλλον της Διαχείρισης Επωνυμίας" },
  topic_3_desc: {
    en: "How artificial intelligence is reshaping brand management, customer decisions, and digital nudging.",
    gr: "Πώς η τεχνητή νοημοσύνη αναδιαμορφώνει τη διαχείριση επωνυμίας, τις αποφάσεις πελατών και το digital nudging.",
  },
  topic_4_title: { en: "Responsible & Humanistic Marketing", gr: "Υπεύθυνο & Ανθρωπιστικό Μάρκετινγκ" },
  topic_4_desc: {
    en: "Ethical leadership in marketing — balancing commercial goals with individual welfare and trust.",
    gr: "Ηθική ηγεσία στο μάρκετινγκ — ισορροπώντας εμπορικούς στόχους με την ατομική ευημερία και εμπιστοσύνη.",
  },
  sp_formats_eyebrow: { en: "FORMATS", gr: "ΜΟΡΦΕΣ" },
  sp_formats_title: { en: "Ways to work together", gr: "Τρόποι συνεργασίας" },
  format_keynote: { en: "Keynote", gr: "Κεντρική Ομιλία" },
  format_keynote_desc: { en: "A high-energy, research-backed talk tailored to your audience and event theme.", gr: "Μια δυναμική ομιλία βασισμένη σε έρευνα, προσαρμοσμένη στο κοινό και το θέμα της εκδήλωσής σας." },
  format_workshop: { en: "Executive Workshop", gr: "Εργαστήριο Στελεχών" },
  format_workshop_desc: { en: "Hands-on, interactive sessions for leadership teams working through a real strategic challenge.", gr: "Πρακτικές, διαδραστικές συνεδρίες για ομάδες ηγεσίας που αντιμετωπίζουν μια πραγματική στρατηγική πρόκληση." },
  format_panel: { en: "Panel & Moderation", gr: "Πάνελ & Συντονισμός" },
  format_panel_desc: { en: "Expert panel participation or moderation on branding, marketing, and innovation topics.", gr: "Συμμετοχή ή συντονισμός πάνελ ειδικών σε θέματα διαχείρισης επωνυμίας, μάρκετινγκ και καινοτομίας." },
  format_guest: { en: "Guest Lecture", gr: "Προσκεκλημένη Διάλεξη" },
  format_guest_desc: { en: "University or corporate guest lectures, drawing on decades of classroom and consulting experience.", gr: "Πανεπιστημιακές ή εταιρικές διαλέξεις, αντλώντας από δεκαετίες εμπειρίας διδασκαλίας και συμβουλευτικής." },
  sp_banner_title: { en: "Have an event in mind? Let's talk details.", gr: "Έχετε μια εκδήλωση στο μυαλό σας; Ας μιλήσουμε." },

  // BookDetails page
  bd_not_found: { en: "Book not found", gr: "Το βιβλίο δεν βρέθηκε" },
  bd_back: { en: "← Back to Books", gr: "← Πίσω στα Βιβλία" },
  bd_publisher: { en: "Publisher", gr: "Εκδότης" },
  bd_edition: { en: "Edition", gr: "Έκδοση" },
  bd_available: { en: "Available for purchase", gr: "Διαθέσιμο για αγορά" },
  bd_about_label: { en: "ABOUT THE BOOK", gr: "ΣΧΕΤΙΚΑ ΜΕ ΤΟ ΒΙΒΛΙΟ" },
  bd_about_title: { en: "Research, ideas and practical knowledge.", gr: "Έρευνα, ιδέες και πρακτική γνώση." },
  bd_about_text: {
    en: "Explore the work and ideas behind this publication and discover how it contributes to the fields of branding, marketing, innovation and business strategy.",
    gr: "Εξερευνήστε το έργο και τις ιδέες πίσω από αυτή τη δημοσίευση και ανακαλύψτε πώς συμβάλλει στους τομείς της διαχείρισης επωνυμίας, του μάρκετινγκ, της καινοτομίας και της επιχειρηματικής στρατηγικής.",
  },
  bd_more_pubs: { en: "MORE PUBLICATIONS", gr: "ΠΕΡΙΣΣΟΤΕΡΕΣ ΔΗΜΟΣΙΕΥΣΕΙΣ" },
  bd_explore_collection: { en: "Explore the complete book collection.", gr: "Εξερευνήστε την πλήρη συλλογή βιβλίων." },
  bd_view_all: { en: "View All Books →", gr: "Δείτε Όλα τα Βιβλία →" },

  // About page gallery
  about_gallery_eyebrow: { en: "IN THE FIELD", gr: "ΣΤΟ ΠΕΔΙΟ" },
  about_gallery_title: { en: "Teaching, speaking, and the work in between.", gr: "Διδασκαλία, ομιλίες και το έργο ανάμεσα." },

  // Speaking page engagement image caption
  sp_engagement_caption: { en: "Prof. Pfoertsch presenting at the AMA Academic Winter Conference, February 2025.", gr: "Ο Καθ. Pfoertsch παρουσιάζει στο Ακαδημαϊκό Συνέδριο AMA Winter, Φεβρουάριος 2025." },

  // Contact page headshot alt text
  contact_photo_alt: { en: "Prof. Waldemar Pfoertsch", gr: "Καθ. Waldemar Pfoertsch" },

    // Books library page

  books_library: {
    en: "LIBRARY",
    gr: "ΒΙΒΛΙΟΘΗΚΗ",
  },

  books_publications: {
    en: "Publications",
    gr: "Δημοσιεύσεις",
  },

  books_all_publications: {
    en: "All Publications",
    gr: "Όλες οι Δημοσιεύσεις",
  },

  books_published: {
    en: "Books Published",
    gr: "Δημοσιευμένα Βιβλία",
  },

  books_chapters: {
    en: "Chapters in Books",
    gr: "Κεφάλαια Βιβλίων",
  },

  books_translated: {
    en: "Translated Books",
    gr: "Μεταφρασμένα Βιβλία",
  },

  books_search_placeholder: {
    en: "Search publications, authors, publishers...",
    gr: "Αναζήτηση δημοσιεύσεων, συγγραφέων, εκδοτών...",
  },

  books_year: {
    en: "Year",
    gr: "Έτος",
  },

  books_showing: {
    en: "Showing",
    gr: "Εμφάνιση",
  },

  books_for: {
    en: "for",
    gr: "για",
  },

  books_publication: {
    en: "publication",
    gr: "δημοσίευση",
  },

  books_publications_plural: {
    en: "publications",
    gr: "δημοσιεύσεις",
  },

  books_clear_filters: {
    en: "Clear Filters",
    gr: "Καθαρισμός Φίλτρων",
  },

  books_no_results: {
    en: "No publications found",
    gr: "Δεν βρέθηκαν δημοσιεύσεις",
  },

  books_no_results_text: {
    en: "Try changing your search term, category, or selected year.",
    gr: "Δοκιμάστε να αλλάξετε τον όρο αναζήτησης, την κατηγορία ή το επιλεγμένο έτος.",
  },

  books_show_all: {
    en: "Show All Publications",
    gr: "Εμφάνιση Όλων των Δημοσιεύσεων",
  },

  books_book: {
    en: "BOOK",
    gr: "ΒΙΒΛΙΟ",
  },

  books_chapter: {
    en: "CHAPTER",
    gr: "ΚΕΦΑΛΑΙΟ",
  },

  books_translation: {
    en: "TRANSLATION",
    gr: "ΜΕΤΑΦΡΑΣΗ",
  },

  books_publisher: {
    en: "Publisher",
    gr: "Εκδότης",
  },

  books_date: {
    en: "Date",
    gr: "Ημερομηνία",
  },

  books_pages: {
    en: "Pages",
    gr: "Σελίδες",
  },

  books_buy_now: {
    en: "Buy Now →",
    gr: "Αγορά →",
  },

  books_view_doi: {
    en: "View DOI →",
    gr: "Προβολή DOI →",
  },
  // Publications page - additional UI

pub_filter_translated: {
  en: "Translated Books",
  gr: "Μεταφρασμένα Βιβλία",
},

pub_type_book: {
  en: "BOOK",
  gr: "ΒΙΒΛΙΟ",
},

pub_type_chapter: {
  en: "BOOK CHAPTER",
  gr: "ΚΕΦΑΛΑΙΟ ΒΙΒΛΙΟΥ",
},

pub_type_translation: {
  en: "TRANSLATION",
  gr: "ΜΕΤΑΦΡΑΣΗ",
},

pub_search_placeholder: {
  en: "Search publications, authors, publishers...",
  gr: "Αναζήτηση δημοσιεύσεων, συγγραφέων, εκδοτών...",
},

pub_year: {
  en: "Year",
  gr: "Έτος",
},

pub_clear_filters: {
  en: "Clear Filters",
  gr: "Εκκαθάριση Φίλτρων",
},

pub_show_all: {
  en: "Show All Publications",
  gr: "Εμφάνιση όλων των δημοσιεύσεων",
},

pub_date: {
  en: "Date",
  gr: "Ημερομηνία",
},

pub_pages: {
  en: "Pages",
  gr: "Σελίδες",
},

pub_for: {
  en: "for",
  gr: "για",
},

pub_research_knowledge: {
  en: "RESEARCH & KNOWLEDGE",
  gr: "ΕΡΕΥΝΑ & ΓΝΩΣΗ",
},

pub_cta_eyebrow: { en: "KEEP EXPLORING", gr: "ΣΥΝΕΧΙΣΤΕ ΤΗΝ ΕΞΕΡΕΥΝΗΣΗ" },

pub_cta_title: {
  en: "Explore the ideas behind the work.",
  gr: "Εξερευνήστε τις ιδέες πίσω από το έργο.",
},

pub_cta_text: {
  en: "Discover books, book chapters and international editions covering branding, marketing, innovation and business strategy.",
  gr: "Ανακαλύψτε βιβλία, κεφάλαια βιβλίων και διεθνείς εκδόσεις που καλύπτουν τη διαχείριση επωνυμίας, το μάρκετινγκ, την καινοτομία και την επιχειρηματική στρατηγική.",
},
pub_single: { en: "Publication", gr: "Δημοσίευση" },
pub_multiple: { en: "Publications", gr: "Δημοσιεύσεις" },
pub_clear_search: { en: "Clear search", gr: "Καθαρισμός αναζήτησης" },
pub_doi: { en: "View DOI →", gr: "Δείτε DOI →" },
pub_empty_hint: {
  en: "Try adjusting your filters or search term.",
  gr: "Δοκιμάστε να προσαρμόσετε τα φίλτρα ή τον όρο αναζήτησης.",
},
pub_buy: {
  en: "Buy",
  gr: "Αγορά",
},
pub_publisher: {
  en: "Publisher",
  gr: "Εκδότης",
},

case_eyebrow: {
  en: "PUBLICATIONS",
  gr: "ΔΗΜΟΣΙΕΥΣΕΙΣ",
},

case_headline: {
  en: "Case Studies",
  gr: "Μελέτες Περίπτωσης",
},

case_intro: {
  en: "Research, business cases and applied studies exploring branding, marketing, digital transformation and human-centered business strategies.",
  gr: "Έρευνα, επιχειρηματικές περιπτώσεις και εφαρμοσμένες μελέτες που εξερευνούν το branding, το marketing, τον ψηφιακό μετασχηματισμό και ανθρωποκεντρικές επιχειρηματικές στρατηγικές.",
},

case_section_label: {
  en: "RESEARCH & CASE STUDIES",
  gr: "ΕΡΕΥΝΑ & ΜΕΛΕΤΕΣ ΠΕΡΙΠΤΩΣΗΣ",
},

case_section_title: {
  en: "Business cases & applied research",
  gr: "Επιχειρηματικές περιπτώσεις & εφαρμοσμένη έρευνα",
},

case_single: {
  en: "case study",
  gr: "μελέτη περίπτωσης",
},

case_multiple: {
  en: "case studies",
  gr: "μελέτες περίπτωσης",
},

case_search_placeholder: {
  en: "Search case studies...",
  gr: "Αναζήτηση μελετών περίπτωσης...",
},

case_all_years: {
  en: "All years",
  gr: "Όλα τα έτη",
},

case_showing: {
  en: "Showing",
  gr: "Εμφάνιση",
},

case_results: {
  en: "results",
  gr: "αποτελεσμάτων",
},

case_clear_filters: {
  en: "Clear filters",
  gr: "Καθαρισμός φίλτρων",
},

case_badge: {
  en: "CASE STUDY",
  gr: "ΜΕΛΕΤΗ ΠΕΡΙΠΤΩΣΗΣ",
},

case_view_details: {
  en: "View Details",
  gr: "Προβολή λεπτομερειών",
},

case_view_source: {
  en: "View Source",
  gr: "Προβολή πηγής",
},

case_no_results: {
  en: "No case studies found",
  gr: "Δεν βρέθηκαν μελέτες περίπτωσης",
},

case_no_results_hint: {
  en: "Try changing your search term or selected year.",
  gr: "Δοκιμάστε να αλλάξετε τον όρο αναζήτησης ή το επιλεγμένο έτος.",
},
articles_all_publications: {
  en: "All Publications",
  gr: "Όλες οι Δημοσιεύσεις",
},

articles_peer_reviewed: {
  en: "Peer Reviewed",
  gr: "Με αξιολόγηση από ομοτίμους",
},

articles_press_various: {
  en: "Various Papers & Press",
  gr: "Διάφορες Εργασίες & Τύπος",
},

articles_peer_reviewed_label: {
  en: "PEER REVIEWED",
  gr: "ΑΞΙΟΛΟΓΗΜΕΝΟ ΑΠΟ ΟΜΟΤΙΜΟΥΣ",
},

articles_press_label: {
  en: "PAPER / PRESS",
  gr: "ΕΡΓΑΣΙΑ / ΤΥΠΟΣ",
},

articles_publication: {
  en: "Publication",
  gr: "Δημοσίευση",
},

articles_eyebrow: {
  en: "PUBLICATIONS",
  gr: "ΔΗΜΟΣΙΕΥΣΕΙΣ",
},

articles_headline: {
  en: "Articles",
  gr: "Άρθρα",
},

articles_intro: {
  en: "Explore peer-reviewed research, professional papers and press publications covering branding, marketing, digital transformation and business strategy.",
  gr: "Εξερευνήστε επιστημονικές δημοσιεύσεις, επαγγελματικές εργασίες και άρθρα στον Τύπο που καλύπτουν το branding, το marketing, τον ψηφιακό μετασχηματισμό και την επιχειρηματική στρατηγική.",
},

articles_archive: {
  en: "RESEARCH ARCHIVE",
  gr: "ΑΡΧΕΙΟ ΕΡΕΥΝΑΣ",
},

articles_publications: {
  en: "Articles & Publications",
  gr: "Άρθρα & Δημοσιεύσεις",
},

articles_publication_single: {
  en: "publication",
  gr: "δημοσίευση",
},

articles_publications_plural: {
  en: "publications",
  gr: "δημοσιεύσεις",
},

articles_search_placeholder: {
  en: "Search articles...",
  gr: "Αναζήτηση άρθρων...",
},

articles_clear_search: {
  en: "Clear search",
  gr: "Καθαρισμός αναζήτησης",
},

articles_year: {
  en: "Year",
  gr: "Έτος",
},

articles_showing: {
  en: "Showing",
  gr: "Εμφάνιση",
},

articles_clear_filters: {
  en: "Clear filters",
  gr: "Καθαρισμός φίλτρων",
},

articles_in: {
  en: "In:",
  gr: "Σε:",
},

articles_volume: {
  en: "Vol.",
  gr: "Τόμος",
},

articles_issue: {
  en: "Issue",
  gr: "Τεύχος",
},

articles_pages: {
  en: "pp.",
  gr: "σελ.",
},

articles_view_details: {
  en: "View Details",
  gr: "Προβολή λεπτομερειών",
},

articles_read_online: {
  en: "Read Online",
  gr: "Ανάγνωση Online",
},

articles_no_results: {
  en: "No articles found.",
  gr: "Δεν βρέθηκαν άρθρα.",
},

articles_reset_search: {
  en: "Reset Search",
  gr: "Επαναφορά αναζήτησης",
},

articles_close: {
  en: "Close",
  gr: "Κλείσιμο",
},

articles_authors: {
  en: "Authors",
  gr: "Συγγραφείς",
},

articles_journal_publisher: {
  en: "Journal / Publisher",
  gr: "Περιοδικό / Εκδότης",
},

articles_editors: {
  en: "Editors",
  gr: "Επιμελητές",
},

articles_year_label: {
  en: "Year",
  gr: "Έτος",
},

articles_publication_date: {
  en: "Publication Date",
  gr: "Ημερομηνία Δημοσίευσης",
},

articles_issn: {
  en: "ISSN",
  gr: "ISSN",
},

articles_status: {
  en: "Status",
  gr: "Κατάσταση",
},

articles_overview_abstract: {
  en: "Overview / Abstract",
  gr: "Επισκόπηση / Περίληψη",
},

articles_open_doi: {
  en: "Open DOI",
  gr: "Άνοιγμα DOI",
},
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("pf-language") || "en";
  });

  useEffect(() => {
    document.documentElement.setAttribute("lang", language === "gr" ? "el" : "en");
    localStorage.setItem("pf-language", language);
  }, [language]);

  function toggleLanguage() {
    setLanguage((l) => (l === "en" ? "gr" : "en"));
  }

  function t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry.en;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
