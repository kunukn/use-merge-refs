import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useClickAway, useMeasure } from 'react-use';

//import useMergeRefs from '../.';
import useMergeRefs from '../dist/.';

const App = () => {
  const refClickAway = React.useRef(null);
  const [refMeasure, { width, height }] = useMeasure();

  let mergedRefs = useMergeRefs([refClickAway, refMeasure]);

  useClickAway(refClickAway, () => {
    console.log('clicked outside', new Date());
  });

  return (
    <div ref={mergedRefs} style={{ outline: '1px solid' }}>
      <div> Demo </div>
      <div> width: {width} </div>
      <div> height: {height} </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
