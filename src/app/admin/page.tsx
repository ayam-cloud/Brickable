import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidAdminToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/products";
import { LoginForm } from "./LoginForm";
import { StatusSelect } from "./StatusSelect";
import { logout } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;

  if (!isValidAdminToken(token)) {
    return <LoginForm />;
  }

  const [requests, orders] = await Promise.all([
    prisma.customRequest.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.order.findMany({ orderBy: { createdAt: "desc" }, take: 50 }),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-brand-black">Admin dashboard</h1>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold hover:bg-black/5"
          >
            Log out
          </button>
        </form>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-brand-black">
          Custom requests ({requests.length})
        </h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-black/10">
          <table className="min-w-full divide-y divide-black/10 text-sm">
            <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase tracking-wide text-black/50">
              <tr>
                <th className="px-4 py-3">Received</th>
                <th className="px-4 py-3">Name / Business</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Details</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              {requests.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-black/40">
                    No custom requests yet.
                  </td>
                </tr>
              )}
              {requests.map((r) => (
                <tr key={r.id} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-black/60">
                    {r.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-brand-black">{r.name}</div>
                    {r.businessName && (
                      <div className="text-black/50">{r.businessName}</div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <a href={`mailto:${r.email}`} className="text-brand-blue hover:underline">
                      {r.email}
                    </a>
                  </td>
                  <td className="max-w-xs px-4 py-3 text-black/70">
                    <p className="line-clamp-3">{r.description}</p>
                    {r.referenceUrl && (
                      <a
                        href={r.referenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline"
                      >
                        Reference link
                      </a>
                    )}
                    {(r.budget || r.timeline) && (
                      <p className="mt-1 text-xs text-black/40">
                        {r.budget && <>Budget: {r.budget} </>}
                        {r.timeline && <>· Timeline: {r.timeline}</>}
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <StatusSelect id={r.id} status={r.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-lg font-bold text-brand-black">Orders ({orders.length})</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border border-black/10">
          <table className="min-w-full divide-y divide-black/10 text-sm">
            <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase tracking-wide text-black/50">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/10">
              {orders.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-black/40">
                    No orders yet.
                  </td>
                </tr>
              )}
              {orders.map((o) => (
                <tr key={o.id}>
                  <td className="whitespace-nowrap px-4 py-3 text-black/60">
                    {o.createdAt.toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 font-semibold text-brand-black">{o.productName}</td>
                  <td className="px-4 py-3 text-black/60">{o.customerEmail ?? "—"}</td>
                  <td className="px-4 py-3">{formatPrice(o.amountTotal)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        o.status === "PAID"
                          ? "bg-brand-green/15 text-brand-green"
                          : o.status === "CANCELED"
                            ? "bg-red-100 text-red-700"
                            : "bg-zinc-100 text-black/60"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
