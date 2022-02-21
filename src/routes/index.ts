import type { RequestHandler } from '@sveltejs/kit';
import { e, db } from '$db';

export const get: RequestHandler = ({ params }) => {
  return {
    body: { count: 22 }
  }

}
