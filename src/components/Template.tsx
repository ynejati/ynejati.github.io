import * as React from 'react';
import bind from 'bind-decorator';
import cx from 'classnames';

import { Header } from './Header';
import { Footer } from './Footer';
import { Drawer } from './Drawer';
import { Store } from '../index';

export class Template extends React.Component<BaseProps, any> {
  mainNode: HTMLElement;

  @bind
  setMainRef(ref: HTMLDivElement) {
    this.mainNode = ref;
  }

  @bind
  handleDrawerOverlayClick() {
    this.props.store.showDrawer = false;
  }

  // TODO: Transistions 
  @bind
  renderDrawer(): JSX.Element {
    const { store } = this.props;

    const classes: string = cx('drawer-container', {
      'hide': !store.showDrawer
    });

    const overlayClasses: string = cx('drawer-overlay', {
      'hide': !store.showDrawer
    })

    return (
      <React.Fragment>
        <div className={classes}>
          <Drawer store={store} />
        </div>
        <div className={overlayClasses} onClick={this.handleDrawerOverlayClick}>
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className={`template ${this.props.store.theme}`}>
        <div className='header-container'>
          <Header store={this.props.store} />
        </div>
        <div className='main-container' ref={this.setMainRef}>
          {this.renderDrawer()}
          {this.props.children}
        </div>
        <div className='footer-container'>
          <Footer store={this.props.store} />
        </div>
      </div >
    );
  }
}

export interface BaseProps {
  store: Store;
}