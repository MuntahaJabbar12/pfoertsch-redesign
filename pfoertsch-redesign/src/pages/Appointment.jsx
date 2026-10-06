import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import "./Appointment.css";

function Appointment() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      // NOTE for developer: replace this endpoint with the real Formspree
      // form ID created specifically for appointment requests (keep this
      // separate from the Contact form's endpoint so the two inquiry
      // types don't get mixed together in the same inbox thread).
      const response = await fetch("https://formspree.io/f/moeqojyo", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="appointment-page">

      <SEO
        title="Book an Appointment"
        description="Schedule a conversation with Prof. Waldemar Pfoertsch for academic discussions, consulting, speaking engagements, or research collaboration."
        path="/appointment"
      />


      <section className="appointment-hero">
        <p className="eyebrow">{t("appt_eyebrow")}</p>

        <h1>{t("appt_headline")}</h1>

        <p>{t("appt_intro")}</p>
      </section>

      <section className="appointment-form-section">

        {status !== "sent" ? (
          <form onSubmit={handleSubmit} className="appointment-form">

            <div className="form-group">
              <label htmlFor="service">{t("appt_service")}</label>

              <select id="service" name="Service" required>
                <option>{t("appt_service_1")}</option>
                <option>{t("appt_service_2")}</option>
                <option>{t("appt_service_3")}</option>
                <option>{t("appt_service_4")}</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">{t("appt_date")}</label>
              <input id="date" name="Date" type="date" required />
            </div>

            <div className="form-group">
              <label htmlFor="time">{t("appt_time")}</label>

              <select id="time" name="Time" required>
                <option>09:00 AM</option>
                <option>11:00 AM</option>
                <option>02:00 PM</option>
                <option>04:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="name">{t("appt_name")}</label>
              <input id="name" name="Name" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("appt_email")}</label>
              <input id="email" name="Email" type="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t("appt_message")}</label>

              <textarea id="message" name="Message" rows="5"></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={status === "sending"}>
              {status === "sending" ? t("appt_sending") : t("appt_submit")}
            </button>

            {status === "error" && (
              <p className="form-status error">{t("appt_error")}</p>
            )}

          </form>
        ) : (
          <div className="success-box">

            <h2>{t("appt_thank_you")}</h2>

            <p>{t("appt_submitted")}</p>

          </div>
        )}

      </section>

    </main>
  );
}

export default Appointment;