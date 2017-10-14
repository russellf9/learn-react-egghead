import React from 'react';


class App extends React.Component {

    render() {
        return (
            <Button>I <Heart/> React.js</Button>
        )
    }
}


// stateless function Component
const Button = (props) =>
    <button>{props.children}</button>;

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>
    }
}

export default App
