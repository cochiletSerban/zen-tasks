import { Router } from "express";
import db from "../models/db.js";
import { validateCreateProject } from "../middlewares/validate.js";
import { v4 as uuidv4 } from "uuid";

const router = Router();

/* 
// Project model for reference
Project {
  id: string; // generated with uuidv4()
  title: string; // max length 256
  description: string; // max length 256
  todos: string[]; // contains the todo IDs of the todos in the project
  priorityScore?: number; // (optional) could be used to store the priority score instead of
  // computing it on every request
}
*/

// TODO: #1 Start with this (you need a project to which you can add todos)
// Create a new project
router.post("/", validateCreateProject, (req, res) => {
  // ValidateCreateProject middleware used for this route
  const newProjectID = uuidv4();
  // Validate that the title is not empty
  // Enforce a maximum of 256 characters on the title and description fields
  // Use uuid to create a unique ID for all projects (this field should not be modified by any API call)
  res.sendStatus(201);
});

// Update an existing project
router.patch("/:id", (req, res) => {
  // Update one or all fields of a project (e.g., add todos to a project)
  // Besides the poject title and description the endpoint will receive either:
  //   - A new todo that is not yet in the database
  //   - The ID of an existing todo
  // If it is an existing todo, ensure it actually exists in the database
  // For a new todo, validate the title field to ensure it is not empty
  // Return a 400 Bad Request error if the body is invalid or the todo ID does not exist in the database
  //
  // valid req.body example {
  //    title: string;
  //    description: string;
  //    todoId: [2234-wdf4-sdfsd, 23423d-wf2r-sdfd];
  // }
  // OR
  // {
  //   title: string;
  //   todo: {
  //     title: string; // max length 256
  //     description: string; // max length 256
  //     priority: number; // number, only in the range 1-3
  //   }
  // }

  res.sendStatus(201);
});

// TODO: #2
// Get all projects
router.get("/", async (req, res) => {
  // Sort projects by default based on the priority score of the todos contained within each project
  // Example: Project "test" has 2 todos:
  //   - "todo1" with priority "3"
  //   - "todo2" with priority "2"
  // The priority score of the "test" project is 5
  // Additionally, populate all the todos inside the projects: for each todo ID in the project, read it from the database
  // and add the full todo object to the final response
  await db.read();
  const allDbData = db.data;
  res.send(allDbData.projects);
});

// Delete a project
router.delete("/:id", (req, res) => {
  // Perform a cascade delete: delete all todos associated with the project as well
  res.sendStatus(204);
});

export default router;
