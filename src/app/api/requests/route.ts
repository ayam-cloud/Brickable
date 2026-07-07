import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bodySchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  businessName: z.string().max(200).optional().or(z.literal("")),
  description: z.string().min(1).max(4000),
  referenceUrl: z.string().url().optional().or(z.literal("")),
  budget: z.string().max(200).optional().or(z.literal("")),
  timeline: z.string().max(200).optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check your form and try again." }, { status: 400 });
  }

  const { name, email, businessName, description, referenceUrl, budget, timeline } = parsed.data;

  const request = await prisma.customRequest.create({
    data: {
      name,
      email,
      businessName: businessName || null,
      description,
      referenceUrl: referenceUrl || null,
      budget: budget || null,
      timeline: timeline || null,
    },
  });

  return NextResponse.json({ id: request.id });
}
