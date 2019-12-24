import * as React from 'react';

import { Button } from '../components/Button';

export class Drawer extends React.Component<any, any> {
  render() {
    const {
      handleProjectsClick,
      handleBlogClick,
      handleAboutClick
    } = this.props.store;

    return (
      <div className='drawer'>
        <div className='drawer-item' style={{ paddingTop: 10 }}>
          <Button 
          classes={'drawer-button shadow-1'} 
          text={'Projects'}
          onClick={handleProjectsClick}
           />
        </div>
        <div className='drawer-item'>
          <Button 
          classes={'drawer-button shadow-1'}
           text={'Blog'} 
           onClick={handleBlogClick}
           />
        </div>
        <div className='drawer-item'>
          <Button 
          classes={'drawer-button shadow-1'}
           text={'About'}
           onClick={handleAboutClick}
            />
        </div>
      </div>
    );
  }
}