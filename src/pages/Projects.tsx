import * as React from 'react';

import { Template } from '../components/Template';

export class Projects extends React.Component<any, any> {
  render() {
    return (
      <Template store={this.props.store}>
        <div>Projects</div>

      </Template>
    );
  }
}


interface ComponentProps {
  forwardRef: React.RefObject<any>;
}

// This is considered a Higher Order Component (HOC)
export function componentWrapper(WrappedComponent: React.ComponentClass<any, any>) {
  
  class Component extends React.Component<ComponentProps, any> {
    render() {
      const {forwardRef, ...rest} = this.props;

      return (
        // @ts-ignore
        <WrappedComponent ref={forwardRef} {...rest} />
      );
    }
  }

  return React.forwardRef((props: any, ref: React.RefObject<any>) => {
    return <Component forwardRef={ref} {...props} />
  });
}



const FancyButton = React.forwardRef((props: any, ref: React.RefObject<HTMLButtonElement>) => (
  <button ref={ref}>
    {props.children}
  </button>
));

// const ref: React.RefObject<HTMLButtonElement> = React.createRef();
// <FancyButton ref={ref} />

