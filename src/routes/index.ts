import type { RequestHandler } from '@sveltejs/kit';
import edgedb from 'edgedb';
import e from "../../dbschema/edgeql-js";

const db = edgedb.createClient();

export const get: RequestHandler = async ({ params }) => {
  let query = e.select(e.People);

  let people = await db.run(people);

  return {
    body: { people }
  }
}
