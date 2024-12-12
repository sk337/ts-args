## Project Outline

### Stage 1

* [ ] Create a MVP for the project
  * [ ] Add basic command line parsing and argument handling
  * [ ] Allow end users to create arguments example psudo code
    ```typescript
    import { parse } from 'ts-args';
    // parses the command line arguments and returns a typed object
    const args = parse(process.argv, {
      // assume the script is a shebang script (90% of the time this is true)
      assumeShebang: true,
      // strip the file extension from the executable file (ex `./script.js` -> `./script`)
      stripExecFileExtension: true,
      // Override project name (default is the name of the executable file)
      projectName: 'my-script',
    }).add_positional('input_file', {
      // Data type of the argument
      type: 'file',
      // key to write the argument value to
      name: "input",
      // required is a boolean, if true the argument is required (the )
      required: true,
      // if true the argument can be passed multiple times and the value will be an array of the values can only be used one with positional arguments
      // but there can be multiple `allow_multible` flags
      allowMultiple: false,
      alias: 'i',
      // help text to display to the user
      help: 'File to interact with'
    }).add_flag('verbose', {
      // required does not effect boolean flags as they are always optional and if they are not present they are false
      // in the returned object type of the argument is required ie `{input: string, verbose: boolean}`
      type: 'boolean',
      // alteritive flags to use either string or array of strings
      alias: 'v',
      help: 'Prints verbose output'
    }).oneof('preset', {
      // oneof is a type that takes a array of values that the argument can be
      type: 'oneof',
      // the set of values that the argument can be
      values: ['fast', 'slow'],
      // alias for the argument
      alias: 'p',
      // the default value for the argument (must be one of the values in the values array)
      default: 'fast',
      help: 'Preset to use'
    }).parse();
    ```
    typeof args should be `{input: string, verbose: boolean}`
  * [ ] Add usage and help text generation
  * [ ] Allow usage of default values for nonboolean flags
  * [ ] Prolly will assume argument flag arguments w/o no default value are required



### Stage 2

* [ ] Refine Argument Parsing behavior
  * [ ] flag chaining `-ploi "Hello"` should be the same as `-p -l -o -i "Hello"` for arg chains can only be done with flags and only the last flag can have a non boolean value unless the flag is a flag that takes a value has a default value so in the case of `-ploi "Hello"` if `-o` has a default value it will be set to that value otherwise a error (or help message) will be displayed
* [ ] Add Tests and CI for testing PR's and commits


### Stage 3
* [ ] Misc Features
  * [ ] Add support for subcommands
  * [ ] Add support for completions
