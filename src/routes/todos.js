import { Router } from "express";
import db from "../models/db.js";
import { v4 as uuidv4 } from "uuid";

const router = Router();

/*
// Todo model for reference
Todo {
  id: string; // generated with uuidv4()
  title: string; // max length 256
  description: string; // max length 256
  priority: number; // number, only in the range 1-3
  project: string; // ID of the project to which the todo belongs
}
*/

// TODO: #3
// Create a new todo
router.post("/", async (req, res) => {
  const newTodoID = uuidv4();
  await db.read();
  // Validate that the title field is not null or empty
  // Enforce a maximum limit of 256 characters for the description and title fields
  // Validate that the priority field is a number between 1 and 3, and store it as a number (NOT a string)
  // Use uuid to create a unique ID for all todos (this field should not be modified by any API call)
  // Use new Date to populate the createdAt field with a timestamp
  // If the project ID is present:
  //   - Validate that the project exists
  //   - Add the todo ID to the project's list of todos
  // Otherwise, just create the todo
  res.sendStatus(201);
});

// TODO: #4
// Get all todos
router.get("/", async (req, res) => {
  // Should return all todos of a project if the projectId query param is present and valid
  // Should sort all todos by priority or date if the sort query param is present and valid
  // Validate that the sort param matches exactly 'priority' or 'date'
  const { projectId, sort } = req.query; // sort = 'priority' or 'date'
  res.sendStatus(201);
});

// Get todo by ID
router.get("/:id", async (req, res) => {
  // If the todo exists in the database, send it. If not, return a 400 Bad Request
  res.sendStatus(201);
});

export default router;
