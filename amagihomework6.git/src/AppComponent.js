import React from 'react'
import propTypes from 'prop-types';


class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { count, increment, decrement } = this.props;
        return (
            <div>
                <div>{count}</div>
                <button onClick={increment}>Sync Increment</button>
                <button onClick={decrement}>Sync Decrement</button>
            </div>

        )
    }
}

AppComponent.propTypes = {
    count: propTypes.number.isRequired,
    increment: propTypes.func.isRequired
}




export default AppComponent;