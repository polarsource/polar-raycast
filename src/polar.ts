import { Polar } from "@polar-sh/sdk";
import fetch, { Headers, Request, Response } from "node-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
  globalThis.Headers = Headers;
  globalThis.Request = Request;
  globalThis.Response = Response;
}

export const buildPolarClient = (accessToken?: string) => {
  return new Polar({
    accessToken,
  });
};
