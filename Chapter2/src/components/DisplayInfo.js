import React from "react";
class DisplayInfo extends React.Component {
    render() {
        // destructuring props
        const { listUsers } = this.props; // object
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div>My name is {user.name}</div>
                            <div>I'm {user.age} years old</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default DisplayInfo;