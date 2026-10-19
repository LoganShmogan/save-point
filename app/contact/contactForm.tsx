"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import styles from "@/app/contact/contactForm.module.css";
import buttons from "@/app/shared/button.module.css";

type Status = "idle" | "sending" | "success" | "error";

// Stops accidental double sends without storing anything in the browser
const COOLDOWN_MS = 30_000;

const ContactForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [sentName, setSentName] = useState("");
  const lastSent = useRef(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    // Hidden "website" field: people never see it, spam bots fill it in
    if (value("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    if (Date.now() - lastSent.current < COOLDOWN_MS) {
      setStatus("success");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: value("name"),
          email: value("email"),
          phone: value("phone") || "Not provided",
          message: value("message"),
        },
        { publicKey, blockHeadless: true },
      );
      lastSent.current = Date.now();
      setSentName(value("name"));
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Email address
        </label>
        <p id="contact-email-hint" className={styles.hint}>
          We&apos;ll reply to this address.
        </p>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          aria-describedby="contact-email-hint"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-phone" className={styles.label}>
          Phone number <span className={styles.optional}>(optional)</span>
        </label>
        <p id="contact-phone-hint" className={styles.hint}>
          Add this if you&apos;d prefer a call back.
        </p>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={30}
          aria-describedby="contact-phone-hint"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          How can we help?
        </label>
        <p id="contact-message-hint" className={styles.hint}>
          Tell us a little about your business and what you need. Rough ideas
          are fine.
        </p>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={7}
          maxLength={5000}
          aria-describedby="contact-message-hint"
          className={styles.textarea}
        />
      </div>

      {/* Spam trap: hidden from people and screen readers */}
      <div className={styles.trap} aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <p className={styles.privacy}>
        We only use your details to reply to you. Your message is sent to our
        inbox using EmailJS. See our{" "}
        <Link href="/legal#privacy">Privacy Policy</Link>.
      </p>

      <button
        type="submit"
        className={`${buttons.button} ${styles.submit}`}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <div aria-live="polite" role="status">
        {status === "success" && (
          <p className={styles.success}>
            Thanks{sentName ? `, ${sentName}` : ""}! Your message has been
            sent. We aim to reply within 1 working day.
          </p>
        )}
        {status === "error" && (
          <p className={styles.error}>
            Sorry, your message didn&apos;t send. Please try again, or email
            us directly at{" "}
            <a href="mailto:contact@savepoint.co.nz">contact@savepoint.co.nz</a>
            .
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
