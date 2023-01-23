// ExampleButton component
class ExampleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
    }
    render() {
        if (this.state.isClicked) {
            return "You clicked this";
        }
        return React.createElement(
            'button',
            { onClick: () => this.setState({ isClicked: true }) },
            'Click Me!'
        );
    }
}

// select root div
const domContainer = document.querySelector('#root');

// create the root of react dom
const root = ReactDOM.createRoot(domContainer);

// render what we see
root.render(React.createElement(ExampleButton)); 