import type { HasRequiredKeys } from "type-fest";
import type * as z from "zod";

import type {
  UseFormErrorInput,
  UseFormErrors,
  UseFormInitialValues,
  UseFormOnError,
  UseFormOnSubmit,
  UseFormSubmitErrorOutput,
  UseFormSubmitInput,
  UseFormSubmitOutput,
  UseFormSubmitSuccessOutput,
} from "../../../../../../../../isomorphic/core/hooks/use-form";
import type { Schemas } from "./schemas";

export type ReadyFormInputSchema = typeof Schemas.Input;

export type ReadyFormOutputSchema = typeof Schemas.Output;

export type ReadyFormInitialValues = UseFormInitialValues<
  z.output<ReadyFormInputSchema>
>;

export type ReadyFormErrorInput = UseFormErrorInput<
  z.output<ReadyFormInputSchema>
>;

export type ReadyFormOnError = UseFormOnError<z.output<ReadyFormInputSchema>>;

export type ReadyFormSubmitInput = UseFormSubmitInput<
  z.output<ReadyFormOutputSchema>
>;

export type ReadyFormErrors = UseFormErrors<z.input<ReadyFormInputSchema>>;

export type ReadyFormSubmitErrorOutput = UseFormSubmitErrorOutput<
  z.input<ReadyFormInputSchema>
>;

export type ReadyFormSubmitSuccessOutput = UseFormSubmitSuccessOutput<
  z.output<ReadyFormInputSchema>
>;

export type ReadyFormSubmitOutput = UseFormSubmitOutput<
  z.input<ReadyFormInputSchema>,
  z.output<ReadyFormInputSchema>
>;

export type ReadyFormOnSubmit = UseFormOnSubmit<
  z.input<ReadyFormInputSchema>,
  z.output<ReadyFormInputSchema>,
  z.output<ReadyFormOutputSchema>
>;

export type ReadyFormInput = (HasRequiredKeys<
  z.output<ReadyFormInputSchema>
> extends true
  ? { initialValues: ReadyFormInitialValues }
  : { initialValues?: ReadyFormInitialValues }) & {
  onError?: ReadyFormOnError;
  onSubmit: ReadyFormOnSubmit;
};
