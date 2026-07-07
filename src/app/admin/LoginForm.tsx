"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="mx-auto mt-20 max-w-sm px-4">
      <h1 className="text-2xl font-black text-brand-black">Admin login</h1>
      <label className="mt-6 flex flex-col gap-1 text-sm font-semibold text-brand-black">
        Password
        <input
          required
          name="password"
          type="password"
          className="rounded-lg border border-black/15 px-3 py-2 font-normal focus:border-brand-blue focus:outline-none"
        />
      </label>
      {state.error && <p className="mt-3 text-sm text-red-600">{state.error}</p>}
      <button
        type="submit"
        disabled={isPending}
        className="mt-6 w-full rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-black transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Checking..." : "Log in"}
      </button>
    </form>
  );
}
