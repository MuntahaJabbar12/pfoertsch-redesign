import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Publications from "./pages/Publications";
import Books from "./pages/Books";
import Videos from "./pages/Videos";
import Insights from "./pages/Insights";
import Speaking from "./pages/Speaking";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import CaseStudies from "./pages/CaseStudies";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/expertise" element={<Expertise />} />

              <Route path="/publications" element={<Publications />} />

              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<BookDetails />} />

              <Route path="/articles" element={<Articles />} />

              {/* FIXED */}
              <Route path="/case-studies" element={<CaseStudies />} />

              <Route path="/videos" element={<Videos />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;