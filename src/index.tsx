import * as React from 'react';

const useMergeRefs = (array = []) => {
  let callbackRef = React.useCallback(
    element => {
      mergeRefs(array, element);
    },
    [...array]
  );

  return callbackRef;
};

//export default useMergeRefs;
module.exports = useMergeRefs;

// Inspiration from https://github.com/smooth-code/react-merge-refs
function mergeRefs(refs, element) {
  refs.forEach(ref => {
    if (typeof ref === 'function') ref(element);
    else if (ref != null) ref.current = element;
  });
}
