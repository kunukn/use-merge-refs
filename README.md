# use-merge-refs

[![npm version](https://img.shields.io/npm/v/@kunukn/use-merge-refs.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/use-merge-refs)
[![npm downloads](https://img.shields.io/npm/dm/@kunukn/use-merge-refs.svg?style=flat-square)](https://www.npmjs.com/package/@kunukn/use-merge-refs)
[![gzip](https://img.shields.io/bundlephobia/minzip/@kunukn/use-merge-refs.svg)](https://bundlephobia.com/result?p=@kunukn/use-merge-refs)
[![license](https://img.shields.io/github/license/kunukn/use-merge-refs.svg)](https://github.com/kunukn/use-merge-refs/blob/master/LICENSE)

React utility to merge refs

```sh
npm install @kunukn/use-merge-refs
```

## Example

```jsx
import React from 'react';
import useMergeRefs from '@kunukn/use-merge-refs';

const MyComponent = ({ children }) => {
  const ref1 = React.useRef();
  const ref2 = React.useRef();

  // Merging the required ref bindings.
  let mergedRefs = useMergeRefs([ref1, ref2]);

  return <div ref={mergedRefs}>{children}</div>;
};
```

## Demo

https://codesandbox.io/s/reactjs-mergeref-pattern-r1q2q


## Why?

When you need multiple ref for the same Component. This helps merge the required refs to one callbackRef.

# License

MIT
