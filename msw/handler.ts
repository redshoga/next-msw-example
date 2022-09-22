import { rest } from "msw";
import { example } from "./api/example";
import { dynamic } from "./api/dynamic";

export const handlers = [
  rest.get(`/example`, example),
  rest.get(`/dynamic`, dynamic),
];
