import { parseYAML } from "./parse-yaml";
import { validateJSON } from "./validate-json";

type Result = {
  json?: object;
  errors?: {
    type: "parsing" | "validation";
    messages: string[];
  };
};

function resultForParseError(errorMessage: string): Result {
  return {
    errors: {
      type: "parsing",
      messages: [errorMessage],
    },
  };
}

function resultFromValidationErrors(errorsMessages: string[]): Result {
  return {
    errors: {
      type: "validation",
      messages: errorsMessages,
    },
  };
}

export function yamlToJSON(yaml: string): Result {
  const parseResult = parseYAML(yaml);

  if (parseResult.errorMessage)
    return resultForParseError(parseResult.errorMessage);

  if (parseResult.json) {
    const validationResult = validateJSON(parseResult.json);

    if (validationResult.errorMessages)
      resultFromValidationErrors(validationResult.errorMessages);

    return {
      json: parseResult.json,
    };
  }

  return {};
}
