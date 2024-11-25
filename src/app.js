import express from "express";
import morgan from "morgan";
import projectRoutes from "./routes/projects.js";
import todoRoutes from "./routes/todos.js";

const app = express();

// Middleware
app.use(morgan("dev")); // Logging middleware to enhance console logs during development

// Register controllers/routers
app.use("/projects", projectRoutes); // Routes for handling project-related requests
app.use("/todos", todoRoutes); // Routes for handling todo-related requests

// Start the web server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`ZenTasks is live at http://localhost:${PORT}`);
});
