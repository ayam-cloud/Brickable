"use client";

import { useTransition } from "react";
import { updateRequestStatus } from "./actions";
import type { RequestStatus } from "@/generated/prisma/client";

const STATUSES: RequestStatus[] = [
  "NEW",
  "IN_REVIEW",
  "QUOTED",
  "ACCEPTED",
  "DECLINED",
  "COMPLETED",
];

export function StatusSelect({ id, status }: { id: string; status: RequestStatus }) {
  const [isPending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={isPending}
      onChange={(e) => {
        const next = e.target.value as RequestStatus;
        startTransition(() => {
          updateRequestStatus(id, next);
        });
      }}
      className="rounded-lg border border-black/15 px-2 py-1 text-sm disabled:opacity-60"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s.replace("_", " ")}
        </option>
      ))}
    </select>
  );
}
