"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function RequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-8 text-center">
        <h3 className="text-xl font-bold text-brand-black">Request sent!</h3>
        <p className="mt-2 text-black/60">
          Thanks for reaching out — we&apos;ll follow up by email with next steps and pricing.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-semibold text-brand-black">
          Your name
          <input
            required
            name="name"
            type="text"
            className="rounded-lg border border-black/15 px-3 py-2 font-normal focus:border-brand-blue focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-brand-black">
          Email
          <input
            required
            name="email"
            type="email"
            className="rounded-lg border border-black/15 px-3 py-2 font-normal focus:border-brand-blue focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm font-semibold text-brand-black">
        Business name (optional)
        <input
          name="businessName"
          type="text"
          className="rounded-lg border border-black/15 px-3 py-2 font-normal focus:border-brand-blue focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-semibold text-brand-black">
        Tell us about your idea
        <textarea
          required
          name="description"
          rows={5}
          placeholder="Theme, colors, logo details, or the vibe you're going for..."
          className="rounded-lg border border-black/15 px-3 py-2 font-normal focus:border-brand-blue focus:outline-none"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm font-semibold text-brand-black">
          Reference link (logo, photos, Pinterest, etc.)
          <input
            name="referenceUrl"
            type="url"
            placeholder="https://"
            className="rounded-lg border border-black/15 px-3 py-2 font-normal focus:border-brand-blue focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-brand-black">
          Budget (optional)
          <input
            name="budget"
            type="text"
            placeholder="e.g. $50-$100"
            className="rounded-lg border border-black/15 px-3 py-2 font-normal focus:border-brand-blue focus:outline-none"
          />
        </label>
      </div>
      <label className="flex flex-col gap-1 text-sm font-semibold text-brand-black">
        Timeline (optional)
        <input
          name="timeline"
          type="text"
          placeholder="e.g. Needed by Chanukah"
          className="rounded-lg border border-black/15 px-3 py-2 font-normal focus:border-brand-blue focus:outline-none"
        />
      </label>

      {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-black transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send request"}
      </button>
    </form>
  );
}
