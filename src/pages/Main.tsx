import * as React from 'react';

import { Template } from '../components/Template';

export class Main extends React.Component<any, any> {
  render() {
    return (
      <Template store={this.props.store}>
        <div className='main'>
          <div className='name'>YOUSUF NEJATI</div>
          <div className='profession'>- JavaScript Engineer -</div>
        </div>
      </Template>
    );
  }
}