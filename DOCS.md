# Docs

> currently under construction for now this file is just an example of how i plan the library to be used


```typescript
import { parse } from 'ts-args';

const args = parse(
  process.argv,
  {
    assumeHashbang: true
  })
  .add_positional(
    'input_file',
    {
      type: 'file',
      name: "input",
      required: true,
      help: 'File to interact with'
    }
  )
  .add_flag(
    'verbose',
    {
      type: 'boolean',
      alias: 'v',
      help: 'Prints verbose output'
    }
  )
  .add_flag(
    'preset',
    {
      type: 'oneof',
      values: ['fast', 'slow'],
      alias: 'p',
      help: 'Preset to use'
    }
  )
  .parse();
```


### argument types

* `string` - a string
* `number` - a number
* `boolean` - a boolean (switch flag behavior)
* `file` - a file path (string that is a file only distinguishable by the type and completions generation)
* `directory` - a directory path (string that is a directory only distinguishable by the type and completions generation)
* `oneof` - a string that must be one of the values in the `values` array
