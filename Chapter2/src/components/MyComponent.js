import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'BangThan',
        address: 'Binh Thuan',
        age: 21
    };
    handleClick(event) {
        console.log(event);
    }
    handleOnMoveOver(event) {
        console.log(event.pageX);
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address};
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMoveOver}>Hover me</button>
            </div>
        );
    }
}
export default MyComponent;