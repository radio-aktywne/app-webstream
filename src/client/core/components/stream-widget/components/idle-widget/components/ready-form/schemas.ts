import * as z from "zod";

export const Schemas = {
  Input: z.object({
    instance: z.codec(z.string().nullable(), z.string().nullish(), {
      decode: (value) => value ?? undefined,
      encode: (value) => value ?? null,
    }),
    record: z.codec(z.boolean(), z.boolean().optional(), {
      decode: (value) => value,
      encode: (value) => value ?? false,
    }),
    title: z.codec(z.string(), z.string().optional(), {
      decode: (value) => value || undefined,
      encode: (value) => value ?? "",
    }),
  }),
  Output: z.object({
    instance: z.string().nullable().pipe(z.string().min(1)),
    record: z.boolean(),
    title: z.string().pipe(z.string().min(1)),
  }),
};
