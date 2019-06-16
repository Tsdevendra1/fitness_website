import * as React from 'react';

interface NavBarPageProps {
    randomWord: string;
}

interface NavBarPageState {
    counter: number
}

export default class NavBar extends React.Component<NavBarPageProps, NavBarPageState> {

    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        };
        this.onClick = this.onClick.bind(this);

    }

    onClick() {
        this.setState({counter: this.state.counter + 1})
    }

    render() {
        console.log(this.state.counter);
        console.log(this.props.randomWord);
        return (
            <div className="nav-bar-wrapper">
                <h4>This is the navbar</h4>
                <button onClick={this.onClick}>Add Click</button>
            </div>
        )
    }
}
