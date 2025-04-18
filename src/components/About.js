import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

// const About = ()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is namaste webseries</h2>
//         <User name="Shobha N A(Functional)" location ="Bangalore"/>
//         <UserClass name="Shobha N A(Class)" location ="Bangalore"/>
//         </div>
//     )
// }
// export default About;
class About extends React.Component {
    constructor(props){
        super(props);
        // console.log("Parent Constructor");
        
    }
    componentDidMount() {
        // console.log("Parent componentDidMount is called");
      }
  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          loggedIn User
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste webseries</h2>
        {/* <User name="Shobha N A(Functional)" location="Bangalore" /> */}
        <UserClass name="First" location="Bangalore" />
      </div>
    );
  }
}
export default About;