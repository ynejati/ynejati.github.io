import * as React from 'react';
import bind from 'bind-decorator';

import { Header } from './Header';
import { Footer } from './Footer';

export class Template extends React.Component<{}, {}> {
  mainNode: HTMLElement;

  @bind
  setMainRef(ref: HTMLDivElement) {
    this.mainNode = ref;
  }

  render() {
    return (
      <div className={`template dark`}>
        <div className='header-container'>
          <Header/>
        </div>
        <div className='main-container' ref={this.setMainRef}>
          {this.props.children}
        </div>
        <div className='footer-container'>
          <Footer />
        </div>
      </div >
    );
  }
}
