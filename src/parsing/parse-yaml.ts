import YAML from "yaml";

type ParseResult = {
  json?: object;
  errorMessage?: string;
};

export function parseYAML(yaml: string): ParseResult {
  try {
    const json = YAML.parse(yaml, { prettyErrors: true });
    return { json };
  } catch (error) {
    return { errorMessage: (error as Error).message };
  }
}
