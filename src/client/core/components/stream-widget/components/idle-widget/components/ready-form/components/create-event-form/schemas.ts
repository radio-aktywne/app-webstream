import * as z from "zod";

export const Schemas = {
  Input: z.object({
    end: z.codec(
      z.string().nullable(),
      z.iso.datetime({ local: true }).optional(),
      {
        decode: (value) => value?.replace(" ", "T") ?? undefined,
        encode: (value) => value?.replace("T", " ") ?? null,
      },
    ),
    start: z.codec(
      z.string().nullable(),
      z.iso.datetime({ local: true }).optional(),
      {
        decode: (value) => value?.replace(" ", "T") ?? undefined,
        encode: (value) => value?.replace("T", " ") ?? null,
      },
    ),
  }),
  Output: z.object({
    end: z
      .string()
      .nullable()
      .pipe(
        z
          .string()
          .transform((value) => value.replace(" ", "T"))
          .pipe(z.iso.datetime({ local: true })),
      ),
    start: z
      .string()
      .nullable()
      .pipe(
        z
          .string()
          .transform((value) => value.replace(" ", "T"))
          .pipe(z.iso.datetime({ local: true })),
      ),
  }),
};
