# use-merge-refs

[![npm version](https://img.shields.io/npm/v/@kunukn/use-merge-refs.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/use-merge-refs)
[![npm downloads](https://img.shields.io/npm/dm/@kunukn/use-merge-refs.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/use-merge-refs)
[![gzip](https://img.shields.io/bundlephobia/minzip/@kunukn/use-merge-refs.svg)](https://bundlephobia.com/result?p=@kunukn/use-merge-refs)
[![license](https://img.shields.io/github/license/kunukn/use-merge-refs)](https://github.com/kunukn/use-merge-refs/blob/master/LICENSE)

React utility to merge refs

```sh
npm install @kunukn/use-merge-refs
# or 
# yarn add @kunukn/use-merge-refs
```

## Example

```jsx
import React from 'react';
import {
  useThisThing,
  useThatThing,
  useAwesomeThing,
} from 'some-3rd-party-lib';

import useMergeRefs from '@kunukn/use-merge-refs';

const MyComponent = () => {
  // The 3rd party libs requires ref bindings.
  const [ref1, componentHeight] = useThisThing();
  const [ref2, componentWidth] = useThatThing();
  const [ref3, componentPosition] = useAwesomeThing();

  // The 3rd party libs now all have access to the same element.
  return (
    <div ref={useMergeRefs(ref1, ref2, ref3)}>
      <div>The height is: {componentHeight}</div>
      <div>The width is: {componentWidth}</div>
      <div>The position is: {componentPosition}</div>
    </div>
  );
};

// You can also use an array as the argument. e.g.
// useMergeRefs([ref1, ref2, ref3])
```

## Demo

https://codesandbox.io/s/reactjs-mergeref-pattern-r1q2q

## Why?

When you need multiple ref for the same Component. This helps merge the required refs to one callbackRef.

# License

MIT


## Inspiration from:

https://github.com/smooth-code/react-merge-refs
