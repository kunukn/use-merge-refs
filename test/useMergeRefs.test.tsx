import * as React from 'react';
import * as ReactDOM from 'react-dom';
let useMergeRefs = require('../src');
let mergeRefs = useMergeRefs.default || useMergeRefs;

let App = () => {
   let ref1 = React.useRef();
   let ref2 = React.useRef();
   let ref3 = React.useRef();

  return <div ref={mergeRefs([ref1, ref2, ref3])}>app</div>;
};

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
