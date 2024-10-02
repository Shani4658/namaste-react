// import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }; 

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    };
    render(){
        // console.log("Parent Render")
        return(
            <div>
                
                <UserClass />
                
            </div>
        );
    };
};




export default About;