import * as React from 'react';
import bind from 'bind-decorator';

import { Button } from '../components/Button';

export class Header extends React.Component<any, any> {
  @bind
  handleHamburgerClick(e: React.SyntheticEvent<HTMLButtonElement>) {
    const { 
      showDrawer 
    } = this.props.store;

    const show: boolean = showDrawer;
    this.props.store.showDrawer = !show;
  }

  @bind
  renderHamburger(): JSX.Element {
    const { 
      showHamburger 
    } = this.props.store;

    if (showHamburger) {
      return (
        <div className='header-nav header-hamburger'>
          <Button
            classes={'shadow-1'}
            onClick={this.handleHamburgerClick}
          >
            <span>
              <svg width="34" height="34" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="#ffff" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
            </span>
          </Button>
        </div>
      );
    }
  }

  @bind
  renderHeaderNav(): JSX.Element {
    const {
      showHamburger,
      handleProjectsClick,
      handleBlogClick,
      handleAboutClick
     } = this.props.store;

    if (!showHamburger) {
      return (
        <div className='header-nav'>
          <Button
            classes={'header-nav-button shadow-1'}
            text={'Projects'}
            onClick={handleProjectsClick}
          />
          <Button
            classes={'header-nav-button shadow-1'}
            text={'Blog'}
            onClick={handleBlogClick}
          />
          <Button
            classes={'header-nav-button shadow-1'}
            text={'About'}
            onClick={handleAboutClick}
          />
        </div>
      );
    }
  }

  @bind
  renderSignature(): JSX.Element {
    const {
      handleSignatureClick
    } = this.props.store;

    return (
      <div 
        className='signature'
        onClick={handleSignatureClick}
      >
        Yousuf Nejati
      </div>
    );
  }

  render() {
    return (
      <div className='header'>
        {this.renderHamburger()}
        {this.renderHeaderNav()}
        {this.renderSignature()}
      </div>
    );
  }
}