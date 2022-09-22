import { rest } from 'msw';
import { example } from './api/example';

export const handlers = [
  rest.get(`/example`, example),
];