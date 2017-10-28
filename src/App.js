import React from 'react';

// Higher Order Component to share functionality
const HOC = (InnerComponent) => class extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
    }
    update() {
        this.setState({count: this.state.count + 1})
    }
    componentWillMount() {
        console.log('will mount');
    }
    render () {
        return <InnerComponent
            {...this.props}
            {...this.state}
            update={this.update.bind(this)}
        />
    }
};

class App extends React.Component {
    render() {
        return (
            <div>
                <Button>button</Button>
                <hr/>
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}

// Stateless Function component
const Button = HOC((props) =>
    <button onClick= {props.update}>{props.children} - {props.count} </button>);

// Full Class Component
class Label extends React.Component {
    componentWillMount() {
        console.log('Label will mount');
    }
    render() {
        return(
            <label onMouseMove={this.props.update}>
                 {this.props.children} - {this.props.count}
                 </label>
        )
    }
}

const LabelHOC = HOC(Label);

export default App


