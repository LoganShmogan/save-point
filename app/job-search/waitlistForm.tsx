"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/app/ventures/ventures.module.css";

type Status = "idle" | "sending" | "success" | "error";

const WaitlistForm = () => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, { publicKey });
      setStatus("success");
      form.reset();
    } catch (err) {
      const status =
        err && typeof err === "object" && "status" in err
          ? (err as { status: unknown }).status
          : undefined;
      const text =
        err && typeof err === "object" && "text" in err
          ? (err as { text: unknown }).text
          : undefined;
      console.error("EmailJS send failed — status:", status, "text:", text);
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={styles.formInput}
        />
      </div>

      <div className={styles.formRow}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={styles.formInput}
        />
      </div>

      <div className={styles.formRow}>
        <label htmlFor="message" className={styles.formLabel}>
          What kind of role are you looking for? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.formTextarea}
        />
      </div>

      <button
        type="submit"
        className={styles.formSubmit}
        disabled={status === "sending"}
      >
        {status === "sending" ? "Joining..." : "Join the waitlist"}
      </button>

      {status === "success" && (
        <p className={`${styles.formStatus} ${styles.formStatusSuccess}`}>
          You&apos;re on the list — we&apos;ll be in touch when Save Point
          Job Search launches.
        </p>
      )}

      {status === "error" && (
        <p className={`${styles.formStatus} ${styles.formStatusError}`}>
          Something went wrong sending that. Please email us directly at{" "}
          <a href="mailto:contact@savepoint.cc" className={styles.inlineLink}>
            contact@savepoint.cc
          </a>
          .
        </p>
      )}
    </form>
  );
};

export default WaitlistForm;
