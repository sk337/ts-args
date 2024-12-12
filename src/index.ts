/** Configuration options for command line parser */
export interface tsArgsOptions {
  /** Assume CLI script uses Shebang syntax */
  assumeShebang?: boolean;
  /** Strip file extension from default project name (e.x. `script.js` -> `script`) */
  stripExecFileExtension?: boolean;
  /** Override auto generated project name */
  projectName?: string;
}

/** Valid Arument Datatypes */
export type dataTypes =
  | "file"
  | "string"
  | "number"
  | "boolean"
  | "directory"
  | "oneof";

interface basicArg {
  /** Data Type of the Argument */
  type: dataTypes;
  /** aliases for the command */
  alias?: string[] | string;
  /** Whether or not the argument is required or optinal */
  required?: boolean;
  /** set output key name */
  name?: string;
}

/** String type arugment */
export interface stringArg extends basicArg {
  type: "string";
  /** Allow multiple values */
  allowMultible?: boolean;
  /** Default Value for String type Arguments */
  default?: string;
}

/* Number type argument */
export interface numberArg extends basicArg {
  type: "number";
  /** Allow multiple values */
  allowMultible?: boolean;
  /** Default Value for number type Arguments */
  default?: number;
}

export interface oneOfArg extends basicArg {
  type: "oneof";
  /** List of valid values */
  values: string[];
  /** Default Value for oneOf type Arguments */
  default?: string;
  /** Allow multiple values */
  allowMultible?: boolean;
}

export type argType = stringArg | numberArg | oneOfArg;

class Parser {
  args: Record<string, argType>;
  constructor() {
    this.args = {};
  }

  /**
   * add a flag to the parser
   * @param argName name of the flag
   * @param argOpts options for the flag
   * @returns the parser object
   */
  add_flag(argName: string, argOpts: argType): Parser {
    this.args[argOpts.name || argName] = argOpts;
    return this;
  }

  /**
   * adds a positional argument to the parser
   * @param argOpts options for the positional argument
   * @returns the parser object
   */
  add_positional(argOpts: argType): Parser {
    this.args[argOpts.name || argOpts.type] = argOpts;
    return this;
  }
}

/**
 * Main parser function
 * @param argv Process ARGV
 * @param parserOpts Options for the parser
 * @returns a new parser object
 */
export function parser(argv: string[], parserOpts: tsArgsOptions): Parser {
  return new Parser();
}
