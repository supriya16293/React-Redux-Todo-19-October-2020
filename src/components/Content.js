import React from 'react';

import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Content = () => (
  <div>
    <div style={{width: '100%'}}>
      <LeftSide />
    </div>
    <div style={{margin: '0 auto', textAlign: 'center'}}>
      <RightSide className="content"/>
    </div>
  </div>
);

export default Content;
