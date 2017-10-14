import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
    render() {
        let txt = this.props.txt;
        return (
            <div>
                <div>React version: {React.version}</div>
                <h1>{ txt } </h1>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'default text'
};

// const App = () => <h1>Hello All!</h1>;

export default App
