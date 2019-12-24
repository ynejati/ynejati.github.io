import * as React from 'react';

import { Template } from '../components/Template';

export class About extends React.Component<any, any> {
  render() {
    return (
      <Template store={this.props.store}>
        <div className='about'>
          <div className='title'>
            <h1>About</h1>
          </div>
          <div className='content'>
            <p>
              {`Software developer, natural resource management specialist, and business enthusiast.
    
            My goal is clear, to use software development as a tool to craft
            solutions to modern day problems, for the greater good of society.
            To build something bold, beautiful, and disruptive towards our neglect
            of finite resources. This website is my portfolio, a culmination of my
            ideas, contributions, and projects, as I work towards achieving my goal.`}
            </p>
          </div>
        </div>
      </Template>
    );
  }
}