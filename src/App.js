import React from 'react';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            txt: 'This is the state text!',
            cat: 1
        }
    }
    update( e ) {
        this.setState({txt: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text"
                      onChange={this.update.bind(this)}/>
                <h1> { this.state.txt } - { this.state.cat } </h1>
                <div>React version: {React.version}</div>
            </div>
        )
    }
}


export default App
