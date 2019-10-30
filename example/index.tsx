import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useClickAway, useMeasure } from 'react-use';

import pleaseMergeTheRefs from '../.';
//import pleaseMergeTheRefs from '../dist/.';

const App = () => {
  const refClickAway = React.useRef(null);
  const [refMeasure, { width, height }] = useMeasure();

  useClickAway(refClickAway, () => {
    console.log('clicked outside', new Date());
  });

  return (
    <div ref={pleaseMergeTheRefs(refClickAway, refMeasure)} style={{ outline: '1px solid' }}>
      <div> Demo </div>
      <div> width: {width} </div>
      <div> height: {height} </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
