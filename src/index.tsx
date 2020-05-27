import * as React from 'react';

function useMergeRefs(_params) {
  let array: any = [];
  let args = Array.prototype.slice.call(arguments);
  if (args.length === 1 && Array.isArray(args[0])) array = args[0];
  else array = args;

  let callbackRef = React.useCallback(
    (element) => {
      merge(array, element);
    },
    [array]
  );

  return callbackRef;
}

function merge(refs, element: HTMLElement) {
  refs.forEach((ref) => {
    if (typeof ref === 'function') ref(element);
    else if (ref != null) ref.current = element;
  });
}

export default useMergeRefs;
