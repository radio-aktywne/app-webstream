import "server-only";

import createClient from "openapi-fetch";
import type { paths } from "./types";

const scheme = process.env.WEBSTREAM__EMIPASS__HTTP__SCHEME || "http";
const host = process.env.WEBSTREAM__EMIPASS__HTTP__HOST || "localhost";
const port =
  process.env.WEBSTREAM__EMIPASS__HTTP__PORT === undefined
    ? 11000
    : process.env.WEBSTREAM__EMIPASS__HTTP__PORT;
const path = (process.env.WEBSTREAM__EMIPASS__HTTP__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const emipass = createClient<paths>({ baseUrl: url });
