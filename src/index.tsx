import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Main } from './pages/Main';

import './css/style.css';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className='app'>
                <Main />
            </div>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));
