import * as React from 'react';

type ButtonProps = {
  to: string;
  text: string;
  onClick: ((event: React.SyntheticEvent<HTMLButtonElement>) => any);
  className: string;
}

export class Button extends React.Component<any, any> {
  render() {
    const {
      to,
      text,
      onClick,
      classes
    } = this.props;

    return (
      <div
      >
        <button
          className={`button ${classes}`}
          onClick={onClick}
        >
          {text}
          {this.props.children}
        </button>
      </div>
    )
  }
}