import * as React from 'react';
import bind from 'bind-decorator';
import * as mark from 'marked';

import { BlogCard } from '../components/BlogCard';
import { Template } from '../components/Template';
import { Store } from '../index';

import {
  JSEvents,
  JSRuntime,
  Performance,
  ReactHooks,
  Virtualization,
  Webpack
} from './blog_posts';

interface BlogProps {
  store?: Store;
}

export class Blog extends React.Component<BlogProps, any> {
  blogPostRef: React.RefObject<HTMLDivElement> = React.createRef();

  componentDidMount() {
    this.forceUpdate();
  }

  componentDidUpdate() {
    if (this.props.store.blogPost && this.blogPostContainer) {
      this.popuplateBlogPostConent();
    }
  }

  get blogPostContainer(): HTMLDivElement {
    return this.blogPostRef.current;
  }

  @bind
  popuplateBlogPostConent(): void {
    const {
      blogPost
    } = this.props.store;

    const {
      JS_EVENTS,
      JS_RUNTIME,
      PERFORMANCE,
      REACT_HOOKS,
      VIRTUALIZATION,
      WEBPACK
    } = BlogPost;

    let post: string = 'Nothing to show here.';

    switch (blogPost) {
      case JS_EVENTS:
        post = JSEvents;
        break;
      case PERFORMANCE:
        post = Performance;
        break;
      case REACT_HOOKS:
        post = ReactHooks;
        break;
      case VIRTUALIZATION:
        post = Virtualization;
        break;
      case WEBPACK:
        post = Webpack;
        break;
      case JS_RUNTIME:
        post = JSRuntime;
      default:
        break;
    }

    this.blogPostContainer.innerHTML = mark(post);
  }

  @bind
  handleBlogCardClick(event: React.MouseEvent<HTMLDivElement>): void {
    this.props.store.handleBlogCardClick(event.currentTarget.id as BlogPost);
  }

  @bind
  renderBlogPost(): JSX.Element | undefined {
    const {
      blogPost
    } = this.props.store;

    if (blogPost) {
      return <div ref={this.blogPostRef} />
    }
  }

  @bind
  renderBlogCards(): JSX.Element {
    const {
      blogPost
    } = this.props.store;

    if (!blogPost) {
      const {
        JS_EVENTS,
        JS_RUNTIME,
        PERFORMANCE,
        REACT_HOOKS,
        VIRTUALIZATION,
        WEBPACK
      } = BlogPost;

      return (
        <React.Fragment>
          <BlogCard
            id={JS_EVENTS}
            onClick={this.handleBlogCardClick}
            size={'lg'}
            date={`December 10, 2018`}
            title={`Understanding Javscript Events`}
            text={`Keyboard events, mouse events, and so many more.
            I cover the basics of JavaScript events and how
            events are handled in the browser.`}
            read={10}
          />
          <BlogCard
            id={REACT_HOOKS}
            onClick={this.handleBlogCardClick}
            size={'sm'}
            date={`December 10, 2018`}
            title={`React Hooks`}
            text={`An overview of React Hooks and practical examples.`}
            read={10}
          />
          <BlogCard
            id={VIRTUALIZATION}
            onClick={this.handleBlogCardClick}
            size={'md'}
            date={`December 10, 2018`}
            title={`Virtualizing Table Rows`}
            text={`Make your tables, more performant through the 
            technique of virtualization.`}
            read={10}
          />
          <BlogCard
            id={WEBPACK}
            onClick={this.handleBlogCardClick}
            size={'md'}
            date={`December 10, 2018`}
            title={`Understanding Webpack Once and For All`}
            text={`Webpack, and similar bundling packages, are central to front-end development.
            Here I explain the basics as well as provide tips for things you might possibly 
            encounter.`}
            read={10}
          />
          <BlogCard
            id={PERFORMANCE}
            onClick={this.handleBlogCardClick}
            size={'sm'}
            date={`December 10, 2018`}
            title={`React Performance`}
            text={`Here's what I learned about performance after writing a very complex React component.`}
            read={10}
          />
          <BlogCard
            id={JS_RUNTIME}
            onClick={this.handleBlogCardClick}
            size={'lg'}
            date={`December 10, 2018`}
            title={`Understanding The JavaScript Runtime`}
            text={`Here's what I learned about performance after writing a very complex React component.`}
            read={10}
          />
          <BlogCard
            id={JS_RUNTIME}
            onClick={this.handleBlogCardClick}
            size={'lg'}
            date={`December 10, 2018`}
            title={`Getting good at Sas`}
            text={`Here's what I learned about performance after writing a very complex React component.`}
            read={10}
          />
                    <BlogCard
            id={JS_RUNTIME}
            onClick={this.handleBlogCardClick}
            size={'lg'}
            date={`December 10, 2018`}
            title={`Cool stuff from web apis`}
            text={`Here's what I learned about performance after writing a very complex React component.`}
            read={10}
          />
          
        </React.Fragment>
      );
    }
  }

  render() {
    const {
      store
    } = this.props;

    return (
      <Template store={store}>
        <div className='blog'>
          <div className='cards'>
            {this.renderBlogCards()}
            {this.renderBlogPost()}
          </div>
        </div>
      </Template>
    );
  }
}

export enum BlogPost {
  JS_EVENTS = 'javascript-events',
  JS_RUNTIME = 'javascript-runtime',
  PERFORMANCE = 'react-performance',
  REACT_HOOKS = 'react-hooks',
  WEBPACK = 'webpack',
  VIRTUALIZATION = 'virtualization'
}