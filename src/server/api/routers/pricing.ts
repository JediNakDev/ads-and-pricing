import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const pricingRouter = createTRPCRouter({
  get: publicProcedure.input(z.string()).query(async ({ input }) => {
    const pricing = await db.query.pricing.findFirst({ with: { name: input } });
    return pricing;
  }),
});
