import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'BangThan',
        address: 'Binh Thuan',
        age: 21
    };
    handleClick(event) {
        console.log('click me');
        this.setState(
            {
                name: 'LeTrongNghia',
                age: Math.floor((Math.random() * 100) + 1)
            }
        )
    }
    handleOnMoveOver(event) {
        // console.log(event.pageX);
    }
    // JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age};
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <button onMouseOver={this.handleOnMoveOver}>Hover me</button>
            </div>
        );
    }
}
export default MyComponent;