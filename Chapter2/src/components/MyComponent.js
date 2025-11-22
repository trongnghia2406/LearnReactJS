import React from "react";

class MyComponent extends React.Component {
    render() {
        return (
            <div>My first component
                {Math.floor(Math.random() * 1000)}
            </div>
        );
    }
}
export default MyComponent;