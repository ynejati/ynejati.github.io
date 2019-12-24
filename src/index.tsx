import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory as createHistory, History, Location } from 'history';
import bind from 'bind-decorator';

import { Main } from './pages/Main';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Blog, BlogPost } from './pages/Blog';
import { Error } from './pages/Error';

import './css/style.css';

export class Store {
    theme: 'dark' | 'light' = 'dark';

    showHamburger: boolean;

    showDrawer: boolean;

    history: History;

    currentPage: string;

    constructor() {
        this.showHamburger = false;
        this.showDrawer = false;
        const currentLocation: string = window.location.pathname;
        this.currentPage = currentLocation;

        this.history = createHistory();

        this.history.listen((location: Location) => {
            this.currentPage = location.pathname;
        });
    }

    switchTheme() {
        if (this.theme === 'dark') {
            this.theme = 'light';
        } else {
            this.theme = 'dark';
        }
    }

    get blogPost(): BlogPost | null {
        const pathName: string = this.currentPage;
        const {
            JS_EVENTS,
            PERFORMANCE,
            REACT_HOOKS,
            VIRTUALIZATION,
            WEBPACK
        } = BlogPost;

        switch (pathName.split('/')[2]) {
            case JS_EVENTS:
                return JS_EVENTS;
            case PERFORMANCE:
                return PERFORMANCE;
            case REACT_HOOKS:
                return REACT_HOOKS;
            case VIRTUALIZATION:
                return VIRTUALIZATION;
            case WEBPACK:
                return WEBPACK;
            default:
                return null;
        }
    }

    @bind
    handleAboutClick(): void {
        this.history.push('/about');
    }

    @bind
    handleProjectsClick(): void {
        this.history.push('/projects');
    }

    @bind
    handleBlogClick(): void {
        this.history.push('/blog');
    }

    @bind
    handleBlogCardClick(post: BlogPost): void {
        this.history.push(`/blog/${post}`);
    }

    @bind
    handleSignatureClick(): void {
        this.history.push('/');
    }
}


class App extends React.Component<{ store: Store }, {}> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const width: any = (window as any).innerWidth;
        const { store } = this.props;

        if (width > 650) {
            store.showDrawer = false;
        } else {
            store.showDrawer = false;
            store.showHamburger = true;
        }

        window.addEventListener('resize', () => {
            const width: number = (window as any).innerWidth;

            if (width > 650 && store.showHamburger) {
                store.showHamburger = false;
                store.showDrawer = false;
            } else if (width < 650 && !store.showHamburger) {
                store.showHamburger = true;
            }
        });
    }

    @bind
    renderContent(): JSX.Element {
        const { currentPage } = this.props.store;

        let page: string = currentPage;

        if (/\/blog\//.test(currentPage)) {
            page = '/blog';
        }

        switch (page) {
            case '/':
                return <Main store={store} />;
            case '/blog':
                return <Blog store={store} />;
            case '/about':
                return <About store={store} />;
            case '/projects':
                return <Projects store={store} />;
            default:
                return <Error store={store} />;
        }
    }


    render() {
        return (
            <div className='app'>
                {this.renderContent()}
            </div>
        );
    }
};

const store = new Store();
ReactDOM.render(<App store={store} />, document.getElementById('root'));
