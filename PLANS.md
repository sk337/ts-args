## Project Outline

### Stage 1

* [ ] Create a MVP for the project
  * [ ] Add basic command line parsing and argument handling
  * [ ] Allow end users to create arguments psudo code
    ```typescript
    import { parse } from 'ts-args';
    // parses the command line arguments and returns a typed object
    const args = parse(process.argv, {
      assumeHashbang: true
    }).add_positional('input_file', {
      // Data type of the argument
      type: 'string',
      // key to write the argument value to
      name: "input",
      // required is a boolean, if true the argument is required (the )
      required: true,
      // help text to display to the user
      help: 'File to interact with'
    }).add_flag('verbose', {
      // required does not effect boolean flags as they are always optional and if they are not present they are false
      // in the returned object type of the argument is required ie `{input: string, verbose: boolean}`
      type: 'boolean',
      // alteritive flags to use either string or array of strings
      alias: 'v',
      help: 'Prints verbose output'
    })
    ```
    typeof args should be `{input: string, verbose: boolean}`
  * [ ] Add usage and help text generation
  * [ ] Allow usage of default values for nonboolean flags



### Stage 2

* [ ] Refine Argument Parsing behavior
  * [ ] flag chaining `-ploi "Hello"` should be the same as `-p -l -o -i "Hello"` for arg chains can only be done with flags and only the last flag can have a non boolean value unless the flag is a flag that takes a value has a default value so in the case of `-ploi "Hello"` if `-o` has a default value it will be set to that value otherwise a error (or help message) will be displayed


### Stage 3
* [ ] Misc Features
  * [ ] Add support for subcommands
  * [ ] Add support for completions
