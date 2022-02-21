import { createClient } from 'edgedb';

export * from "./dbschema/edgeql-js";
export const db = createClient();
