import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'BangThan', age: 16 },
            { id: 2, name: 'Le Trong Nghia', age: 21 },
            { id: 3, name: 'Haruki', age: 69 },
        ]
    }
    // JSX
    render() {
        // DRY: Don't Repeat Yourself
        return (
            <div>
                <UserInfo />
                <br />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        );
    }
}
export default MyComponent;