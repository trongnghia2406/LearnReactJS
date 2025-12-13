import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
    // JSX
    render() {
        const myInfo = ['student', 'developer']
        return (
            <div>
                <UserInfo />
                <br />
                <br />
                <DisplayInfo name='BangThan' age='21' />
                <hr />
                <DisplayInfo name='LeTrongNghia' age={21} myInfo={myInfo} />
            </div>
        );
    }
}
export default MyComponent;