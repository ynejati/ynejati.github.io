import * as React from 'react';
import cx from 'classnames';
import { BlogPost } from '../pages/Blog';

interface BlogCardProps {
  title: string;
  date: string;
  text: string;
  size?: 'sm' | 'md' | 'lg';
  id: BlogPost;
  onClick: ((event: React.MouseEvent<HTMLDivElement>) => void);
  read: number;
}

export class BlogCard extends React.Component<BlogCardProps, any> {
  render() {
    const {
      title,
      date,
      text,
      size,
      id,
      onClick,
      read
    } = this.props;

    const classes: string = cx(`card blog-card shadow-2`, {
      '-lg': size === 'lg',
      '-md': size === 'md',
      '-sm': size === 'sm'
    });

    return (
      <div
        className={classes}
        id={id}
        onClick={onClick}
      >
        <div className='card-title'>
          {title}
        </div>
        <div className='card-subheader'>
          <div className='card-date'>
            {date}
          </div>
          <div className='card-read'>
            {`${read} minute read`}
          </div>
        </div>
        <div className='card-content'>
          {text}
        </div>
      </div>
    );
  }
}