import * as React from 'react';
import * as ReactDOM from 'react-dom';
let useMergeRefs = require('../src');
let mergeRefs = useMergeRefs.default || useMergeRefs;

console.log(typeof mergeRefs);

let App = () => {
  // let ref1 = React.useRef();
  // let ref2 = React.useRef();
  // let ref3 = React.useRef();

   let mergedRefs = mergeRefs();
   console.log(mergedRefs);

  return <div>app</div>;
};

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
