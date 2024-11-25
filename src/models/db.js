// db config and initialization
import { JSONFilePreset } from "lowdb/node";
const db = await JSONFilePreset("db.json", { projects: [], todos: [] });
export default db;
