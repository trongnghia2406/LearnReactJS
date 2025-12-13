import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'BangThan', age: 16 },
            { id: 2, name: 'Le Trong Nghia', age: 21 },
            { id: 3, name: 'Haruki', age: 69 },
        ]
    }
    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = [...this.state.listUsers];
        listUsersClone = listUsersClone.filter(user => user.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })
    }

    // JSX
    render() {
        // DRY: Don't Repeat Yourself
        const test = { name: 'Nghia', age: 21 };
        return (
            <>
                {/* {test} -> Error*/}
                {JSON.stringify(test)}
                {console.log('>>> Test JSX: ', test)}
                <div className="a">
                    <AddUserInfo
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br />
                    <DisplayInfo
                        listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b">

                </div>
            </>
        );
    }
}
export default MyComponent;