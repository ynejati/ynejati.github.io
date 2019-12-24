import * as React from 'react';

import { Template } from '../components/Template';

export class Main extends React.Component<{}, {}> {
  render() {
    return (
      <Template>
        <div className='main'>
          <div className='name'>YOUSUF NEJATI</div>
          <div className='profession'>- JavaScript Engineer -</div>
        </div>
        <a target="_blank" href="https://github.com/ynejati">
          <img src="dist/GitHub-Mark-Light-32px.png"/>
        </a>
      </Template>
    );
  }
}