import * as React from 'react';
import bind from 'bind-decorator';

export class Header extends React.Component<{}, {}> {
  @bind
  renderSignature(): JSX.Element {
    return (
      <div 
        className='signature'
      >
        Yousuf Nejati
      </div>
    );
  }

  render() {
    return (
      <div className='header'>
        {this.renderSignature()}
      </div>
    );
  }
}