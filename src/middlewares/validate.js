import { validationResult, body, param, query } from "express-validator";

/* The validate.js file should contain reusable validation middleware functions 
for your Express routes. These functions ensure that incoming requests contain 
valid and expected data before processing them. */

// Middleware to validate incoming requests and return errors if any.

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Example Validation for creating a new project.

export const validateCreateProject = [
  body("name")
    .isString()
    .withMessage("Project name must be a string")
    .notEmpty()
    .withMessage("Project name cannot be empty"),
  validateRequest,
];
