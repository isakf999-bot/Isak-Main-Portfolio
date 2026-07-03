// ============================================================
// CONTACT-SIDA — Tre kort: intro/öppen för uppdrag, vad jag kan
// hjälpa till med, samt kontaktdetaljer med ikoner. Längst ner ett
// formulär där besökaren fyller i sin mail + meddelande och mailet
// skickas direkt via EmailJS (ingen backend behövs).
// Tar emot setPage för "See projects"-knappen.
// ============================================================
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  PhoneIcon,
  EmailIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "../components/icons";
import "./contact.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact({ setPage }) {
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_email: senderEmail, message },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus("sent");
        setSenderEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  }

  return (
    <section className="contact-section">
      <div className="section-title-row">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something great together</h2>
        </div>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <p className="contact-kicker">Open for collaborations</p>
          <p className="contact-copy">
            I enjoy working on clean UI, responsive interfaces, and thoughtful web experiences. If you are looking for a front-end developer for a project, a redesign, or a concept build, I’d love to hear about it.
          </p>
          <div className="contact-actions">
            <a href="https://github.com/isakf999-bot" target="_blank" rel="noreferrer" className="contact-link">
              View GitHub
            </a>
            <button className="secondary-btn" onClick={() => setPage("portfolio")}>
              See projects
            </button>
          </div>
        </article>

        <article className="contact-card alt">
          <p className="contact-kicker">What I can help with</p>
          <ul className="contact-list">
            <li>Responsive landing pages and marketing sites</li>
            <li>React-based UI components and interfaces</li>
            <li>Design-to-code work with Figma handoff</li>
            <li>Clean, accessible front-end polish and refinements</li>
          </ul>
        </article>

        <article className="contact-card details">
          <p className="contact-kicker">Contact details</p>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><PhoneIcon /></span>
            <span className="contact-detail-value">+46 76 251 41 21</span>
          </div>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><EmailIcon /></span>
            <span className="contact-detail-value">Isakf999@gmail.com</span>
          </div>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><InstagramIcon /></span>
            <span className="contact-detail-value">Isakforsberg11</span>
          </div>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><TwitterIcon /></span>
            <span className="contact-detail-value">FoppaCS</span>
          </div>
          <div className="contact-detail-row">
            <span className="contact-detail-label"><FacebookIcon /></span>
            <span className="contact-detail-value">Isak Forsberg</span>
          </div>
        </article>
      </div>

      <article className="contact-card form-card">
        <p className="contact-kicker">Send me a message</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-field">
            <span>Your Gmail</span>
            <input
              type="email"
              required
              placeholder="yourname@gmail.com"
              value={senderEmail}
              onChange={(e) => {
                setSenderEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
            />
          </label>
          <label className="form-field">
            <span>Message</span>
            <textarea
              required
              rows={5}
              placeholder="What would you like to build together?"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
            />
          </label>
          <div className="form-actions">
            <button type="submit" className="primary-btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && (
              <span className="form-status">Thanks! Your message is on its way.</span>
            )}
            {status === "error" && (
              <span className="form-status error">Something went wrong — try again.</span>
            )}
          </div>
        </form>
      </article>
    </section>
  );
}
