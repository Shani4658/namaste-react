import { useState } from "react";

const User = (props) => {
    let [count, setCount] = useState(0);

    

    console.log(count);

    return (
        <div className="user-card">
            <h2><button onClick={() =>{
                setCount(count + 1);
            }}>Increment</button> {count} Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: shanidevkashyap8913@gmail.com</h4>
            
        </div>
    );
};


export default User;