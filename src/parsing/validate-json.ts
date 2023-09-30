// Validaiton

import Validator from "z-schema";
import resumeSchema from "./resume-schema.json";

const validator = new Validator({});

type ValidationResult = {
  errorMessages?: string[];
};

export function validateJSON(json: object): ValidationResult {
  validator.validate(json, resumeSchema);
  const errors = validator.getLastErrors();

  if (errors) {
    const errorMessages = errors.map(
      (error) => `${error.path}: ${error.message}`
    );
    return { errorMessages };
  }

  return {};
}
